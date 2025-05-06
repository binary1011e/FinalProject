import SectionHeader from '../../components/SectionHeader'
import Link from 'next/link'

export default function DataPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader title="Data & Methodology" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none">
            <h2>Data Sources</h2>
            <ul>
              <li>
                <strong>Google Trends</strong> - Monthly search term data for debt-related queries
              </li>
              <li>
                <strong>Reddit Data</strong> - Historical Reddit posts and comments from 2005-2024 for r/politics and r/economics, totaling 27 GB of data to parse through.

                <ul>
                  <li>
                    <Link 
                      href="https://academictorrents.com/details/1614740ac8c94505e4ecb9d88be8bed7b6afddd4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Academic Torrents Dataset.
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <h2>Data Processing Pipeline for Google Trends</h2>
            <ol>
              <li>Fetch the monthly data from Google Trends for each term</li>
              <li>Normalize the data to a z score</li>
              <li>Run an OLS regression on inflation expectations to get the coefficients for each term</li>
              <li>Save the data to a csv file. Plot all data using matplotlib.</li>
            </ol>
            <h2>Data Processing Pipeline for Reddit Data</h2>
            <ol>
              <li>Fetch the subreddit data from the academic torrents dataset (qBittorrent client).</li>
              <li>Parse through the data to find all the posts and comments containing "national debt" or "national deficit"</li>
              <li>Collect the data of all comments on posts containing "national debt" or "national deficit" and save it to a csv file.</li>
              <li>Use the Twitter Roberta model to get the sentiment of the comments.</li>
              <li>Save the data to a csv file. Plot all data using matplotlib.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
