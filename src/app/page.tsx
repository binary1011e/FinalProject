import SectionHeader from '../components/SectionHeader'

export default function HomePage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <div className="relative">
        {/* Hero section */}
        <SectionHeader
          title="Do Debt‑Worries Drive Inflation?"
          subtitle="An empirical test of the Fiscal Theory of the Price Level"
        />
        
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 backdrop-blur-sm bg-white/50">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Welcome! Navigate via the bar above to explore the FTPL theory, data pipeline, visualizations, results, and conclusion.
            </p>
            
            {/* Quick links */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <QuickLink
                title="Theory Background"
                description="Understand the Fiscal Theory of the Price Level"
                href="/background"
              />
              <QuickLink
                title="Data Analysis"
                description="Explore our data pipeline and methodology"
                href="/data"
              />
              <QuickLink
                title="Key Findings"
                description="View our results and conclusions"
                href="/conclusion"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function QuickLink({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a
      href={href}
      className="block p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-100"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  )
}
