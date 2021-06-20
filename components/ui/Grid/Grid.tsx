import { FC, ReactNode, Component } from 'react'
import cn from 'classnames'

interface Props {
  className?: string
  children?: ReactNode[] | Component[] | any[] | Object
  layout?: 'A' | 'B' | 'C' | 'D' | 'normal'
  variant?: 'default' | 'filled'
}

const Grid: FC<Props> = ({
  className,
  layout = 'A',
  children,
  variant = 'default',
}) => {
  return (
    <div
      className={cn(
        'grid gap-16',
        {
          'lg:gap-12 lg:grid-cols-3': layout === 'A',
          'lg:gap-24 lg:grid-cols-2': layout === 'B',
          'inline-block': variant === 'default',
          '': variant === 'filled',
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Grid
