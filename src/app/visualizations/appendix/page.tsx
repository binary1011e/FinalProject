"use client"

import { useState } from 'react'
import SectionHeader from '../../../components/SectionHeader'
import Image from 'next/image'
import ImageModal from '../../../components/ImageModal'

const categories = [
  {
    title: 'Monthly Trends',
    description: 'Monthly trends in key economic indicators',
    graphs: [
      { title: 'Debt', path: '/Seperate graphs/Monthly_debt_figure.png' },
      { title: 'Public Debt', path: '/Seperate graphs/Monthly_public_debt_figure.png' },
      { title: 'Deficit', path: '/Seperate graphs/Monthly_deficit_figure.png' },
      { title: 'Debt to GDP', path: '/Seperate graphs/Monthly_debt_to_gdp_figure.png' },
      { title: 'Debt Ceiling', path: '/Seperate graphs/Monthly_debt_ceiling_figure.png' },
      { title: 'Government Spending', path: '/Seperate graphs/Monthly_Government_Spending_Figure.png' },
      { title: 'Repayment', path: '/Seperate graphs/Monthly_repayment_figure.png' },
    ]
  },
  {
    title: 'Yearly Trends',
    description: 'Yearly trends in key economic indicators',
    graphs: [
      { title: 'Debt', path: '/Seperate graphs/Yearly_debt_figure.png' },
      { title: 'Public Debt', path: '/Seperate graphs/Yearly_public_debt_figure.png' },
      { title: 'Deficit', path: '/Seperate graphs/Yearly_deficit_figure.png' },
      { title: 'Debt to GDP', path: '/Seperate graphs/Yearly_debt_to_gdp_figure.png' },
      { title: 'Debt Ceiling', path: '/Seperate graphs/Yearly_debt_ceiling_figure.png' },
      { title: 'Government Spending', path: '/Seperate graphs/Yearly_goverment_spending_figure.png' },
      { title: 'Repayment', path: '/Seperate graphs/Yearly_repayment_figure.png' },
    ]
  }
]

export default function AppendixPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="min-h-full bg-gradient-to-b from-white to-gray-50">
      <SectionHeader
        title="Data Appendix"
        subtitle="Detailed breakdown of Google Trends data by search term"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {category.title}
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              {category.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.graphs.map((graph, graphIndex) => (
                <div 
                  key={graphIndex}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage({
                    src: graph.path,
                    alt: `${category.title} - ${graph.title}`
                  })}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {graph.title}
                  </h3>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={'' + graph.path}
                      alt={`${category.title} - ${graph.title}`}
                      width={800}
                      height={600}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
} 