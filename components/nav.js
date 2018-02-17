import Link from 'next/link'

import ActiveLink from './active-link'

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Wineries',
    href: '/wineries',
  },
]

const Nav = () => {
  const navStyles = {}

  return(
    <header style={navStyles} id="tg-header" className="tg-header tg-fixedheader tg-headervone">
      <div className="container-fluid">
        <div className="row">
          <div className="tg-headercontent tg-headercontentdark">
            <strong className="tg-logo">
              <a href="">
                <img className="tg-logowhite" src="/static/images/petaluma-gap-logo.png" alt="company logo here" />
                <img src="/static/images/petaluma-gap-logo.png" alt="company logo here" />
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
                  {
                    navLinks.map(link => {
                      return(
                        <ActiveLink
                          key={link.name}
                          href={link.href}
                          name={link.name}
                        />
                      )
                    })
                  }
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
