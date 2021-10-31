import React from "react"
import { Link } from "blitz"
import useLocalizedProp from "app/core/hooks/useLocalizedProp"
import { MenuItem } from "db"

interface Props {
  menuItems: (MenuItem & {
    children: MenuItem[]
  })[]
}

function Nav({ menuItems }: Props) {
  const l = useLocalizedProp()
  return (
    <nav className="navigation d-none d-lg-block">
      <ul className="navigation__menu">
        {menuItems.map((item) => (
          <li key={item.id} className="navigation__item dropdown">
            <Link href={item.link}>
              <a
                className="navigation__link"
                id="menu1"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {l(item, "title")}
              </a>
            </Link>
            <ul className="dropdown-menu navigation__dropdown-menu" aria-labelledby="menu1">
              {item.children &&
                item.children.map((child) => (
                  <li key={child.id}>
                    <Link href={child.link}>
                      <a className="navigation__sublink">{l(child, "title")}</a>
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
