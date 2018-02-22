import HeroImg from '../components/hero-img'
import Layout from '../components/layout'
import ContentSection from '../components/content-section'

const AboutTheGap = {
  header: 'About the Gap',
  gapOverview: {
    header: 'Bottled Wind',
    content: `
      The Petaluma Gap is not only the newest American Viticulture Area
      but it just might be the most interesting. It is a literal 15-mile
      wide wind gap that cuts through the coastal mountains from Tomales
      and Bodega bays inland to Petaluma. This wind tunnel creates a corridor
      for the coastal wind and fog to travel through cooling the region and
      causing large temperature swings throughout the day. All these variables
      create an environment for grapes that produce some truly unique flavors and
      is why the Petaluma Gap is responsible for some intense Pinot Noirs, Syrahs,
      and Chardonnays.
    `,
    img: {
      url: '/static/images/vineyard-small.jpg',
      altText: 'Vineyard',
    },
  },
}

const TheGapTitle = 'About The Gap - Producing the Top Sonoma Coast Wines | PetalumaGap.wine'
const TheGapDescription = `
  Petaluma Gap is responsible for some of the best Pinot Noir, Syray, and Chardonnay
  you'll find in the Sonoma Coast.
`

const About = () =>
  <Layout title={TheGapTitle} description={TheGapDescription}>
    <HeroImg
      header={AboutTheGap.header}
      styles={{ minHeight: '300px' }}
    />
    <ContentSection
      header={AboutTheGap.gapOverview.header}
      content={AboutTheGap.gapOverview.content}
      img={AboutTheGap.gapOverview.img}
    />
  </Layout>

export default About
