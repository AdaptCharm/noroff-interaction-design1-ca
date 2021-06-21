import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Grid } from '@components/ui'

import { Product } from '@config/types'

type Props = {
  title: string
  products: Product[]
}

const ProductCard: FC<Props> = ({ title, products }) => {
  return (
    <Container>
      <h2 className="px-4 pb-4 mb-6 text-6xl md:text-7xl tracking-tight font-extrabold text-black dark:text-white">
        {title}
      </h2>
      <Grid>
        {products.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id}>
            <a className="p-4 flex flex-col overflow-hidden transition ease-default duration-200">
              <div className="relative shadow-lg rounded-md hover:shadow-1 flex-shrink-0 transition ease-default duration-200 hover:opacity-60">
                <Image
                  className="object-cover object-center rounded-md"
                  src={product.imageUrl}
                  alt={product.name}
                  width={277.33}
                  height={191.36}
                  layout="responsive"
                  priority={true}
                />

                <span className="absolute right-3 bottom-3 shadow-1 rounded-lg p-2 font-semibold bg-white text-black">
                  $ {product.price}0
                </span>
              </div>
              <span className="text-center rounded-lg pt-4 font-semibold text-black dark:text-white">
                {product.name}
              </span>
            </a>
          </Link>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductCard
