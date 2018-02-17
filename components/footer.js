const Footer = () =>
  <footer id="tg-footer" className="tg-footer tg-footervone">
    <div className="tg-footercolumns">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="tg-footercolumn tg-widget tg-widgetusefulllinks">
              <div className="tg-widgettitle">
                <h3>Site Nav</h3>
              </div>
              <div className="tg-widgetcontent">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/wineries">Wineries</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="tg-footercolumn tg-widget">
              <div className="tg-widgettitle">
                <h3>Get in Touch</h3>
              </div>
               <ul className="tg-contactinfo">
                <li>Email: <a href="">hello@vation.com</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="tg-footercolumn tg-widget tg-widgetsubscribe">
              <div className="tg-widgettitle">
                <h3>Subscribe</h3>
              </div>
              <div className="tg-widgetcontent">
                <div className="tg-description">
                  <p>Sign up with your email addres to get the latest news and happenings.</p>
                </div>
                <form className="tg-formtheme tg-formsubscribe">
                  <fieldset>
                    <input type="email" name="email" className="form-control" placeholder="Enter your Email"/>
                    <button type="submit"><i className="icon-envelope"></i></button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix"></div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="tg-footerbar">
            <span className="tg-copyright">Copyright &copy; 2018 All right reserved.</span>
            <span className="tg-by">Made with <i className="icon-heart"></i> by <a href="">Kyle Doherty</a></span>
          </div>
        </div>
      </div>
    </div>
  </footer>

export default Footer
