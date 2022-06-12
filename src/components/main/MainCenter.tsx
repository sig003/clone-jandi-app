import React from 'react';
import MainCenterInitialComment from './MainCenterInitialComment';
import MainCenterNotice from './MainCenterNotice';

interface MainCenterProps {
  mode?: string;
}

function MainCenterContents(mode: MainCenterProps) {
  let mainCenterComponents = '';

  switch(mode) {
    case 'notice':
      mainCenterComponents = <MainCenterNotice />
      break;
    default:
      mainCenterComponents = <MainCenterNotice />

  }
}

function MainCenter(mode: MainCenterProps) {
  let components = '';

  switch(mode) {
    case 'notice':
      components = <MainCenterNotice />
      break;
    default:
      components = '';

  }
console.log(mode);
  return (
    <>
      {mode !== '' ? <div>{components}</div> : <MainCenterInitialComment />}
    </>
  );
}

export default MainCenter;