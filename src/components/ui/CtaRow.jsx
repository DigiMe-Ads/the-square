import Button from './Button'

// Row of CTAs from data: [{ label, to | href | reserve, variant? }].
// The first CTA is gold, the rest default to outline.
export default function CtaRow({ ctas = [], className = '' }) {
  if (!ctas.length) return null

  return (
    <div className={`cta-row ${className}`}>
      {ctas.map((cta, i) => (
        <Button
          key={cta.label}
          to={cta.to}
          href={cta.href}
          reserve={cta.reserve}
          variant={cta.variant || (i === 0 ? 'gold' : 'outline')}
          icon={cta.icon}
        >
          {cta.label}
        </Button>
      ))}
    </div>
  )
}
