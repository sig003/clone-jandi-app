import React, { useState, useEffect, useRef, useCallback } from 'react';

function MainLeft() {
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
        setSidebarWidth(mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left);
      }
    }, [isResizing]);
  
  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <>
      <div 
        className="main-left"
        ref={sidebarRef}
        style={{ width: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="main-left-content">left</div>
        <div className="main-left-resizer" onMouseDown={startResizing} />
      </div>
    </>
  );
}

export default MainLeft;