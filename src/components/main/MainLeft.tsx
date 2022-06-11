import React, { useState, useEffect, useRef, useCallback } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SortIcon from '@mui/icons-material/Sort';

function MainLeft() {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);
  const [topicClass, setTopicClass] = useState('main-left-topic-panel-close');
  
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

  const handleClickLeftMenuAccordion = (state) => {
    if (state === 'topic') {
      if (topicClass === 'main-left-topic-panel-close') {
        setTopicClass('main-left-topic-panel-open');
      } else {
        setTopicClass('main-left-topic-panel-close');
      }
    }
  }

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
            <SearchOutlinedIcon fontSize="small"/>
            <span>토픽 또는 채팅방 검색</span>
          </button>
        </div>
        <div className="main-left-topic" onClick={() => handleClickLeftMenuAccordion('topic')}>
          <div>토픽</div>
          <div className="main-left-icon-circle">
            <i className="main-left-add-icon"></i>
          </div>
        </div>
        <div className={topicClass}>
          <div className="main-left-topic-order">
            <div><SortIcon fontSize="small" /> 이름 순</div>
            <div>폴더생성</div>
          </div>
          <div className="main-left-topic-container">
            <div>공지사항</div>
            <div>업무 자료</div>
            <div>일정 공유</div>
            <div>회의록</div>
          </div>
        </div>
        <div className="main-left-chat">
          <div>채팅</div>
          <div className="main-left-icon-circle">
            <i className="main-left-add-icon"></i>
          </div>
        </div>
      </div>
      <div className="main-left-resizer" onMouseDown={startResizing} />
    </>
  );
}

export default MainLeft;