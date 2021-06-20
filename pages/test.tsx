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
]

const Test = () => {
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
      <Container>
        <h2 className="p-4 mb-6 text-6xl md:text-7xl tracking-tight font-extrabold text-black dark:text-white">
          New arrivals
        </h2>
        <Grid>
          {products.slice(0, 3).map((product) => (
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
      <Container>
        <h2 className="p-4 mb-6 text-6xl md:text-7xl tracking-tight font-extrabold text-black dark:text-white">
          Best sellers
        </h2>
        <Grid>
          {products.slice(3, 6).map((product) => (
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
      <div className="relative bg-white dark:bg-black pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl p-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-6xl md:text-7xl tracking-tight font-extrabold text-black dark:text-white">
              Projects
            </h2>
            <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-xl text-black dark:text-white">
              Select one of the projects below to see the improvements.
            </p>
          </div>
          <div className="mt-16 mb-32 max-w-lg mx-auto grid gap-16 lg:gap-8 lg:grid-cols-3 lg:max-w-none"></div>
        </div>
      </div>
    </>
  )
}

export default Test

Test.Layout = Layout
