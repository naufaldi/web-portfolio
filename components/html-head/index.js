import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ trickleRate: 0.15, trickleSpeed: 150 })
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const HtmlHead = (props) => (
  <Head>
    <title>Radzi Ramli</title>
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0' />
    <meta name='description' content={'Radzi Ramli Dev Portfolio'} />
    <meta name='keywords' content={'radzi, radzi ramli, radzi ramli malaysia'} />
    <link href='https://fonts.googleapis.com/css?family=Quicksand:300,400,700,800' rel='stylesheet' />
    <link rel="preconnect" href="https://www.google-analytics.com" />
    {/* <link rel='stylesheet' type='text/css' href='/css/nprogress.css' /> */}
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
    <link rel='icon' href='/favicon.png' />

    {props.children}
  </Head>
)

export default HtmlHead
