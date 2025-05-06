import SectionHeader from '../../../components/SectionHeader'
import Image from 'next/image'

const visualizations = [
  {
    id: '4-week',
    title: 'Monthly Average Google Trends',
    description: 'This visualization shows the monthly Average Google Trends data for key debt-related search terms from 2006 to 2024. Each term is independent of the others and scaled from 0 to 100.',
    imagePath: '/google-trends.png',
    width: 1200,
    height: 800,
  },
  {
    id: '52-week',
    title: '52-Week Average Google Trends',
    description: 'This visualization presents the 52-Week Average Google Trends data.',
    imagePath: '/52-Week Average Google Trends.png',
    width: 1200,
    height: 800,
  },
  {
    id: 'percent-change',
    title: '52-Week Percentage Change',
    description: 'This visualization shows the year-over-year percentage change in Google Trends data.',
    imagePath: '/52-week percentage change.png',
    width: 1200,
    height: 800,
  },
]

export default function GoogleTrendsPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader
        title="Google Trends Analysis"
        subtitle="Tracking public interest in debt-related topics over time"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {visualizations.map((viz) => (
          <div 
            key={viz.id}
            className="mb-16 bg-white rounded-2xl shadow-xl p-8 sm:p-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {viz.title}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {viz.description}
            </p>
            <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-gray-200">
              <Image
                src={viz.imagePath}
                alt={viz.title}
                width={viz.width}
                height={viz.height}
                className="object-contain"
                priority
              />
            </div>
          </div>
        ))}
        
        {/* Analysis Section (moved above Methodology) */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 mb-8">
          <div className="prose prose-lg max-w-none">
            <h3>Key Insights</h3>
            <p>
            The monthly average graph is hard ot interpret; all the data is fuzzy and trends are hard to see. The story becomes clearer in the second graph of the yearly changes in the terms. Many terms fell in popularity pre-Great Recession, including public debt, deficit,  and government spending. Inflation expectations stayed relatively constant, leading to the conclusion that the popularity of these terms is uncorrelated with inflation expectations. Post-Great Recession, most terms stayed constant in popularity except for debt-to-GDP, which spiked. Inflation expectations during this period dropped sharply before returning to the new lower baseline, indicating again that the terms are relatively uncorrelated with inflation expectations. During the years pre covid, both inflation expectations and the popularity of the terms remained constant, data that wouldn’t be against Cochrane’s narrative if the terms are good measures of the ability of the government to repay its debts. Post-Covid, every term besides the debt ceiling rose, which seems to align with expected inflation. However, inflation expectations rose earlier than the popularity of the terms: inflation expectations started rising mid 2021 while the terms rose in 2022, supporting the narrative of a reversal causal effect.
            </p>
            <p>
            The debt ceiling term seems to track with debt ceiling crises: the sharp spike in debt ceiling coincides with the 2011 debt ceiling crisis, and similar spikes align with debt ceiling suspensions or changes. The lack of effect on inflation expectations suggests that either fear of default is unrelated to inflation (contradictory to Cochrane’s narrative), or that the public is confident in deficit repayment, even with the debt ceiling crises (aligns with Cochrane’s narrative).
            </p>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none">
            <h3>Methodology</h3>
            <p>
             The data is downlaoded from Google Trends and processed through graph.py
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 