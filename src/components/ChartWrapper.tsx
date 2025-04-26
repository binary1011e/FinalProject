'use client'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

export default function ChartWrapper({
  data,
  options,
}: {
  data: any
  options?: any
}) {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <Line data={data} options={options} />
    </div>
  )
}
