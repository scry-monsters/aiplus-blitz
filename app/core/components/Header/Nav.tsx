import React from "react"
import { Link } from "blitz"

export interface NavItem {
  id: string | number
  title: string
  link: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    id: "programs",
    title: "Программы",
    link: "/programs",
    children: [
      { id: 1, title: "ПОДГОТОВКА В НИШ", link: "/programs/nish" },
      { id: 2, title: "ПОДГОТОВКА В РФМШ", link: "/programs/nish" },
      { id: 3, title: "ПОДГОТОВКА К ЕНТ", link: "/programs/nish" },
      { id: 4, title: "ПОДГОТОВКА В БИЛ (КТЛ)", link: "/programs/nish" },
      { id: 5, title: "ПОДГОТОВКА В СПЕЦ ЛИЦЕИ", link: "/programs/nish" },
      { id: 6, title: "ПОДГОТОВКА В 39 ЛИЦЕЙ", link: "/programs/nish" },
    ],
  },
  {
    id: "teachers",
    title: "Тренеры",
    link: "/teachers",
    children: [
      { id: 1, title: "Кафедра математики", link: "/teachers" },
      { id: 2, title: "Кафедра русского языка", link: "/teachers" },
      { id: 3, title: "Кафедра казахского языка", link: "/teachers" },
      { id: 4, title: "Кафедра английского языка", link: "/teachers" },
      { id: 5, title: "Кафедра физики", link: "/teachers" },
    ],
  },
  {
    id: "students",
    title: "Гордость центра",
    link: "/students",
  },
  {
    id: "faq",
    title: "Вопросы",
    link: "/faq",
  },
  {
    id: "blog",
    title: "Блог",
    link: "/blog",
  },
  {
    id: "contacts",
    title: "Контакты",
    link: "/contacts",
  },
  {
    id: "rewiews",
    title: "Отзывы",
    link: "/rewiews",
  },
]

function Nav() {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul className="navigation__menu">
        {navItems.map((item) => (
          <li key={item.id} className="navigation__item dropdown">
            <Link href={item.link}>
              <a
                className="navigation__link"
                id="menu1"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {item.title}
              </a>
            </Link>
            <ul className="dropdown-menu navigation__dropdown-menu" aria-labelledby="menu1">
              {item.children &&
                item.children.map((child) => (
                  <li key={child.id}>
                    <Link href={child.link}>
                      <a className="navigation__sublink">{child.title}</a>
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
