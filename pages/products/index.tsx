import { Layout } from '@components/common'
import { Container, Grid } from '@components/ui'
import Link from 'next/link'
import Image from 'next/image'

const hero = {
  id: 1,
  name: 'Modern and affordable baby carriers',
  href: '/products',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accontium doloremque.',
  imageUrl: '/products/hero.jpeg',
  cta: 'Explore',
}

const products = [
  {
    id: 1,
    name: 'Sporty baby carrier',
    href: '/product/sporty-baby-carrier',
    price: 19.9,
    imageUrl: '/products/baby-carrier/sporty.jpeg',
  },
  {
    id: 2,
    name: 'Relaxing baby carrier',
    href: '/product/relaxing-baby-carrier',
    price: 29.9,
    imageUrl: '/products/baby-carrier/relaxing.jpeg',
  },
  {
    id: 3,
    name: 'Comfy baby carrier',
    href: '/product/comfy-baby-carrier',
    price: 14.9,
    imageUrl: '/products/baby-carrier/comfy.jpeg',
  },
  {
    id: 4,
    name: 'Lightweight baby carrier',
    href: '/product/lightweight-baby-carrier',
    price: 9.9,
    imageUrl: '/products/baby-carrier/lightweight.jpeg',
  },
  {
    id: 5,
    name: 'Chill baby carrier',
    href: '/product/chill-baby-carrier',
    price: 29.9,
    imageUrl: '/products/baby-carrier/chill.jpeg',
  },
  {
    id: 6,
    name: 'Adventurous baby carrier',
    href: '/product/adventurous-baby-carrier',
    price: 39.9,
    imageUrl: '/products/baby-carrier/adventurous.jpeg',
  },
  {
    id: 7,
    name: 'Durable baby carrier',
    href: '/product/durable-baby-carrier',
    price: 59.9,
    imageUrl: '/products/baby-carrier/durable.jpeg',
  },
  {
    id: 8,
    name: 'Water proof baby carrier',
    href: '/product/water-proof-baby-carrier',
    price: 19.9,
    imageUrl: '/products/baby-carrier/water-proof.jpeg',
  },
  {
    id: 9,
    name: 'Travelling baby carrier',
    href: '/product/travelling-baby-carrier',
    price: 14.9,
    imageUrl: '/products/baby-carrier/travelling.jpeg',
  },
]

const Products = () => {
  return (
    <Container>
      <h2 className="px-4 pb-4 mb-6 text-6xl md:text-7xl tracking-tight font-extrabold text-black dark:text-white">
        Products
      </h2>
      <Grid>
        {products.map((product) => (
          <div key={product.id}>
            <Link href={product.href}>
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
          </div>
        ))}
      </Grid>
    </Container>
  )
}

export default Products

Products.Layout = Layout
