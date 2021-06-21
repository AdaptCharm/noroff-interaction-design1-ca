import { GetStaticProps } from 'next'
import { Layout } from '@components/common'
import { Container, Grid } from '@components/ui'
import { ProductCard } from '@components/product'
import Link from 'next/link'
import Image from 'next/image'

import { Product } from '@config/types'
import { productsData } from '@config/products'

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = productsData
  return { props: { products } }
}

type Props = {
  products: Product[]
  slice?: {
    start: number
    end: number
  }
}

const hero = {
  id: 1,
  name: 'Modern and affordable baby carriers',
  href: '/products',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accontium doloremque.',
  imageUrl: '/products/hero.jpeg',
  cta: 'Explore',
}

const Home = ({ products }: Props) => {
  return (
    <>
      <Container>
        <Grid layout="B" className="px-4">
          <>
            <div className="flex flex-col justify-center">
              <h2 className="lg:w-34 text-6xl lg:text-7xl tracking-tight font-extrabold text-black dark:text-white">
                {hero.name}
              </h2>
              <p className="mt-8 text-xl text-black dark:text-white">
                {hero.description}
              </p>
              <div className="flex items-center">
                <Link href={hero.href}>
                  <a className="mt-8 inline-flex items-center justify-center py-3 px-5 border rounded-md transition ease-default text-base focus:outline-none focus:ring-transparent text-white dark:text-black bg-black dark:bg-white border-black dark:border-white hover:bg-transparent dark:hover:bg-black hover:text-black dark:hover:text-white">
                    {hero.cta}
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="relative shadow-lg rounded-md flex-shrink-0">
                <Image
                  className="object-cover object-center rounded-md"
                  src={hero.imageUrl}
                  alt={hero.name}
                  width={277.33}
                  height={191.36}
                  layout="responsive"
                  priority={true}
                />
              </div>
            </div>
          </>
        </Grid>
      </Container>
      {products.length > 0 && (
        <>
          <ProductCard title="New arrivals" products={products.slice(0, 3)} />
          <ProductCard title="Best sellers" products={products.slice(3, 6)} />
        </>
      )}
    </>
  )
}

export default Home

Home.Layout = Layout
