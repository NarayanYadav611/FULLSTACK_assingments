import './Button.css'

function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  ...rest
}) {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`.trim()

  return (
    <button type={type} className={buttonClass} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button

