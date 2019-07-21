import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import MediaQuery from "react-responsive";
import { toggleNavigation } from "../actions";
import "./NavBar.css";

class NavBar extends React.Component {
  onMenuButtonClick = () => {
    this.props.toggleNavigation();
  };

  onMenuLinkClick = () => {
    this.props.toggleNavigation();
  };

  renderExpanded() {
    return (
      <div className="ui fixed inverted menu navbar">
        <div class="ui container">
          <Link to="/" className="header item">
            Ranger
          </Link>
          <div className="right menu">
            <NavLink to="/jobs" className="item" activeClassName="active">
              Jobs
            </NavLink>
            <NavLink to="/clients" className="item" activeClassName="active">
              Clients
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  renderCollapsed() {
    return (
      <div className="ui fixed inverted menu navbar">
        <Link to="/" className="header item">
          Ranger
        </Link>
        <div className="right item">
          <button className="menutoggler" onClick={this.onMenuButtonClick}>
            <i className="bars icon" />
          </button>
        </div>
      </div>
    );
  }

  renderSecondaryMenu() {
    return (
      <CSSTransition
        in={this.props.expanded}
        timeout={350}
        classNames="display"
        unmountOnExit
      >
        <div className="menupopup">
          <div className="ui vertical inverted center aligned menu">
            <NavLink
              to="/jobs"
              className="item align center"
              activeClassName="active"
              onClick={this.onMenuLinkClick}
            >
              Jobs
            </NavLink>
            <NavLink
              to="/clients"
              className="item"
              activeClassName="active"
              onClick={this.onMenuLinkClick}
            >
              Clients
            </NavLink>
          </div>
        </div>
      </CSSTransition>
    );
  }

  render() {
    return (
      <MediaQuery minWidth={700}>
        {matches => {
          if (matches) {
            return <div>{this.renderExpanded()}</div>;
          } else {
            return (
              <div>
                <div>{this.renderCollapsed()}</div>
                <div>{this.renderSecondaryMenu()}</div>
              </div>
            );
          }
        }}
      </MediaQuery>
    );
  }
}

const mapStateToProps = state => {
  return {
    expanded: state.ui.nav.expanded
  };
};

export default connect(
  mapStateToProps,
  { toggleNavigation }
)(NavBar);
