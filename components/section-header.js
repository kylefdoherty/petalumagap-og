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

export default SectionHeader
