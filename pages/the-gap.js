import HeroImg from '../components/hero-img'
import Layout from '../components/layout'

const heroStyles = {
  minHeight: '300px',
}

const About = () =>
  <Layout>
    <HeroImg
      header="About the Gap"
      styles={heroStyles}
    />
    <main id="tg-main" className="tg-main tg-haslayout">
      <div className="tg-ourprocess">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <figure className="tg-processimg"><img style={{ width: '378px', height: '283px' }} src="/static/images/vineyard-small.jpg" width="378" height="283" alt="image description" /></figure>
              <div style={{ height: 'auto' }} className="tg-processcontent">
                <div className="tg-sectionhead tg-sectionheadvtwo">
                  <div className="tg-sectiontitle">
                    <h2>Bottled Wind</h2>
                  </div>
                </div>
                <div className="">
                  <p>The Petaluma Gap is not only the newest American Viticulture Area but it just might be the most interesting. It is a literal 15-mile wide wind gap that cuts through the coastal mountains from Tomales and Bodega bays inland to Petaluma. This wind tunnel creates a corridor for the coastal wind and fog to travel through cooling the region and causing large temperature swings throughout the day. All these variables create an environment for grapes that produce some truly unique flavors and is why the Petaluma Gap is responsible for some intense Pinot Noirs, Syrahs, and Chardonnays.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>

export default About
