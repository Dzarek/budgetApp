import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const main = useRef(null);

  return (
    <div>
      <div className="backgroundcoins"></div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid className={classes.mobile} item xs={12} sm={4}>
          <Details title="Dochody" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid className={classes.desktop} item xs={12} sm={4}>
          <Details title="Dochody" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Wydatki" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
