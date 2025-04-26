import SectionHeader from '../../components/SectionHeader'
import Image from 'next/image'

const visualizations = [
  {
    id: 'google-trends',
    title: 'Google Trends Analysis',
    description: 'This visualization shows the 4-Week Average Google Trends data for key debt-related search terms from 2006 to 2024. The graph reveals interesting patterns in public interest regarding government debt, deficit, and spending over time.',
    imagePath: '/google-trends.png',
    width: 1200,
    height: 800,
  },
  // Add more visualizations here as needed
]

export default function VisualizationsPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader
        title="Data Visualizations"
        subtitle="Exploring patterns in debt-related public interest and economic indicators"
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
      </div>
    </div>
  )
}
