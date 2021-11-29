import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./menu-item.styles.scss";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    return <Component {...props} navigate={navigate} location={location} />;
  }

  return ComponentWithRouterProp;
}

const MenuItem = ({ title, imageUrl, size, navigate, linkUrl, location }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => navigate(`${location.pathname}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
