import React, { FC } from 'react'
import cn from 'classnames'

interface ContainerProps {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean,
}) => {
  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any

  return (
    <Component
      className={cn(className, {
        'mx-auto max-w-7xl p-6 sm:px-6 lg:px-8 pb-20 lg:pb-28': !clean,
      })}
    >
      {children}
    </Component>
  )
}

export default Container
