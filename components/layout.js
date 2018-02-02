import Head from 'next/head'

import Nav from './nav'

const defaultTitle = 'Petaluma GAP AVA'
const defaultDescription = "California's newsest American American Viticultural Area (AVA)"

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
    <Nav />
    <div className="container-fluid">
      {children}
    </div>
    <div className="scripts">
      <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous" />
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous" />
    </div>
  </div>
)

export default Layout
