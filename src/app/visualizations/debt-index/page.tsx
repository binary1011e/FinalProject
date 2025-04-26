import SectionHeader from '../../../components/SectionHeader'

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
            <p>
              The Debt Worry Index is a composite measure that combines multiple indicators to gauge 
              public concern about government debt. This index helps us understand how debt-related 
              worries might influence inflation expectations and economic behavior.
            </p>
            
            <div className="my-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="mt-0">Coming Soon</h3>
              <p className="mb-0">
                We are currently aggregating data from various sources to construct the Debt Worry Index. 
                The visualization will include both historical trends and real-time updates.
              </p>
            </div>

            <h3>Index Components</h3>
            <p>The index incorporates several key metrics:</p>
            <ul>
              <li>Google Trends data for debt-related searches</li>
              <li>Social media sentiment analysis</li>
              <li>News coverage intensity</li>
              <li>Survey-based measures of public concern</li>
              <li>Market-based indicators of fiscal stress</li>
            </ul>

            <h3>Methodology</h3>
            <p>
              The index is constructed using a weighted average of standardized components, 
              with weights determined through principal component analysis to capture the 
              maximum variation in debt-related public concern.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 