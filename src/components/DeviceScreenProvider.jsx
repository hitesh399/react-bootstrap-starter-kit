import React, { createContext, useState, useEffect } from 'react';

export const DeviceScreenContext = createContext();

export const DeviceScreenProvider = ({ children }) => {
  const [deviceScreen, setDeviceScreen] = useState({});

  useEffect(() => {
    // When Component did mount.
    const fnc = () => {
      setDeviceScreen({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', fnc);
    fnc();
    // When component did unmount
    console.log('I am did mounted device sreen')
    return () => {
      window.removeEventListener('resize', fnc);
      console.log('I am did unmounted device sreen')
    };
  }, []);

  return (
    <DeviceScreenContext.Provider
      value={{
        width: deviceScreen.width,
        height: deviceScreen.height,
      }}
    >
      {children}
    </DeviceScreenContext.Provider>
  );
};
