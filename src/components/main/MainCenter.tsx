import React, { useState, useEffect } from 'react';
import MainCenterEntryMessage from './MainCenterEntryMessage';
import MainCenterNotice from './MainCenterNotice';

interface MainCenterProps {
  mode?: string;
}

function MainCenter(mode: MainCenterProps) {
  const [components, setComponents] = useState(<MainCenterEntryMessage />);
 
  useEffect(() => {
    const modeData = mode.mode;

    if (modeData) {
      switch(modeData) {
        case 'notice':
          setComponents(<MainCenterNotice />);
          break;
        default:
          setComponents('');
      }
    }
  }, [mode]);

  return (
    <>
      {components}
    </>
  );
}

export default MainCenter;