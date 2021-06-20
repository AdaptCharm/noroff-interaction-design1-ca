import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { NextSeo } from 'next-seo'

import { Layout } from '@components/common'
import { Alert } from '@components/ui'

const Slug = () => {
  //const { query } = useRouter()

  return (
    <>
      <NextSeo
        title="Blog"
        description="Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at."
      />
      <h1>Test</h1>
    </>
  )
}

export default Slug

Slug.Layout = Layout
