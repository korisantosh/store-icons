interface IconProps {
  readonly id: string
  readonly isActive: boolean
  readonly size: number
  readonly viewBox: string
  readonly activeClassName: string
  readonly mutedClassName: string
}

interface EnhancedIconProps extends IconProps {
  readonly orientation?: string
  readonly state?: string
  readonly shape?: string
  readonly type?: string
}

interface Enhancement {
  id: string
  modifier: string
}
