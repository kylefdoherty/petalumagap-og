import Layout from '../components/layout'
import HeroImg from '../components/hero-img'
import FactsStatsList from '../components/facts-stats'

import FeaturedWineries from '../containers/featured-wineries'
import GapFeatures from '../containers/gap-features'
import InTheNews from '../containers/in-the-news'

const HomeTitle = 'Petaluma Gap Wines - Wind to Wine | PetalumaGap.wine'
const HomeDescription = `
  Petaluma Gap is America's newest and most interesting American Viticulture
  Area (AVA). Best known for bold & unique Pinot Noir as well as Chardonnay and
  Syrah. Located only 30 miles North of San Francisco via Highway 101 make it
  the most accessible wine region in the Bay Area.
`

export default () =>
  <Layout title={HomeTitle} description={HomeDescription}>
    <HeroImg
      header="Petaluma Gap AVA"
      subHeader="The newest and most unique American Viticulture Area in U.S."
      cta="Checkout the Wineries"
      ctaHref="/wineries"
    />
    <FeaturedWineries />
    <GapFeatures />
    <FactsStatsList />
    <InTheNews />
  </Layout>
