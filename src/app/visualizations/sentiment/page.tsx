'use client'

import SectionHeader from '../../../components/SectionHeader'
import Image from 'next/image'

export default function SentimentAnalysis() {
  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader
        title="Sentiment Analysis"
        subtitle="Analysis of public sentiment about debt and inflation"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none">
            <h2>Public Sentiment Analysis</h2>
            <p>
              This section analyzes public sentiment about debt on Reddit. The data is classifed as pos (positive), neg (negative), or (neu)neutral by Twitter-Roberta model, a model used to classify the sentiments of social media posts.
              The three types of data are: posts containing "national debt" or "national deficit", comments containing "national debt" or "national deficit", and comments on posts containing "national debt" or "national deficit".
            </p>

            <div className="mt-8 space-y-12">
              <div>
                <h3>Post Sentiment Analysis - Politics</h3>
                <p>
                  Data of sentiments in r/Politics posts, showing both the volume of posts
                  and their net sentiment scores over time. The data indicates that the sentiment of posts is mostly negative or neutral.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/Posts/Politics_Sentiment_Post_Count.png"
                      alt="Politics posts volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/Posts/Politics_Sentiment_Post_Net.png"
                      alt="Politics posts net sentiment"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Post Sentiment Analysis - Economics</h3>
                <p>
                  Analysis of sentiment in r/Economics posts. The general trend is similar to r/Politics, but there are months with more positive sentiment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Posts/Economics_Sentiment_Post_Count.png"
                      alt="Economics posts volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/Posts/Economics_Sentiment_Post_Net.png"
                      alt="Economics posts net sentiment"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Comment Sentiment Analysis - Politics</h3>
                <p>
                  Data of sentiment in r/Politics comments. The sentiment is very negative throughout, with little variation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/comments/Politics_Sentiments_Comments_Count.png"
                      alt="Politics comments volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/comments/Politics_Sentiment_Count_Net.png"
                      alt="Politics comments net sentiment"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Comment Sentiment Analysis - Economics</h3>
                <p>
                  Data of sentiment in r/Economics comments.
                </p>
                <p>
                  The sentiment is more varied and slightly more positive than r/Politics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/comments/Economics_Sentiment_Comment_Count.png"
                      alt="Economics comments volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/comments/Economics_Sentiment_Comment_Net.png"
                      alt="Economics comments net sentiment"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Comments on Posts Sentiment Analysis - Politics</h3>
                <p>
                  Data of sentiment in comments made on r/Politics on posts containing "national debt" or "national deficit".
                </p>
                <p>
                  Sentiments of comments on posts about debt are slightly more positive than r/Politics comments containing "national debt" or "national deficit", but they are still mostly negative.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/comments_on_posts/Politics_Sentiment_Comments_Posts_Count.png"
                      alt="Politics comments on posts volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/comments_on_posts/Politics_sentiments_Comment_Post_Net.png"
                      alt="Politics comments on posts net sentiment"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Comments on Posts Sentiment Analysis - Economics</h3>
                <p>
                  Data of sentiment in comments made on r/Economics on posts containing "national debt" or "national deficit".
                </p>
                <p>
                  The pattern in r/Politics comments on posts about debt is similar here.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/comments_on_posts/Economics_Sentiment_Comment_Post_Count.png"
                      alt="Economics comments on posts volume over time"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/Reddit_Sentiments/comments_on_posts/Economics_Sentiment_Comment_Post_Net.png"
                      alt="Economics comments on posts net sentiment"
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
            The sentiment data does not show a clear relationship between the sentiments of posts, comments, or comments on posts and the recessions that occurred in 2008 and 2020. The sentiments hovered around their mean, suggesting that external forces did not change the sentiment people have towards the national debt. It also suggests that even though the national debt increased in size, people still think negatively about it. While one could argue that the subject of the national debt is already negatively charged, so people would be already negatively polarized. However, there is no evidence suggesting that people are even more negative about it now than 14 years ago. Secondly, one could argue that the model could see the word “national debt” or “national deficit” and classify that as negative. My argument against that is that the model is geared towards social media in general, not finance, so it may not necessarily have that as a negative sentiment word. Secondly, the comments on posts containing “national debt” or “national deficit” are also very negative, suggesting that it isn’t just the word itself that is causing the model to say the comments are negative.
            </p>
            <p>
            What does this mean in the context of Cochrane’s narrative? It suggests that either sentiments are unrelated to how people perceive the government as being able to pay back its debt, or that there has been no change in how people perceive the government as being able to pay back its debt. Neither one supports his narrative; the second one actually is evidence against his narrative, as he argues that post-Covid inflation was the result of the lessening belief in the government.
            </p>
          </div>
        </div>
       {/* Methodology Section */}
       <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="prose prose-lg max-w-none">
            <h3>Methodology</h3>
            <p>
             The data is downloaded from Academic Torrents and processed through "Sentiment_Analysis.py" and "plot sentiment data.py"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 