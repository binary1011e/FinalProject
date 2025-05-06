'use client'

import { useState, useEffect } from 'react'
import SectionHeader from '../../../../components/SectionHeader'
import Gauge from '../../../../components/Gauge'

// March 2024 baseline values

// Standard deviations
const STANDARD_DEVIATIONS = {
  debt: 12.689130,
  deficit: 14.489792,
  repayment: 16.143327,
  gov_spending: 12.509983,
  debt_ceiling: 115.748289,
  debt_to_gdp: 20.184450,
  public_debt: 12.966446,
}

// Means
const MEANS = {
  debt: 59.364052,
  deficit: 65.732849,
  repayment: 80.812283,
  gov_spending: 32.791340,
  debt_ceiling: 15.812764,
  debt_to_gdp: 32.984322,
  public_debt: 44.856262,
}

// Regression coefficients
const SEARCH_TERM_COEFFICIENTS = {
  debt: -0.007409,
  deficit: 0.102452,
  repayment: 0.126231,
  'government spending': 0.166144,
  'debt ceiling': 0.100343,
  'debt to gdp': -0.339073,
  'public debt': -0.043174,
}

const INTERCEPT = 1.9675

export default function DebtWorryCalculator() {
  const [searchValues, setSearchValues] = useState({
    debt: { current: '0' },
    deficit: { current: '0' },
    repayment: { current: '0' },
    gov_spending: { current: '0' },
    debt_to_gdp: { current: '0' },
    public_debt: { current: '0' },
  })

  const [debtWorryIndex, setDebtWorryIndex] = useState<number | null>(null)
  const [predictedInflation, setPredictedInflation] = useState<number | null>(null)

  const handleInputChange = (term: string, value: string) => {
    setSearchValues(prev => ({
      ...prev,
      [term]: {
        current: value
      }
    }))
  }

  const calculateZScore = (value: number, term: string) => {
    return (value - MEANS[term as keyof typeof MEANS]) / STANDARD_DEVIATIONS[term as keyof typeof STANDARD_DEVIATIONS]
  }

  const calculateDebtWorry = () => {
    let weightedSum = 0

    // Calculate z-scores and weighted sums for each term
    Object.entries(searchValues).forEach(([term, values]) => {
      const termKey = term === 'gov_spending' ? 'government spending' : 
                     term === 'debt_to_gdp' ? 'debt to gdp' :
                     term === 'public_debt' ? 'public debt' : term

      const numericValue = parseFloat(values.current) || 0
      // Skip if the term is not in SEARCH_TERM_COEFFICIENTS
      if (!(termKey in SEARCH_TERM_COEFFICIENTS)) return;
      
      const zScore = calculateZScore(numericValue, term)
      weightedSum += zScore * SEARCH_TERM_COEFFICIENTS[termKey as keyof typeof SEARCH_TERM_COEFFICIENTS]
    })

    // Add constant adjustment for debt ceiling coefficient when debt ceiling is 0
    const debtCeilingZScoreAtZero = -MEANS.debt_ceiling / STANDARD_DEVIATIONS.debt_ceiling
    const debtCeilingAdjustment = debtCeilingZScoreAtZero * SEARCH_TERM_COEFFICIENTS['debt ceiling']

    // Calculate predicted inflation
    const predictedInflationValue = INTERCEPT + weightedSum + debtCeilingAdjustment

    setDebtWorryIndex(weightedSum + debtCeilingAdjustment)
    setPredictedInflation(predictedInflationValue)
  }

  useEffect(() => {
    calculateDebtWorry();
  }, []);

  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader
        title="Debt Worry Calculator"
        subtitle="Calculate current debt worry and predicted inflation"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none">
            <p className="mb-8">
              Enter the current Google Trends values for each search term to calculate the Debt Worry Index and predicted inflation expectations.
              <strong> Important: </strong> Use the raw Google Trends values (0-100) directly from Google Trends max view without any rescaling. Debt ceiling is given as 0 value (negative z-score), which is why the debt index starts out as -0.81.
            </p>

            <div className="space-y-8">
              {Object.entries(SEARCH_TERM_COEFFICIENTS).map(([term, coefficient]) => {
                // Skip debt ceiling as it's handled as a constant adjustment
                if (term === 'debt ceiling') return null;
                
                // Convert display term to state key
                const stateKey = term === 'government spending' ? 'gov_spending' :
                               term === 'debt to gdp' ? 'debt_to_gdp' :
                               term === 'public debt' ? 'public_debt' : term
                
                return (
                  <div key={term} className="border rounded-lg p-4">
                    <h4 className="text-lg font-medium mb-4">
                      {term.charAt(0).toUpperCase() + term.slice(1)} (coefficient: {coefficient})
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Current Value (0-100)
                        </label>
                        <input
                          type="number"
                          value={searchValues[stateKey as keyof typeof searchValues]?.current || ''}
                          onChange={(e) => handleInputChange(stateKey, e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter value"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <button
              onClick={calculateDebtWorry}
              className="w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-8"
            >
              Calculate
            </button>

            {(debtWorryIndex !== null || predictedInflation !== null) && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Results</h3>
                {debtWorryIndex !== null && (
                  <>
                    <p className="mb-4">
                      <span className="font-medium">Current Debt Worry Index:</span>{' '}
                      {debtWorryIndex.toFixed(4)}
                    </p>
                    <div className="mb-4">
                      <Gauge value={debtWorryIndex} />
                    </div>
                  </>
                )}
                {predictedInflation !== null && (
                  <p>
                    <span className="font-medium">Predicted Inflation Expectation:</span>{' '}
                    {predictedInflation.toFixed(4)}%
                  </p>
                )}
              </div>
            )}

            <div className="mt-8 text-sm text-gray-500">
              <p>Note: This calculator uses the following coefficients:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Intercept: {INTERCEPT}</li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 font-medium">Important Disclaimer:</p>
                <p className="text-yellow-700 mt-2">
                  The inflation expectations calculated by this model should not be treated as serious predictions. The model has an R-squared value of only 0.135, indicating that it explains only about 13.5% of the variation in inflation expectations. This means there are many other factors influencing inflation expectations that are not captured by this model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 