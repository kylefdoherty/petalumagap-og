const FeaturedCard = ({
  cardTitleStyles,
  description,
  feature,
  img,
  name,
  website,
}) =>
  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{ paddingTop: '40px', }}>
    <div className="tg-feature">
      <figure><a href={website} target="_blank"><img src={img.url} alt={img.altText} /></a></figure>
      <a href={website} target="_">
        <div className="tg-featurecontent">
          <div style={cardTitleStyles} className="tg-title tg-titlevone">
            <h3>
              <span>{feature}</span>
              {name}
            </h3>
          </div>
          <div className="tg-description">
            <p style={{color: 'black'}}>
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>

export default FeaturedCard
