import SectionHeader from '../../components/SectionHeader'
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const mathJaxConfig = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] }
};

export default function BackgroundPage() {
  return (
    <MathJaxContext config={mathJaxConfig}>
      <section>
        <SectionHeader title="Background: The FTPL" />
        <p>
          The Fiscal Theory of the Price Level (FTPL) holds that unexpected inflation arises when the public believes government debt won't be matched by future surpluses—because in equilibrium the real value of debt must equal the present value of expected surpluses. John Cochrane argues that deficits after the Great Recession were seen as temporary (and thus didn't spark inflation), whereas COVID-era deficits lacked that "promise of payback," helping fuel the post-COVID inflation surge.
        </p>
        <p>
          The FTPL equilibrium condition can be expressed as:
        </p>
        <MathJax dynamic>{`$$
\\mathbb{E}_t \\left( \\frac{B_t}{P_{t+1}} \\right) = \\sum_{i=1}^{\\infty} \\frac{s_{t+i\,e}}{(1+r_{i \,e})^2}
$$`}</MathJax>
        <p>
          Because expected surpluses are unobservable, this project uses public sentiment measured via Google Trends and social media posts about "deficit," "debt," and related terms as a proxy. By building a composite Debt-Worry Index, we test whether spikes in deficit-concern align with rises in 1-year inflation expectations (and, ultimately, actual inflation), and whether debt worries can explain a portion of inflation expectations, providing tangible evidence for the FTPL narrative. I will refer to the narrative that the Great Recession and Covid had different inflation trajectories because of differences in expected surplus and the overall FTPL narrative as Cochrane's narrative.
        </p>
      </section>
    </MathJaxContext>
  )
}
