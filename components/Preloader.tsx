'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const onLoad = () => setTimeout(() => setHide(true), 400);
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }
    const fallback = setTimeout(() => setHide(true), 2500);
    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className={`preloader${hide ? ' hide' : ''}`} id="preloader">
      <div className="preloader-inner">
        <span className="preloader-logo">
          Apex<em>Build</em>
        </span>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
      </div>
    </div>
  );
}
