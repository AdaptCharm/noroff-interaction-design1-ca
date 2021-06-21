import { GetStaticProps } from 'next'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'

import { NextSeo } from 'next-seo'

import { Product } from '@config/types'
import { productsData } from '@config/products'

//Convert product name to slug.
//const slugify = (name: string) => name.replace(/\s+/g, '-').toLowerCase()

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = productsData
  return { props: { products } }
}

type Props = {
  products: Product[]
}

const Products = ({ products }: Props) => {
  return (
    <>
      <NextSeo title="Products" />
      {products.length > 0 && (
        <ProductCard title="Products" products={products} />
      )}
    </>
  )
}

export default Products

Products.Layout = Layout
