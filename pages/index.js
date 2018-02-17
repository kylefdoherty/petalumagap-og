import Layout from '../components/layout'
import HeroImg from '../components/hero-img'

const SectionHeader = ({ mainText, subText }) =>
  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-push-2 col-lg-8">
    <div className="tg-sectionhead tg-sectionheadvtwo">
      <div className="tg-sectiontitle">
        <h2>{mainText}</h2>
      </div>
      <div className="tg-description">
        <p>
          {subText}
        </p>
      </div>
    </div>
  </div>

// TODO - eventually can just have the cards on their own and stick them in
// whatever kind of container. Not sure what that will look like yet though

const FeaturedWineryCard = ({ cardTitleStyles, feature, name, description, img }) =>
  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{ paddingTop: '40px', }}>
      <div className="tg-feature">
        <figure><a href=""><img src={img.url} alt={img.altText} /></a></figure>
        <div className="tg-featurecontent">
          <div style={cardTitleStyles} className="tg-title tg-titlevone">
            <h3>
              <span>{feature}</span>
              {name}
            </h3>
          </div>
          <div className="tg-description">
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>

const featuredWinery1 = {
  feature: 'Winery Feature',
  name: 'Kastania Vineyards',
  description: 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat, et epicurei euripidis mei dolor sit amet, consectetuer adipiscing elit.'
}
const featuredWinery2 ={
  feature: 'Winery Feature',
  name: 'Three Sticks',
  description: 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat, et epicurei euripidis mei dolor sit amet, consectetuer adipiscing elit.'
}


const featuredWineries = [
  {
    feature: 'Winery Feature',
    name: 'Kastania Vineyards',
    description: 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat, et epicurei euripidis mei dolor sit amet, consectetuer adipiscing elit.',
    img: {
      url: '/static/images/wineries/kastania.jpg',
      altText: 'Kstania Vineyards',
    },
  },
  {
    feature: 'Winery Feature',
    name: 'Three Sticks',
    description: 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat, et epicurei euripidis mei dolor sit amet, consectetuer adipiscing elit.',
    img: {
      url: '/static/images/wineries/kastania.jpg',
      altText: 'Kstania Vineyards',
    },
  },
  {
    feature: 'Winery Feature',
    name: 'Karah Estate',
    description: 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat, et epicurei euripidis mei dolor sit amet, consectetuer adipiscing elit.',
    img: {
      url: '/static/images/wineries/kastania.jpg',
      altText: 'Kstania Vineyards',
    },
  },
  {
    feature: 'Winery Feature',
    name: 'Fogline Vineyards',
    description: 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat, et epicurei euripidis mei dolor sit amet, consectetuer adipiscing elit.',
    img: {
      url: '/static/images/wineries/kastania.jpg',
      altText: 'Kstania Vineyards',
    },
  },
]

export default () =>
  <Layout>
    <HeroImg
      header="Petaluma Gap AVA"
      subHeader="The newsest and most unique American Viticulture Area in the U.S."
      cta="Checkout the Wineries"
      ctaHref="/wineries"
    />
    <section style={{ marginBottom: '50px' }} className="tg-sectionspace tg-haslayout tg-paddingbottomzero">
      <div className="container">
        <div className="row">

          <SectionHeader
            mainText="Featured Gap Wineries"
            subText="Mauris in rutrum nunc. Aenean in lectus id mi sollicitudin placerat. Sed porta ac libero eget maximus. Donec dictum, sem quis ullamcorper porta,"
          />

          {
            featuredWineries.map(winery => {
              return(
                <FeaturedWineryCard
                  key={winery.name}
                  feature={winery.feature}
                  name={winery.name}
                  description={winery.description}
                  cardTitleStyles={{ padding: '0' }}
                  img={winery.img}
                />
              )
            })
          }

        </div>
      </div>
    </section>


    <section className="tg-haslayout" data-z-index="1" data-appear-top-offset="600" data-parallax="scroll" data-image-src="/static/images/twenty20_85ec5c1b-cad7-4b4e-a6ff-f8ba9a65c8ac copy.jpg">
      <div className="tg-sectionspace tg-parallax tg-parallaxservices">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="tg-sectionhead tg-sectionheadvone">
                <div className="tg-sectiontitle">
                  <h2>
                    <span>Sonoma Coast, California</span>
                    Wine Forged From Wind & Fog
                  </h2>
                </div>
              </div>
            </div>
            <div className="tg-services tg-servicesvfour">
              <div className="col-lg-12 col-sm-12 col-md-4 col-lg-4">
                <div className="tg-service">
                  <span className="tg-serviceicon"><i style={{ fontSize: '60px' }} className="icon-location3"></i></span>
                  <div className="tg-servicetitle">
                    <h3><a href="javascript:void(0);(0);">The Newest AVA</a></h3>
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
                    <h3><a href="javascript:void(0);(0);">Wind and Fog</a></h3>
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
                    <h3><a href="javascript:void(0);(0);">Pinot Noir</a></h3>
                  </div>
                  <div className="tg-description">
                    <p>The unique climate of the Gap makes for some intense Pinot Noirs that truly standout. The Gap also proudces outstanding Syrahs and Chardonnays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
