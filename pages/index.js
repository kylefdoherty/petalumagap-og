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

import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

export default () =>
  <Layout title={HomeTitle} description={HomeDescription}>
    <HeroImg
      header="Petaluma Gap AVA"
      subHeader="The newest and most unique American Viticulture Area in U.S."
      cta="Checkout the Wineries"
      ctaHref="/wineries"
    />
    <FeaturedWineries />
    <section className="tg-haslayout">
      <ParallaxProvider>
        <ParallaxBanner
          className="bg-parallax-img"
          layers={[
              {
                  image: '/static/images/sonoma-coast-fog.jpg',
                  amount: 0.2,
                  slowerScrollRate: false,
              },
          ]}
          style={{
              minHeight: '920px',
          }}
        >
          <div className="parallax-children">
            <p className="parallax-children__subheader">Sonoma Coast, California</p>
            <h2 className="parallax-children__header">
              Wine Forged<br />
              From Wind & Fog
            </h2>
            <div style={{ marginTop: '80px', width: '80%' }} className="tg-services tg-servicesvfour">
              <div className="col-lg-12 col-sm-12 col-md-4 col-lg-4">
                <div className="tg-service">
                  <span className="tg-serviceicon"><i style={{ fontSize: '60px' }} className="icon-location3"></i></span>
                  <div className="tg-servicetitle">
                    <h3><a href="">The Newest AVA</a></h3>
                  </div>
                  <div className="tg-description">
                    <p>Not only is the Petaluma Gap the newest AVA but it's also the closest AVA to San Francisco.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 col-md-4 col-lg-4">
                <div className="tg-service">
                  <span className="tg-serviceicon"><i style={{ fontSize: '60px' }} className="icon-cloud-wind"></i></span>
                  <div className="tg-servicetitle">
                    <h3><a href="">Wind and Fog</a></h3>
                  </div>
                  <div className="tg-description">
                    <p>The wind and fog from Bodega Bay cools the grapes resulting in a longer growing season and more intense flavors.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 col-md-4 col-lg-4">
                <div className="tg-service">
                  <span className="tg-serviceicon tg-serviceicontargetarrow"><i style={{ fontSize: '60px' }} className="icon-wine"></i></span>
                  <div className="tg-servicetitle">
                    <h3><a href="">Pinot Noir</a></h3>
                  </div>
                  <div className="tg-description">
                    <p>The unique climate of the Gap makes for some intense Pinot Noirs that truly standout. The Gap also proudces outstanding Syrahs and Chardonnays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .parallax-children {
              align-items: center;
              display: flex;
              flex-direction: column;
              height: 100%;
              justify-content: center;
              position: absolute;
              width: 100%;
              background-color: rgba(59,85,230, 0.70);
            }
            .parallax-children__header {
              color: #fff;
              font-size: 42px;
              font-weight: 600;
              line-height: 1.2em;
              margin: 0;
              text-align: center;
            }
            .parallax-children__subheader {
              color: #fff;
              font: italic 400 15px/15px 'Lora', Arial, Helvetica, sans-serif;
            }
          `}</style>
        </ParallaxBanner>
      </ParallaxProvider>
    </section>
    <FactsStatsList />
    <InTheNews />
  </Layout>
