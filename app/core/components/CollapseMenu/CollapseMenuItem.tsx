import React, { useState } from "react"
import Collapse from "@material-ui/core/Collapse"
import { Button, List, ListItem } from "@material-ui/core"
import { Link } from "blitz"

function CollapseMenuItem({ data = {} as any }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse-menu__item">
      <Button className="collapse-menu__btn" onClick={() => setIsOpen((prev) => !prev)}>
        {data?.title}
      </Button>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List>
          {data?.children != null &&
            data.children.map((child) => (
              <ListItem key={child.id}>
                <Link href={child.link}>
                  <a className="w-100">
                    <Button className="d-block text-start w-100">{child.title}</Button>
                  </a>
                </Link>
              </ListItem>
            ))}
        </List>
      </Collapse>
    </div>
  )
}

export default CollapseMenuItem
