import React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import classes from "./CityDropdown.module.scss"

function CityDropdown() {
  const [selected, setSelected] = React.useState("Алматы")
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (val) => {
    setSelected(val)
    setAnchorEl(null)
  }
  return (
    <div className={classes.city}>
      <Button
        className={classes.city__dropdown}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {selected}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleClose("Нур-Султан")}>Нур-Султан</MenuItem>
        <MenuItem onClick={() => handleClose("Алматы")}>Алматы</MenuItem>
        <MenuItem onClick={() => handleClose("Шымкент")}>Шымкент</MenuItem>
      </Menu>
    </div>
  )
}

export default CityDropdown
