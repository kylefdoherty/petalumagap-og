import HeroImg from '../components/hero-img'
import Layout from '../components/layout'
import ContentSection from '../components/content-section'
import AboutTheGap from '../constants/about-the-gap'


const TheGapTitle = 'About The Gap - Producing the Top Sonoma Coast Wines | PetalumaGap.wine'
const TheGapDescription = `
  Petaluma Gap is responsible for some of the best Pinot Noir, Syray, and Chardonnay
  you'll find in the Sonoma Coast.
`

const About = () =>
  <Layout title={TheGapTitle} description={TheGapDescription}>
    <HeroImg
      header="Tasting in the Gap"
      styles={{ minHeight: '300px' }}
    />
    <ContentSection
      header="Page Coming Soon"
      content=""
      img={AboutTheGap.gapOverview.img}
    />
  </Layout>

export default About
