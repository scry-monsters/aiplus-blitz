import React from "react"
import { List, ListItem } from "@material-ui/core"
import CollapseMenuItem from "./CollapseMenuItem"
import { collapseMenuStyles } from "./CollapseMenuStyles"

function CollapseMenu({ data = [] as any[] }) {
  return (
    <>
      <List className="collapse-menu">
        {data.map((item) => (
          <ListItem key={item.id}>
            <CollapseMenuItem data={item} />
          </ListItem>
        ))}
      </List>
      <style jsx global>
        {collapseMenuStyles}
      </style>
    </>
  )
}

export default CollapseMenu
