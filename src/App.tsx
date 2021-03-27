import React from 'react';
import { ReactComponent as Logo } from './imgs/logo.svg';
import { ReactComponent as Circle } from './imgs/circle.svg';
import { ReactComponent as ClipboardCopy } from './imgs/clipboard.svg';
import './App.css';

const dummyMenu = [
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
  { active: true },
  { active: false },
];

const SIDEBAR_LINK = {
  ACTIVE_COLOR: 'white',
  REGULAR_COLOR: '#888991',
};

function App() {
  return (
    <div id="app">
      <aside>
        <div className="logo-wrapper">
          <Logo />
        </div>
        {
          dummyMenu.map(({ active }) => (
            <div className="sidebar-link">
              <Circle fill={active ? SIDEBAR_LINK.ACTIVE_COLOR : SIDEBAR_LINK.REGULAR_COLOR} />
            </div>
          ))
        }
      </aside>
      <main>
        <header>
          <div className="header-item">
            <span className="header-item-label">Balance</span>
            <span className="header-item-value">213 920 $</span>
          </div>
          <div className="header-item">
            <span className="header-item-label">Payout</span>
            <span className="header-item-value">159 465 $</span>
          </div>
        </header>
        <section>
          <span className="page-title">Services</span>
          <div className="service-block">
            <div className="column mr8">
              <span className="input-label">FILTER</span>
              <input
                type="text"
                className="input"
              />
            </div>
            <div className="column mr8">
              <button
                type="button"
                className="reset-button"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="service-block">
            <div className="service-item">
              <div className="column mr24">
                <span className="service-name">Appvision.com</span>
                <span className="service-description">Description</span>
              </div>
              <div className="row">
                <div className="column mr24">
                  <span className="input-label">PROMOCODE</span>
                  <div>
                    <input
                      type="text"
                      className="input"
                    />
                    <ClipboardCopy className="clipboard-copy" />
                  </div>
                </div>
                <div className="column">
                  <button className="blue-button">Activate bonus</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <span className="copyrights">© IT Promocodes, 2019</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
