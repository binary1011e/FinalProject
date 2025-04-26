import SectionHeader from '../../components/SectionHeader'

export default function DataPage() {
  return (
    <section>
      <SectionHeader title="Data & Methodology" />
      <h3>Data Sources</h3>
      <ul>
        <li>Google Trends (weekly terms)</li>
        <li>Reddit • X • Bluesky web scrapes</li>
        <li>News article sentiment</li>
      </ul>
      <h3>Pipeline</h3>
      <ol>
        <li>Fetch & splice weekly Trends windows</li>
        <li>Rescale overlaps & compute 4‑week averages</li>
        <li>Run RoBERTa‑based sentiment on scraped posts</li>
      </ol>
    </section>
  )
}
