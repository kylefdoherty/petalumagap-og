import Link from 'next/link'

const Nav = () => {
  const navStyles = {}

  return(
    <header style={navStyles} id="tg-header" className="tg-header tg-fixedheader tg-headervone">
      <div className="container-fluid">
        <div className="row">
          <div className="tg-headercontent tg-headercontentdark">
            <strong className="tg-logo">
              <a href="">
                <img className="tg-logoblack" src="/static/vation-theme/images/logob00.png" alt="company logo here" />
                <img className="tg-logowhite" src="/static/vation-theme/images/logo.png" alt="company logo here" />
                <img src="/static/vation-theme/images/logob.png" alt="company logo here" />
              </a>
            </strong>
            <nav id="tg-nav" className="tg-nav">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div id="tg-navigation" className="collapse navbar-collapse tg-navigation">
                <ul>
                  <li className="menu-item-has-children current-menu-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/wineries">
                      <a>Wineries</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav
