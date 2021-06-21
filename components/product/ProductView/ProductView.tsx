import { FC } from 'react'
import Image from 'next/image'
import { Container, Grid, Button } from '@components/ui'
import { TagIcon, CurrencyDollarIcon } from '@heroicons/react/outline'

import { Product } from '@config/types'
import { toast } from 'react-toastify'

interface Props {
  product: Product
}

const ProductView: FC<Props> = ({ product }) => {
  const notify = (msg: string) =>
    toast(msg, {
      position: window.innerWidth < 769 ? 'bottom-center' : 'top-right',
      autoClose: 15000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    try {
      notify('Order has been successfully placed.')
    } catch (err) {
      notify(`Oops, something went wrong. Error: ${err}`)
    }
  }

  return (
    <Container>
      <Grid layout="B" className="px-4">
        <div>
          <div className="flex-shrink-0">
            <Image
              className="object-cover object-center rounded-md"
              src={product.imageUrl}
              alt={product.name}
              width={674}
              height={610}
              layout="responsive"
              priority={true}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl lg:text-7xl tracking-tight font-extrabold text-black dark:text-white">
            {product.name}
          </h2>
          <p className="mt-8 text-xl text-black dark:text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accontium doloremque. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accontium doloremque.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-6 sm:gap-1">
            <div className="flex items-center lg:justify-center gap-x-2">
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-black dark:bg-white">
                <TagIcon
                  className="h-6 w-6 text-white dark:text-black"
                  aria-hidden="true"
                />
              </span>
              <span className="text-black dark:text-white text-md font-extrabold tracking-tight">
                {product.size}
              </span>
            </div>
            <div className="flex items-center lg:justify-center gap-x-2">
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-black dark:bg-white">
                <CurrencyDollarIcon
                  className="h-6 w-6 text-white dark:text-black"
                  aria-hidden="true"
                />
              </span>
              <span className="text-black dark:text-white text-xl font-extrabold tracking-tight">
                ${product.price}0
              </span>
            </div>
            <div className="flex items-center justify-end lg:justify-center">
              <form onSubmit={submitHandler}>
                <Button>Add to cart</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl lg:text-7xl tracking-tight font-extrabold text-black dark:text-white">
            Description
          </h2>
          <p className="mt-8 text-xl text-black dark:text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accontium doloremque. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accontium doloremque.
          </p>
          <p className="mt-8 text-xl text-black dark:text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accontium doloremque. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accontium doloremque.
          </p>
        </div>
      </Grid>
    </Container>
  )
}

export default ProductView
