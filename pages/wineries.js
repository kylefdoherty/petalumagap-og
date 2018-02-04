import Layout from '../components/layout'

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
<div class="tg-portfolioitem tg-widthhalf business">
  <figure>
    <a href={website} target="_blank">
      <img src={img.url} alt={img.altText} />
      <div class="tg-hover tg-hovervone tg-portfoliohover"><h2><span>+</span></h2></div>
    </a>
  </figure>
  <div class="tg-portfoliotitle">
    <h2><a href={website} target="_blank">{name}</a></h2>
    <span><a href={website} target="_blank">{type}</a></span>
  </div>
</div>

const Wineries = () => {
  console.log("boom", wineries)
  return (
    <Layout>
      <div id="tg-innerbanner" className="tg-innerbanner">
        <figure data-vide-bg="poster: images/innerpagebanner/img-07.jpg" data-vide-options="position: 0% 50%">
          <figcaption>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h1>Gap Wineries</h1>
                  <h2>A Totally New Way to Grow your Business.</h2>
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>

      <main id="tg-main" class="tg-main tg-sectionspace tg-haslayout tg-bglight">
        <div class="container">
          <div class="row">
            <div id="tg-portfoliovsix" class="tg-portfolio tg-portfoliovsix">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ul id="tg-navfilterbale" class="tg-navfilterbale tg-optionset">
                  <li><a class="tg-active" data-filter="*" href="">All</a></li>
                  <li><a data-filter=".business" href="">Wineries with Tasting Rooms</a></li>
                  <li><a data-filter=".design" href="">Wineries without Tasting Rooms</a></li>
                  <li><a data-filter=".photography" href="">Wineries that Buy Gap Fruit</a></li>
                </ul>
              </div>
              <div id="tg-galleryfilterable" class="tg-galleryfilterable">
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
