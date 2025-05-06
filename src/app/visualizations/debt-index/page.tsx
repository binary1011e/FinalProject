import SectionHeader from '../../../components/SectionHeader'
import Image from 'next/image'
import Link from 'next/link'

export default function DebtIndexPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader
        title="Debt Worry Index"
        subtitle="Measuring public concern about government debt"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none">
            <div className="flex justify-end mb-8">
              <Link 
                href="/visualizations/debt-index/calculator"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Try the Debt Worry Calculator
              </Link>
            </div>

            <p>
              The Debt Worry Index is a composite measure that combines the multiple terms from Google Trends to gauge 
              public concern about government debt. This index helps us understand how debt-related 
              worries might influence inflation expectations and economic behavior. The expected inflation comes from FRED EXPINF1YR data.
            </p>

            <h3>Google Trends Analysis</h3>
            <p>Below are visualizations using only Google Trends data to analyze debt-related concerns:</p>
            
            <div className="grid grid-cols-1 gap-8 my-8">
              <div>
                <h4 className="text-center">Debt Worry Index with Z-Score</h4>
                <Image
                  src="/Regression/Debt worry index with only z score.png"
                  alt="Debt Worry Index with Z-Score"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                  Shows the standardized (z-score) version of the Debt Worry Index, highlighting periods of unusually high or low public concern about debt.
                  Here the index is calculated using the average of the z-score of the components (each component is weighted equally).
                </p>
              </div>
              
              <div>
                <h4 className="text-center">Significance test of the index</h4>
                <Image
                  src="/Regression/Significance.png"
                  alt="Testing Different Lags"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                  I regress the index on expected inflation to achieve an R^2 of 0.135. 
                </p>
              </div>
              
              <div>
                <h4 className="text-center">Significance continued</h4>
                <Image
                  src="/Regression/Significance_p_value.png"
                  alt="Significance of Different Lags"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              <div>
                <h4 className="text-center">Prediction vs Actual</h4>
                <Image
                  src="/Regression/Predicted_actual.png"
                  alt="K = 3 Regression Index"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                  This shows the predicted and actual values of expected inflation. The test R² = -0.08730325796956695, indicating overfitting and no relaitonship between predicted and actual values post covid.
                </p>
              </div>
            </div>

            <h3>Regression Analysis</h3>
            <p>
              The regression indicates that Google Trends data has little to no relationship with inflation expectations. The low R^2, especially when tested post covid, indicates that Google Trends data can not be used to predict inflation expectations. This means that one would have to find other ways to measure public concern about government debt if they want to support the narrative that worries about debt contributed to increases in inflation.
            </p>

            <h3>Keyword Weights</h3>
            <p>
              The regression analysis reveals how different debt-related search terms contribute to the index:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variable</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coefficient</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">debt</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-0.007409</td></tr>
                  <tr><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">deficit</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.102452</td></tr>
                  <tr><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">repayment</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.126231</td></tr>
                  <tr><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">gov_spending</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.166144</td></tr>
                  <tr><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">debt_ceiling</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.100343</td></tr>
                  <tr><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">debt_to_gdp</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-0.339073</td></tr>
                  <tr><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">public_debt</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-0.043174</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              The intercept term of 1.8975 represents the baseline inflation expectation when all search terms are at 0 z-score. The weights show that searches for "government spending" have the strongest positive relationship with inflation expectations, while searches for "government spending", interestingly, "debt-to-gdp" has the strongest negative relationship.
            </p>

            <h3>Methodology</h3>
            <p>
              The file "indexregressed.py" is used to get the regression and plots,
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 