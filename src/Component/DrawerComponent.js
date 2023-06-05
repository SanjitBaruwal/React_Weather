import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const DrawerComponent = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundImage:
              "linear-gradient(30deg, rgba(1,0,25,1) 0%, rgba(2,9,124,1) 45%, rgba(255,0,237,1) 100%)",
            width: "200px",
            display: "flex",
            alignItems: "center",
          },
        }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton key={index} divider onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`${link}` === ("Home" || "home") ? "/" : `/${link}`}
                  >
                    {link}
                  </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
