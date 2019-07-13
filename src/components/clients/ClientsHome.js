import React from "react";
import { Route } from "react-router-dom";

import ClientList from "./ClientList";
import ClientCreate from "./ClientCreate";
import ClientEdit from "./ClientEdit";
import ClientView from "./ClientView";
import ScrollToTop from "../ScrollToTop";

const ClientsHome = () => {
  return (
    <ScrollToTop>
      <div className="ui container" style={{ paddingTop: "60px" }}>
        <Route path="/clients" exact component={ClientList} />
        <Route path="/clients/new/" exact component={ClientCreate} />
        <Route path="/clients/edit/:id" exact component={ClientEdit} />
        <Route path="/clients/view/:id" exact component={ClientView} />
      </div>
    </ScrollToTop>
  );
};

export default ClientsHome;
