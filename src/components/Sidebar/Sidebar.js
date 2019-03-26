import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Sidebar.module.css';

const SideBar = props => (
  <Fragment>
    <div styleName="top-right-icon">
      <i className="material-icons">reorder</i>
    </div>
    <div styleName="bar">
      <div styleName="nav-container">
        <div styleName="nav-item">
          <i className="material-icons" styleName="largeIcon">
            home
          </i>
        </div>
        <div styleName="nav-item" className={styles.navItemSelected}>
          <i className="material-icons" styleName="largeIcon">
            work
          </i>
        </div>
        <div styleName="nav-item">
          <i className="material-icons" styleName="largeIcon">
            create_new_folder
          </i>
        </div>
        <div styleName="nav-item">
          <i className="material-icons" styleName="largeIcon">
            launch
          </i>
        </div>
      </div>
    </div>
  </Fragment>
);

export default CSSModules(SideBar, styles);
