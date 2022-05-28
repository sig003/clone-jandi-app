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
        <div>
          <div className="main-left-top-logo-wrapper">
            <div className="main-left-top-logo">
              <img ng-src="https://jandi-box.com/teams/0/logo.png?timestamp=20190628" src="https://jandi-box.com/teams/0/logo.png?timestamp=20190628" />
              CLOUD
            </div>
          </div>
        </div>
        <div className="main-left-search-button">
          <button>
            <i>S</i>
            <span>토픽 또는 채팅방 검색</span>
          </button>
        </div>
        <div className="main-left-topic">
          토픽
        </div>
        <div className="main-left-chat">
          채팅
        </div>
      </div>
      <div className="main-left-resizer" onMouseDown={startResizing} />
    </>
  );
}

export default MainLeft;