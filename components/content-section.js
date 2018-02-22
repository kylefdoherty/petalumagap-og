const ContentSection = ({ header, content, img }) =>
  <main id="tg-main" className="tg-main tg-haslayout">
    <div className="tg-ourprocess">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <figure className="tg-processimg">
              <img style={{ width: '378px', height: '283px' }} src={img.url} width="378" height="283" alt={img.altText} />
            </figure>
            <div style={{ height: 'auto' }} className="tg-processcontent">
              <div className="tg-sectionhead tg-sectionheadvtwo">
                <div className="tg-sectiontitle">
                  <h2>{header}</h2>
                </div>
              </div>
              <div className="">
                <p>
                  {content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

export default ContentSection
