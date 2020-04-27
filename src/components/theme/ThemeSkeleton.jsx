import React from 'react';

export const ThemeSkeletonComponent = () => (
  <div className="theme-skeleton">
    <div
      id="navigation-placeholder-skeleton"
      data-is-collapsed="false"
      data-sidebar-type="global"
      data-has-custom-colours="false"
    >
      <div className="navigation-skeleton-component">
        <div className="global-sidebar">
          <div className="global-content-top">
            <div className="icon-placeholder-large strong-shaded"></div>
            <div className="icon-placeholder-small light-shaded"></div>
            <div className="icon-placeholder-small light-shaded"></div>

            <div className="collapsed-container">
              <div className="header-avatar-placeholder strong-shaded"></div>
              <div className="icon-placeholder-small light-shaded"></div>
              <div className="icon-placeholder-small light-shaded"></div>
              <div className="icon-placeholder-small light-shaded"></div>
            </div>
          </div>

          <div className="global-content-bottom">
            <div className="icon-placeholder-small light-shaded"></div>
            <div className="icon-placeholder-medium strong-shaded"></div>
          </div>
        </div>
        <div className="container-sidebar">
          <div className="container-content">
            <div className="header-placeholder">
              <div className="header-avatar-placeholder strong-shaded"></div>
              <div className="text-placeholder strong-shaded"></div>
            </div>
            <div className="items-placeholder">
              <div className="item-placeholder">
                <div className="icon-placeholder-small light-shaded"></div>
                <div className="text-placeholder light-shaded"></div>
              </div>
              <div className="item-placeholder">
                <div className="icon-placeholder-small light-shaded"></div>
                <div className="text-placeholder light-shaded"></div>
              </div>
              <div className="item-placeholder">
                <div className="icon-placeholder-small light-shaded"></div>
                <div className="text-placeholder light-shaded"></div>
              </div>
              <div className="item-placeholder">
                <div className="icon-placeholder-small light-shaded"></div>
                <div className="text-placeholder light-shaded"></div>
              </div>
              <div className="item-placeholder">
                <div className="icon-placeholder-small light-shaded"></div>
                <div className="text-placeholder light-shaded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
