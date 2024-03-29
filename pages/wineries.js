import Layout from '../components/layout'
import HeroImg from '../components/hero-img'
import wineries from '../constants/wineries'

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


const GapWineriesTitle = 'Petaluma Gap Wineries - The Closest Wineries to San Francisco | PetalumaGap.wine'
const GapWineriesDescription = `
  Petaluma Gap wineries are only 30 miles north of San Francisco. In addition to
  being the closest wineries to San Francisco they're also producing some of the
  most interesting wines in California.
`

const Wineries = ({ showSort }) => {
  const heroStyles = {
    minHeight: '300px',
  }
  return (
    <Layout title={GapWineriesTitle} description={GapWineriesDescription}>
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
                showSort &&
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
