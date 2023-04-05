import React, { useEffect, useState } from 'react';
import './currentRoute.css';

const CurentRoute = () => {
  const [currentRoute, setCurrentRoute] = useState('');
  useEffect(() => {
    const path = window.location.pathname;
    if (new RegExp(/^\/home$/, 'i').test(path) || path === '/') {
      setCurrentRoute('Home');
    } else if (new RegExp(/^\/about$/, 'i').test(path)) {
      setCurrentRoute('About');
    } else if (new RegExp(/^\/newcard$/, 'i').test(path)) {
      setCurrentRoute('New Card');
    } else {
      setCurrentRoute('404');
    }
  }, [setCurrentRoute]);

  return (
    <div className="current-page">
      <h3>{currentRoute}</h3>
    </div>
  );
};

export default CurentRoute;
