import SectionHeader from '../../../components/SectionHeader'
import Image from 'next/image'

export default function GoogleTrendsPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader
        title="Google Trends Analysis"
        subtitle="Tracking public interest in debt-related topics over time"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none mb-8">
            <p>
              This visualization tracks the 4-Week Average Google Trends data for key debt-related search terms from 2006 to 2024. 
              The graph reveals how public interest in government debt, deficit, and spending has evolved over time, particularly 
              during major economic events and policy changes.
            </p>
            <h3>Key Observations</h3>
            <ul>
              <li>Notable spikes in debt-related searches during the 2008 financial crisis and 2020 pandemic</li>
              <li>Consistent cyclical patterns in public interest around budget and deficit discussions</li>
              <li>Growing correlation between debt concerns and inflation expectations</li>
            </ul>
          </div>
          
          <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-gray-200">
            <Image
              src="/google-trends.png"
              alt="Google Trends Analysis of Debt-Related Search Terms"
              width={1200}
              height={800}
              className="object-contain"
              priority
            />
          </div>
          
          <div className="mt-8 prose prose-lg max-w-none">
            <h3>Methodology</h3>
            <p>
              Data is collected from Google Trends API, normalized, and smoothed using a 4-week moving average 
              to reduce noise while preserving meaningful patterns. Search terms were selected based on their 
              relevance to fiscal policy and public debt concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 