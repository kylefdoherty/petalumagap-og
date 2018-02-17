import { withRouter } from 'next/router'
import classNames from 'classnames'

const ActiveLink = ({ router, href, name }) => {
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  const klassNames = classNames({
    'menu-item-has-children': true,
    'current-menu-item': router.pathname === href,
  })



  return (
    <li className={klassNames}>
      <a href={href} onClick={handleClick}>
        {name}
      </a>
    </li>
  )
}

export default withRouter(ActiveLink)
