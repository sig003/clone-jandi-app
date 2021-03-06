import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SortIcon from '@mui/icons-material/Sort';

interface MainLeftProps {
  setMode: () => void;
  mode: string;
}

function MainLeft({ setMode, mode }: MainLeftProps) {
  const [topicClass, setTopicClass] = useState('main-left-topic-panel-close');

  const handleClickLeftMenuAccordion = (state) => {
    if (state === 'topic') {
      if (topicClass === 'main-left-topic-panel-close') {
        setTopicClass('main-left-topic-panel-open');
      } else {
        setTopicClass('main-left-topic-panel-close');
      }
    }
  }

  const handleClickMode = (mode) => {
    setMode(mode);
  }

  return (
    <>
      <div className="main-left">
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
            <SearchOutlinedIcon fontSize="small" />
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
            <div
              className={mode === 'notice' && "main-left-selected"}
              onClick={() => handleClickMode('notice')}
            >
              <span>공지사항</span>
            </div>
            <div
              className={mode === 'workdata' && "main-left-selected"}
              onClick={() => handleClickMode('workdata')}
            >
              <span>업무 자료</span>
            </div>
            <div
              className={mode === 'schedule' && "main-left-selected"}
              onClick={() => handleClickMode('schedule')}
            >
              <span>일정 공유</span>
            </div>
            <div
              className={mode === 'conference' && "main-left-selected"}
              onClick={() => handleClickMode('conference')}
            >
              <span>회의록</span>
            </div>
          </div>
        </div>
        <div className="main-left-chat">
          <div>채팅</div>
          <div className="main-left-icon-circle">
            <i className="main-left-add-icon"></i>
          </div>
        </div>
        <div className="resize-bar"></div>
        <div className="resize-line"></div>
      </div>
    </>
  );
}

export default MainLeft;