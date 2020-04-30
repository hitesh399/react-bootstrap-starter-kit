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
              <div className="header-avatar-placeholder strong-shaded">
                <div className="icon-placeholder-small light-shaded"></div>
              </div>
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

    <div className="skeleton-main">
      <div className="skeleton-header">
        <div
          className="menu-icon"
          style={{ width: '24px', marginLeft: '20px', marginRight: 'auto' }}
        >
          <div
            className="text-placeholder dark-shaded"
            style={{ height: '3px', marginBottom: '3px' }}
          ></div>
          <div
            className="text-placeholder dark-shaded"
            style={{ height: '3px', marginBottom: '3px' }}
          ></div>
          <div
            className="text-placeholder dark-shaded"
            style={{ height: '3px', marginBottom: '3px' }}
          ></div>
          <div
            className="text-placeholder dark-shaded"
            style={{ height: '3px', marginBottom: '3px' }}
          ></div>
        </div>
        <div className="profile-menu-icon">
          <div
            className="text-placeholder dark-shaded"
            style={{ width: '60px', float: 'left', marginRight: '4px' }}
          ></div>
          <div
            className="icon-placeholder-small dark-shaded"
            style={{
              width: '40px',
              height: '40px',
              float: 'left',
              marginRight: '20px',
            }}
          ></div>
        </div>
      </div>
      <div className="skeleton-main-container">
        <div
          className="text-placeholder light-shaded"
          style={{
            maxWidth: '600px',
            textAlign: 'center',
            height: '30px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          Hello User! Please wait a while, we are just working to verify your
          details...
        </div>
      </div>
      <div className="skeleton-footer">
        <div
          className="text-placeholder dark-shaded"
          style={{
            width: '200px',
            float: 'left',
            marginRight: '4px',
            flexGrow: 'inherit',
          }}
        ></div>
      </div>
    </div>
  </div>
);
