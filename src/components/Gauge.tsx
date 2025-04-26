export default function Gauge({
    value,
    label,
  }: {
    value: number
    label: string
  }) {
    return (
      <div className="text-center my-12">
        <h3 className="text-2xl font-medium">{label}</h3>
        <div className="
          mx-auto mt-4
          w-36 h-36
          rounded-full border-8 border-gray-300
          flex items-center justify-center
          text-5xl font-bold text-gray-700
        ">
          {value}
        </div>
      </div>
    )
  }
  