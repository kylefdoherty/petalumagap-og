

const HeroImg = ({ header , subHeader, cta }) =>
  <div className="container-fluid hero-img-container">
    <div className="row header text-center">
      <div className="col-md-12">
        <h1>{header}</h1>
        <p className="lead sub-head">{subHeader}</p>
        <a className="btn btn-large btn-primary" href="#">{cta}</a>
      </div>
    </div>
    <style jsx>{`
      .hero-img-container {
        min-height: 700px;
        background-image: url(static/images/vineyard.jpg);
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
    `}</style>
  </div>


export default HeroImg
