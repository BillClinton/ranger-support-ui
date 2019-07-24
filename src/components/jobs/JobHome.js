import React from "react";
import { Route, Switch } from "react-router-dom";

import JobList from "./JobList";
import JobCreate from "./JobCreate";
//import JobEdit from "./JobEdit";
//import JobView from "./JobView";
//import JobDelete from "./JobDelete";
import ScrollToTop from "../ScrollToTop";

/*
const JobHomeA = () => {
  return (
    <ScrollToTop>
      <div className="ui container" style={{ paddingTop: "60px" }}>
        <Switch>
          <Route path="/jobs" exact component={JobList} />
          <Route path="/jobs/new/" exact component={JobCreate} />
          <Route path="/jobs/edit/:id" exact component={JobEdit} />
          <Route path="/jobs/view/:id" exact component={JobView} />
          <Route path="/jobs/delete/:id" exact component={JobDelete} />
        </Switch>
      </div>
    </ScrollToTop>
  );
};
*/

const JobHome = () => {
  return (
    <ScrollToTop>
      <div className="ui container" style={{ paddingTop: "60px" }}>
        <Switch>
          <Route path="/jobs" exact component={JobList} />
          <Route path="/jobs/new/" exact component={JobCreate} />
        </Switch>
      </div>
    </ScrollToTop>
  );
};

export default JobHome;
