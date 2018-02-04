import Head from 'next/head'

import Footer from './footer'
import Nav from './nav'

const defaultTitle = 'Petaluma GAP AVA'
const defaultDescription = "California's newsest American American Viticultural Area (AVA)"
const contentStyles = {}

const Layout = ({ children, title = defaultTitle, description = defaultDescription }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={ description } />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="/static/vation-theme/images/apple-touch-icon.png" />
      <link rel="icon" href="/static/vation-theme/images/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="/static/vation-theme/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/normalize.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/icomoon.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/owl.carousel.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/scrollbar.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/prettyPhoto.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/transitions.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/royalslider.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/main.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/color.css" />
      <link rel="stylesheet" href="/static/vation-theme/css/responsive.css" />
      <script src="/static/vation-theme/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js" />
    </Head>

    <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
      <Nav />
      {children}
      <Footer />
    </div>

    <div className='petaluma-gap-content__scripts'>
      <script src="https://maps.google.com/maps/api/js?key=AIzaSyCR-KEWAVCn52mSdeVeTqZjtqbmVJyfSus&language=en" />
      <script src="/static/vation-theme/js/vendor/jquery-library.js" />
      <script src="/static/vation-theme/js/vendor/bootstrap.min.js" />
      <script src="/static/vation-theme/js/jquery.singlePageNav.min.js" />
      <script src="/static/vation-theme/js/jquery-scrolltofixed.js" />
      <script src="/static/vation-theme/js/owl.carousel.min.js" />
      <script src="/static/vation-theme/js/jquery.vide.min.js" />
      <script src="/static/vation-theme/js/royalslider.min.js" />
      <script src="/static/vation-theme/js/scrollbar.min.js" />
      <script src="/static/vation-theme/js/isotope.pkgd.js" />
      <script src="/static/vation-theme/js/prettyPhoto.js" />
      <script src="/static/vation-theme/js/sticky-kit.js" />
      <script src="/static/vation-theme/js/countdown.js" />
      <script src="/static/vation-theme/js/parallax.js" />
      <script src="/static/vation-theme/js/collapse.js" />
      <script src="/static/vation-theme/js/countTo.js" />
      <script src="/static/vation-theme/js/appear.js" />
      <script src="/static/vation-theme/js/gmap3.js" />
      <script src="/static/vation-theme/js/main.js" />
    </div>
  </div>
)

export default Layout
