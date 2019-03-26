import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Topbar.module.css';

const Topbar = props => (
  <div styleName="bar">
    <div styleName="bar-user-details">
      <div styleName="user-dp">
        <img src="https://ritwickdey.github.io/img/Profile-Pic-Ritwick-Dey.png" alt="My Pic" />
      </div>
      <div>
        <span styleName="user-name">Ritwick Dey</span>
        <i className="material-icons icons-fix">keyboard_arrow_down</i>
      </div>
    </div>
  </div>
);

export default CSSModules(Topbar, styles);
