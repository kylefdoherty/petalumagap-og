import FeaturedCard from '../../components/featured-card'
import SectionHeader from '../../components/section-header'
import { featuredWineries } from './data'

const FeaturedWineries = () =>
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

export default FeaturedWineries
