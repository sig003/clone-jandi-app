import React, { useState, useEffect, useRef, useCallback } from 'react';

function Main() {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = useCallback((mouseDownEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
	  <div className='main-wrapper'>
      <div 
        className='main-left'
        ref={sidebarRef}
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className='main-left-content'>left</div>
        <div className='main-left-resizer' onMouseDown={startResizing} />
      </div>
      <div className='main-center'>center</div>
      <div className='main-right'>
        <div className='main-right-icon-wrapper'>
          <i className='main-right-menu-setting'></i>
        </div>
        <div className='main-right-icon-wrapper'>
          <i className='main-right-menu-search'></i>
        </div>
        <div className='main-right-icon-wrapper'>
          <i className='main-right-menu-todo'></i>
        </div>
        <div className='main-right-icon-wrapper'>
          <i className='main-right-menu-file'></i>
        </div>
        <div className='main-right-icon-wrapper'>
          <i className='main-right-menu-origanization'></i>
        </div>
        <div className='main-right-icon-wrapper'>
          <i className='main-right-menu-drive'></i>
        </div>
        <div className='main-right-icon-wrapper'>
          <i className='main-right-menu-connect'></i>
        </div>
        <div className='main-right-icon-wrapper'>
          <i className='main-right-menu-favorite'></i>
        </div>
        <div className='main-right-icon-wrapper'>
          <i className='main-right-menu-mention'></i>
        </div>
        <div className='main-right-icon-wrapper'>
          <i className='main-right-menu-profile'></i>
        </div>
      </div>
    </div>
  );
}

export default Main