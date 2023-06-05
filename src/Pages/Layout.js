import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import DrawerComponent from "../Component/DrawerComponent";

const Layout = ({ links }) => {
  const theme = createTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);

  return (
    <div>
      <AppBar
        sx={{
          height: "8vh",
          backgroundImage:
            "linear-gradient(30deg, rgba(1,0,25,1) 0%, rgba(2,9,124,1) 45%, rgba(255,0,237,1) 100%)",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>
                <AgricultureIcon sx={{ fontSize: "40px", color: "yellow" }} />
              </Typography>
              <DrawerComponent links={links} />
            </>
          ) : (
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={2}>
                <Typography>
                  <AgricultureIcon sx={{ fontSize: "40px", color: "yellow" }} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Tabs
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                >
                  {/* try to add routing here using <Link/> from react-router-dom. and add extra tab componet after appbar to render the components below the app bars when clicking on the tabs.  */}
                  {links.map((link, index) => (
                    <Tab
                      key={index}
                      label={
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          to={
                            `${link}` === ("Home" || "home") ? "/" : `/${link}`
                          }
                        >
                          {link}
                        </Link>
                      }
                    />
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={3}>
                <Box display="flex">
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: "auto",
                      background: "rgba(2, 9, 124, 1)",
                      borderRadius: "50px",
                    }}
                  >
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Login
                    </Link>
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: 1,
                      background: "rgba(2, 9, 124, 1)",
                      borderRadius: "50px",
                    }}
                  >
                    <Link
                      to="/signup"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Signup
                    </Link>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Layout;
