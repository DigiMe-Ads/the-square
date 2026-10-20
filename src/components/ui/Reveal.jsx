import useInView from '../../hooks/useInView'

// Fades/slides its children in the first time they scroll into view.
// variant: 'up' | 'left' | 'right' | 'zoom' | 'mask'. `delay` in ms staggers siblings.
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant}${inView ? ' is-visible' : ''} ${className}`.trim()}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
