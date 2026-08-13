import Layout from '../components/layout/Layout'
import PageBanner from '../components/common/PageBanner'
import { faqs } from '../data/faqs'

export default function Faqs() {
  return (
    <Layout footerBg>
      <PageBanner
        title="FAQ's"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: "FAQ's", to: '/faqs' },
        ]}
      />

      <div className="faq-container">
        <h2>FAQ's</h2>
        {faqs.map((faq, i) => (
          <div className="faq-item" key={i}>
            <h3>{faq.question}</h3>
            {faq.body.map((block, j) =>
              Array.isArray(block) ? (
                <ul key={j}>
                  {block.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={j}>{block}</p>
              ),
            )}
          </div>
        ))}
      </div>
    </Layout>
  )
}
