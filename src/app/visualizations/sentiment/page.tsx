import SectionHeader from '../../../components/SectionHeader'

export default function SentimentPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader
        title="Sentiment Analysis"
        subtitle="Analyzing public sentiment around debt and inflation"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none">
            <p>
              Our sentiment analysis examines public discourse around government debt and inflation 
              through social media posts, news articles, and economic commentary. This helps us 
              understand how public perception of fiscal policy influences inflation expectations.
            </p>
            
            <div className="my-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="mt-0">Coming Soon</h3>
              <p className="mb-0">
                We are currently processing sentiment data from multiple sources. The visualization 
                will be updated to show sentiment trends and their correlation with economic indicators.
              </p>
            </div>

            <h3>Methodology</h3>
            <p>
              We use natural language processing and machine learning algorithms to analyze:
            </p>
            <ul>
              <li>Social media discussions about government debt and inflation</li>
              <li>News article sentiment and coverage patterns</li>
              <li>Economic expert commentary and analysis</li>
              <li>Public policy discussion forums</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 