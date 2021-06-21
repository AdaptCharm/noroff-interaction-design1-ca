import { GetStaticProps, GetStaticPaths } from 'next'

import { Product } from '@config/types'
import { productsData } from '@config/products'

import { NextSeo } from 'next-seo'

import { ProductView } from '@components/product'
import { Layout } from '@components/common'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = productsData.map((product) => ({
    params: { slug: product.slug.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug
    const product = productsData.find((data) => data.slug === String(slug))

    return { props: { product } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

type Props = {
  product?: Product
  errors?: string
}

const Slug = ({ product, errors }: Props) => {
  if (errors) {
    return (
      <>
        <NextSeo title="Error" />
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </>
    )
  }

  return (
    <>
      <NextSeo title={`${product ? product.name : 'Product'}`} />
      {product && <ProductView product={product} />}
    </>
  )
}

export default Slug

Slug.Layout = Layout
