import { FC, useRef, useEffect, Fragment } from 'react'

import Mousetrap from 'mousetrap'

import Link from 'next/link'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import cn from 'classnames'

import { Tooltip } from 'react-tippy'

const products = [
  {
    name: 'Sporty baby carrier',
    price: 19.9,
    imageUrl: '/products/baby-carrier/sporty.jpeg',
  },
  {
    name: 'Lightweight baby carrier',
    price: 9.9,
    imageUrl: '/products/baby-carrier/lightweight.jpeg',
  },
  {
    name: 'Adventurous baby carrier',
    price: 39.9,
    imageUrl: '/products/baby-carrier/adventurous.jpeg',
  },
]

const total = 69.7

interface Props {
  className?: string
}

const ShoppingCart: FC<Props> = ({ className }) => {
  const hideRef = useRef<HTMLDivElement>(null)
  const showRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    Mousetrap.bind(
      ['ctrl+c'],
      () => showRef.current?.click() ?? hideRef.current?.focus()
    )
  }, [])

  return (
    <Popover>
      {({ open }) => (
        <>
          <div className="focus:outline-none" ref={hideRef} tabIndex={-1}>
            <Tooltip
              title="Toggle shopping cart"
              position="bottom"
              size="small"
              animation="scale"
              duration={10}
              style={{ display: 'inline-flex' }}
            >
              <Popover.Button
                className={cn(
                  'flex items-center justify-center bg-transparent rounded-md w-10 h-10 border-none transition ease-default duration-400 text-black dark:text-white hover:p-2 hover:shadow-small focus:outline-none focus:ring-transparent',
                  className
                )}
                ref={showRef}
              >
                <span className="sr-only">Open shopping cart</span>
                <ShoppingCartIcon className="w-6 h-6" />
              </Popover.Button>
            </Tooltip>
          </div>

          <Transition.Root show={open} as={Fragment}>
            <Popover.Panel
              focus
              static
              className="fixed z-50 top-0 inset-x-0 transform transition origin-center"
            >
              <div className="relative sm:flex sm:items-center sm:justify-center sm:content-center min-h-full p-2">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-400 lg:duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-400 lg:duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Overlay className="fixed min-h-screen inset-0 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-80 transition-colors cursor-pointer" />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-200 lg:duration-250"
                  enterFrom="opacity-0 -translate-1/2 scale-0"
                  enterTo="opacity-100 translate-0 scale-100"
                  leave="ease-in duration-200 lg:duration-250"
                  leaveFrom="opacity-100 translate-0 scale-100"
                  leaveTo="opacity-0 -translate-1/2 scale-0"
                >
                  <div className="relative sm:top-60 sm:w-150 transform transition-all rounded-2xl shadow-1 bg-white dark:bg-gray-900 overflow-hidden">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <span className="text-black dark:text-white">
                          Shopping cart
                        </span>
                        <span className="text-black dark:text-white">
                          <strong>3</strong> items
                        </span>
                      </div>
                    </div>
                    <div>
                      <li className="pl-6 h-8 flex items-center justify-between transition ease-default bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-20 text-sm text-gray-900 text-opacity-60 dark:text-gray-100 dark:text-opacity-60">
                        Products
                      </li>
                      {products.map((product) => (
                        <li
                          className="p-6 grid gap-6 sm:gap-8 sm:grid-cols-3 transition ease-default hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-20 text-gray-900 dark:text-gray-100 dark:text-opacity-60"
                          key={product.name}
                        >
                          <div className="flex items-center">
                            <div className="w-14 h-10">
                              <Image
                                className="object-cover object-left rounded-lg"
                                src={product.imageUrl}
                                alt={product.name}
                                width={56}
                                height={40}
                                layout="responsive"
                                priority={true}
                              />
                            </div>
                            <span className="ml-4 sm:w-24">{product.name}</span>
                          </div>
                          <div className="flex items-center sm:justify-center gap-x-4">
                            <button className="flex items-center justify-center bg-transparent rounded-md w-10 h-10 border-none transition ease-default duration-400 text-black dark:text-white hover:p-2 hover:shadow-small focus:outline-none focus:ring-transparent">
                              <span className="sr-only">Decrease amount</span>
                              <MinusIcon className="w-6 h-6" />
                            </button>
                            <span>1</span>
                            <button className="flex items-center justify-center bg-transparent rounded-md w-10 h-10 border-none transition ease-default duration-400 text-black dark:text-white hover:p-2 hover:shadow-small focus:outline-none focus:ring-transparent">
                              <span className="sr-only">Increase amount</span>
                              <PlusIcon className="w-6 h-6" />
                            </button>
                          </div>
                          <div className="sm:flex sm:items-center sm:justify-end">
                            <span>${product.price}0</span>
                          </div>
                        </li>
                      ))}
                      <li className="pl-6 h-8 flex items-center justify-between transition ease-default bg-black bg-opacity-5 dark:bg-black dark:bg-opacity-20 text-sm text-gray-900 text-opacity-60 dark:text-gray-100 dark:text-opacity-60">
                        Total
                      </li>
                      <li className="p-6 grid justify-center transition ease-default hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-20 text-gray-900 dark:text-gray-100 dark:text-opacity-60">
                        <span className="text-black dark:text-white font-bold">
                          ${total}0
                        </span>
                      </li>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Popover.Panel>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export default ShoppingCart
