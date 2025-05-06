'use client'

import SectionHeader from '../../../components/SectionHeader'
import Image from 'next/image'

export default function RedditData() {
  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader
        title="Reddit Data Analysis"
        subtitle="Analysis of Reddit discussions about debt and inflation"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none">
            <h2>Reddit Discussion Analysis</h2>
            <p>
              This section analyzes discussions about debt from Reddit posts and comments. The data is collected from Academic Torrents data dumps.
            </p>

            <div className="mt-8 space-y-12">
              <div>
                <h3>Post Analysis - Politics</h3>
                <p>
                  Graph of posts in r/Politics that contain "national debt" or "national deficit", showing the count of posts and their "score" (upvotes - downvotes) over time.
                </p>
                <p>
                  Interestingly, the number of posts from 2011-2013 peaked, but it had little effect on the total score of the posts. The reverse can be seen during the later 2010s and early 2020s.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Posts/Post_Politics_Count.png"
                      alt="Politics posts volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Posts/Post_Politics_Score.png"
                      alt="Politics posts sentiment scores"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Post Analysis - Economics</h3>
                <p>
                  Graph of posts in r/Economics that contain "national debt" or "national deficit".
                </p>
                <p>
                  There are few posts about the national debt or deficit, but they were most popular from 2018-2021 and 2024.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Posts/Post_Economics_Count.png"
                      alt="Economics posts volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Posts/Post_Economics_Score.png"
                      alt="Economics posts sentiment scores"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Comment Analysis - Politics</h3>
                <p>
                  Analysis of comments in politics-related discussions.
                </p>
                <p>
                  Scores started to increase post 2016, indicating that more participation happened through voting rather than just commenting.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Comments/Comment_Politics_Count.png"
                      alt="Politics comments volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Comments/Comment_Politics_Score.png"
                      alt="Politics comments sentiment scores"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Comment Analysis - Economics</h3>
                <p>
                  Analysis of comments in economics-related discussions, showing both the volume of comments
                  and their sentiment scores over time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Comments/Comment_Economics_Count.png"
                      alt="Economics comments volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Comments/Comment_Economics_Score.png"
                      alt="Economics comments sentiment scores"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Comments on Posts Analysis - Politics</h3>
                <p>
                  Analysis of comments made on politics-related posts, showing both the volume of comments
                  and their sentiment scores over time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Comments_on_posts/Comment_Post_Politics_Count.png"
                      alt="Politics comments on posts volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Comments_on_posts/Comment_Post_Politics_Score.png"
                      alt="Politics comments on posts sentiment scores"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Comments on Posts Analysis - Economics</h3>
                <p>
                  Analysis of comments made on economics-related posts, showing both the volume of comments
                  and their sentiment scores over time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Comments_on_posts/Comment_Post_Economics_Count.png"
                      alt="Economics comments on posts volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_data/Comments_on_posts/Comment_Post_Economics_Score.png"
                      alt="Economics comments on posts sentiment scores"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 mb-8">
          <div className="prose prose-lg max-w-none">
            <h3>Key Insights</h3>
            <p>
              A lot of analysis about raw reddit data is limited by the general trends of reddit. For example, the score of comments and posts on Reddit all rise post 2016, suggesting a general trend in Reddit rather than specfic to the terms. Any analysis dealing with raw numbers should take this into account.
            </p>
            <p>
                However, three trends can be seen: the large amount of early posts about debt (2011-2013 for r/politics and 2008-2012), the spike in comments about debt from 2016-2021, and a rise in comments in 2024. These facts do not support Cochrane's narrative about a difference in deficit worries post 2008 and 2020, as debt discussion rose in both periods.
            </p>
          </div>
        </div>
         {/* Methodology Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none">
            <h3>Methodology</h3>
            <p>
             The data is downloaded from Academic Torrents and processed through "plot csv data_volume.py"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 