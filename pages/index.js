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
const cardTitleStyles = {
  padding: '0',
}

const FeaturedWineryCard = ({ cardTitleStyles, feature, name, description }) =>
  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{ paddingTop: '40px', }}>
      <div className="tg-feature">
        <figure><a href="javascript:void(0);(0);"><img src="/static/vation-theme/images/allhome/1/img-02.jpg" alt="image description"/></a></figure>
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
  featuredWinery1,
  featuredWinery2,
  featuredWinery1,
  featuredWinery2,
]

export default () =>
  <Layout>
    <HeroImg
      header="Petaluma Gap"
      subHeader="The newsest and most interesting American Viticulture Area in the U.S."
      cta="Checkout the Wineries"
    />
    <section className="tg-sectionspace tg-haslayout tg-paddingbottomzero">
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
                  feature={winery.feature}
                  name={winery.name}
                  description={winery.description}
                />
              )
            })
          }

        </div>
      </div>
    </section>

    <section class="tg-sectionspace tg-haslayout tg-bgaboutus">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="tg-aboutus">
              <div class="tg-sectionhead tg-sectionheadvthree">
                <div class="tg-sectiontitle">
                  <h2><span>Based in Sydney, Australia</span>We’re a digital studio that believe in the power of great ideas.</h2>
                </div>
              </div>
              <div class="tg-description">
                <p>Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat, Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae.</p>
              </div>
              <div class="tg-themefeatures tg-themefeaturesvtwo">
                <div class="tg-themefeature">
                  <span class="tg-themefeatureicon"><i class="icon-lightbulb"></i></span>
                  <h3>Designing Department</h3>
                  <div class="tg-description">
                    <p>Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos consequat.</p>
                  </div>
                </div>
                <div class="tg-themefeature">
                  <span class="tg-themefeatureicon"><i class="icon-lightbulb"></i></span>
                  <h3>Designing Department</h3>
                  <div class="tg-description">
                    <p>Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos consequat.</p>
                  </div>
                </div>
                <div class="tg-themefeature">
                  <span class="tg-themefeatureicon"><i class="icon-lightbulb"></i></span>
                  <h3>Designing Department</h3>
                  <div class="tg-description">
                    <p>Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="tg-statistics">
        <li>
          <h3 data-from="0" data-to="200000" data-speed="5000" data-refresh-interval="50">200,000</h3>
          <h4>Total Acres</h4>
        </li>
        <li>
          <h3 data-from="0" data-to="4000" data-speed="5000" data-refresh-interval="50">4,000</h3>
          <h4>Acres of Vineyards</h4>
        </li>
        <li>
          <h3 data-from="0" data-to="80" data-speed="5000" data-refresh-interval="50">80</h3>
          <h4>Plus Vineyards</h4>
        </li>
        <li>
          <h3 data-from="0" data-to="150" data-speed="5000" data-refresh-interval="50">150</h3>
          <h4>Yrs Farming Grapes</h4>
        </li>
      </ul>
    </section>
  </Layout>
