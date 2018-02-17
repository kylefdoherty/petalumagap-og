
const h1Styles = {
  fontSize: '42px',
  fontWeight: 'bold'
}

const HeroImg = ({ header , subHeader, cta, ctaHref, styles }) =>
  <div style={styles} className="container-fluid hero-img-container">
    <div className="row header text-center">
      <div className="col-md-12">
        <h1 style={h1Styles} >{header}</h1>
        {
          subHeader &&
          <p className="lead sub-head">{subHeader}</p>
        }
        {
          cta &&
          <a className="hero-btn btn btn-lg btn-primary" href={ctaHref}>{cta}</a>
        }
      </div>
    </div>
    <style jsx>{`
      .hero-img-container {
        min-height: 700px;
        background-image:
          linear-gradient(rgba(59,85,230, 0.70), rgba(59,85,230, 0.70)),
          url(static/images/vineyard.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      h1 {
        color: white;
      }
      .sub-head {
        color: white;
      }

      .hero-btn {
        background: #7236E6;
        border: 1px solid #7236E6;
      }

      .hero-btn:hover {
        background: #3500b3;
        border: 1px solid #3500b3;
      }
    `}</style>
  </div>


export default HeroImg
