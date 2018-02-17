import Layout from '../components/layout'
import HeroImg from '../components/hero-img'

const wineries = [
  {
    name: 'Kastania Vineyards',
    img: {
      url: '/static/images/wineries/kastania.jpg',
      altText: 'Kstania Vineyards',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Cabernet Franc', 'Cabernet Savingnon'],
    website: 'http://www.kastaniavineyards.com/',
    type: 'Vineyard & Winery',
  },
  {
    name: 'Black Kite Cellars',
    img: {
      url: '/static/images/wineries/black_kite.jpg',
      altText: 'Kite Cellars',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
    varitelas: ['Pinot Noir', 'Chardonnay'],
    website: 'http://blackkitecellars.com/',
    type: 'Vineyard & Winery',
  }
]

const WineryCard = ({ name, type, img, website }) =>
<div className="tg-portfolioitem tg-widthhalf business">
  <figure>
    <a href={website} target="_blank">
      <img src={img.url} alt={img.altText} />
      <div className="tg-hover tg-hovervone tg-portfoliohover"><h2><span>+</span></h2></div>
    </a>
  </figure>
  <div className="tg-portfoliotitle">
    <h2><a href={website} target="_blank">{name}</a></h2>
    <span><a href={website} target="_blank">{type}</a></span>
  </div>
</div>

const Wineries = ({ allowSort }) => {
  const heroStyles = {
    minHeight: '300px',
  }
  return (
    <Layout>
      <HeroImg
        header="Gap Wineries"
        styles={heroStyles}
      />

      <main id="tg-main" className="tg-main tg-sectionspace tg-haslayout tg-bglight">
        <div className="container">
          <div className="row">
            <div id="tg-portfoliovsix" className="tg-portfolio tg-portfoliovsix">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {
                allowSort &&
                <ul id="tg-navfilterbale" className="tg-navfilterbale tg-optionset">
                  <li><a className="tg-active" data-filter="*" href="">All</a></li>
                  <li><a data-filter=".business" href="">Wineries with Tasting Rooms</a></li>
                  <li><a data-filter=".design" href="">Wineries without Tasting Rooms</a></li>
                  <li><a data-filter=".photography" href="">Wineries that Buy Gap Fruit</a></li>
                </ul>
              }
              </div>
              <div id="tg-galleryfilterable" className="tg-galleryfilterable">
                {
                  wineries.map(winery => {
                    return(
                      <WineryCard
                        key={winery.name}
                        name={winery.name}
                        img={winery.img}
                        type={winery.type}
                        website={winery.website}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Wineries
