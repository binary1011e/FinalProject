import SectionHeader from '../../components/SectionHeader'

export default function ReflectionPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader
        title="Reflection"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none">
            <h2>Project Reflection</h2>
            <p>
              This was a fun project to work on, but I made an early mistake which sidetracked me and cost me a lot of time. Nevertheless, I am loved working on the project and am proud of what I did :D.
            </p>

            <h3>Key mistake</h3>
            <p>
              When I was gathering google trends data, I thought I had a correct algorithm to gather weekly data. Google Trends only allows for you to gather weekly data in 3 months interval, but I thought I could stitch them together and be accurate. Coincidentally, when I ran my regression on this, I had an R^2 of 0.336 (without much overfitting). I was excited at this and gathered a lot of plots and writing for this, but it wasn't until I finished my debt worry calculator that I realized my mistake. I recognize that the results don't matter as much as the process, but it was still a little deflating having it go back and correct a lot of my work.
            </p>

            <h3>Challenges in data scraping</h3>
            <p>
              It was hard finding a good api that would 1. allow me to gather a lot of data and 2. have not only real time data, but also historical data. Even on Reddit, one of the sites easiest to gather data, the PRAW api had no historical data and was spotty when I tried using it, and PSAW and pushshift were no longer supported. Other social media sites were even more difficult, as they had worse APIs or did not allow scraping, which made my scraping attempts very hard. I am lucky for the data dumps to exist containing gigabytes of data for me to process, and one could argue that Reddit is comprehensive enough to reflect broad sentiments, but I still feel it is a shame for not having other sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 