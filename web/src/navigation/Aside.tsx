import React from 'react';
import { ReactComponent as Logo } from '../imgs/logo.svg';
import { ReactComponent as Circle } from '../imgs/circle.svg';
import {
  dummyMenu,
  SIDEBAR_LINK,
} from './constants';

const Aside = () => (
  <aside>
    <div className="logo-wrapper">
      <Logo />
    </div>
    {
      dummyMenu.map(({ active }, i) => (
        <div
          className="sidebar-link"
          /* eslint-disable-next-line react/no-array-index-key */
          key={i}
        >
          <Circle fill={active ? SIDEBAR_LINK.ACTIVE_COLOR : SIDEBAR_LINK.REGULAR_COLOR} />
        </div>
      ))
    }
  </aside>
);

export default Aside;
