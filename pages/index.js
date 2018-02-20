import Layout from '../components/layout'
import HeroImg from '../components/hero-img'
import FeaturedCard from '../components/featured-card'
import SectionHeader from '../components/section-header'
import NewsCard from '../components/news-card'
import FactsStatsList from '../components/facts-stats'

import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap'


const featuredWineries = [
  {
    feature: 'Winery Feature',
    name: 'Kastania Vineyards',
    description: '',
    img: {
      url: '/static/images/wineries/kastania.jpg',
      altText: 'Kstania Vineyards',
    },
    website: 'http://www.kastaniavineyards.com/',
  },
  {
    feature: 'Winery Feature',
    name: 'Three Sticks',
    description: '',
    img: {
      url: '/static/images/wineries/threesticks.jpg',
      altText: 'Three Sticks Winery',
    },
    website: 'http://www.threestickswines.com/',
  },
  {
    feature: 'Exclusively Pinot & Chardonnay',
    name: 'Black Kite Cellars',
    description: '',
    img: {
      url: '/static/images/wineries/black_kite.jpg',
      altText: 'Black Kite Cellars',
    },
    website: 'http://blackkitecellars.com/',
  },
  {
    feature: 'On the Top of Sonoma Mountain',
    name: 'Fogline Vineyards',
    description: '',
    img: {
      url: '/static/images/wineries/fogline.jpg',
      altText: 'Fogline Vineyards',
    },
    website: 'https://foglinevineyards.com/',
  },
]

const featuredNews = [
  {
    title: 'Expect intense pinot, syrah and chardonnay from Petaluma Gap',
    excerpt: 'Is it possible to bottle the wind? In a word, yes. The Petaluma Gap winegrowers say they produce wines that reveal their wind-swept terroir, and I agree with them; the wind absolutely shows up in the bottle.',
    publication: 'Press Democrat',
    pubDate: 'December 8, 2017',
    url: 'http://www.pressdemocrat.com/lifestyle/7666640-181/expect-intense-pinot-syrah-and',
    img: {
      url: 'http://www.pressdemocrat.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=o_QhLvsnNfd6RuDNvTx7bM$daE2N3K4ZzOUsqbU5sYtm1t3kUZFfA9QaLcA_irerWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg',
      altText: 'Petaluma Gap',
    },
  },
  {
    title: 'Petaluma Gap becomes new Sonoma County wine appellation',
    excerpt: 'The federal government on Thursday recognized the Petaluma Gap as the newest American Viticultural Area (AVA), giving Sonoma County its 18th such wine appellation and providing another reminder of its vast diversity of grape growing throughout the region.',
    publication: 'Press Democrat',
    pubDate: 'December 7, 2017',
    url: 'http://www.pressdemocrat.com/business/7736379-181/petaluma-gap-becomes-new-sonoma?ref=related',
    img: {
      url: 'http://www.pressdemocrat.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=OmHFs6nWVgxuIUSLwreZus$daE2N3K4ZzOUsqbU5sYvAbQUDSuW4CA23bZZmkUWNWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg',
      altText: 'Petaluma Gap Becomes AVA',
    },
  },
  {
    title: 'Pfendler Vineyards and the Birth of the Petaluma Gap AVA',
    excerpt: 'The wines sitting before me represent hopes and dreams and honor a legacy. They read Sonoma Coast as their appellation. Not so sadly, this is the last time they will carry that association, as again, the massive and diverse AVA known as the Sonoma Coast...',
    publication: 'Aspen Daily News',
    pubDate: 'Feb 15, 2018',
    url: 'https://www.aspendailynews.com/arts_and_entertainment/pfendler-vineyards-and-the-birth-of-the-petaluma-gap-ava/article_2b5ea6ba-11dd-11e8-abd9-cf8be01c6d52.html',
    img: {
      url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
      altText: 'Aspen News - Petaluma Gap',
    },
  },
]


const theStyles = {
  display: 'flex',
  background: 'rgba(249,249,249,0.95)',
  justifyContent: 'space-around',
  paddingTop: '50px',
  paddingBottom: '100px !important',
  flexWrap: 'wrap',
}



export default () =>
  <Layout>
    <HeroImg
      header="Petaluma Gap AVA"
      subHeader="The newest and most unique American Viticulture Area in U.S."
      cta="Checkout the Wineries"
      ctaHref="/wineries"
    />
    <section style={{ marginBottom: '50px' }} className="tg-sectionspace tg-haslayout tg-paddingbottomzero">
      <div className="container">
        <div className="row">
          <SectionHeader
            mainText="Featured Gap Wineries"
            subText=""
          />
          {
            featuredWineries.map(winery => {
              return(
                <FeaturedCard
                  website={winery.website}
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
                  <h2 style={{ lineHeight: '1.2em'}}>
                    <span>Sonoma Coast, California</span>
                    Wine Forged <br />
                    From Wind & Fog
                  </h2>
                </div>
              </div>
            </div>
            <div className="tg-services tg-servicesvfour">
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
        </div>
      </div>
    </section>

    <FactsStatsList />







    <section style={theStyles} className="in-the-news tg-haslayout tg-paddingbottomzero">
      <SectionHeader
        mainText="In the News"
        subText=""
      />
      {
        featuredNews.map(article => {
          return(
            <NewsCard
              key={article.title}
              title={article.title}
              excerpt={article.excerpt}
              publication={article.publication}
              pubDate={article.pubDate}
              img={article.img}
              url={article.url}
            />
          )
        })
      }
    </section>

  </Layout>
