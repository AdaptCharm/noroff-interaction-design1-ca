import '@assets/main.css'
import '@assets/chrome-bug.css'
import '@assets/tippy.css'
import 'react-toastify/dist/ReactToastify.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

import { Head } from '@components/common'

const Noop: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ThemeProvider enableColorScheme={false} attribute="class">
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          limit={1}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </>
  )
}

export default MyApp
