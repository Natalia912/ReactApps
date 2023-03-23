function IconArrow({ color = '#5267DF', className }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='12' className={className}>
      <path fill='none' stroke={color} stroke-width='3' d='M1 1l8 8 8-8' />
    </svg>
  )
}

export default IconArrow
