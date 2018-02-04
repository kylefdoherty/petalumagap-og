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

const CardPair = ({ cardOne, cardTwo }) =>
  <div className="tg-features">

    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="tg-feature">
        <figure><a href="javascript:void(0);(0);"><img src="/static/vation-theme/images/allhome/1/img-01.jpg" alt="image description"/></a></figure>
        <div className="tg-featurecontent">
          <div style={cardTitleStyles} className="tg-title tg-titlevone">
            <h3>
              <span>{cardOne.feature}</span>
              {cardOne.name}
            </h3>
          </div>
          <div className="tg-description">
            <p>
              {cardOne.description}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="tg-feature">
        <figure><a href="javascript:void(0);(0);"><img src="/static/vation-theme/images/allhome/1/img-02.jpg" alt="image description"/></a></figure>
        <div className="tg-featurecontent">
          <div style={cardTitleStyles} className="tg-title tg-titlevone">
            <h3>
              <span>{cardTwo.feature}</span>
              {cardTwo.name}
            </h3>
          </div>
          <div className="tg-description">
            <p>
              {cardOne.description}
            </p>
          </div>
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

          <CardPair cardOne={featuredWinery1} cardTwo={featuredWinery2}/>

        </div>
      </div>
    </section>
  </Layout>
