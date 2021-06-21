import { NextApiRequest, NextApiResponse } from 'next'
import { productsData } from '@config/products'

const Handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(productsData)) {
      throw new Error('Unable to find product.')
    }

    res.status(200).json(productsData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default Handler
