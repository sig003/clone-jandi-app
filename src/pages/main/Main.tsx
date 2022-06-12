import React, { useState } from 'react';
import MainLeft from '/src/components/main/MainLeft';
import MainCenter from '/src/components/main/MainCenter';
import MainRight from '/src/components/main/MainRight';
import Auth from '/src/hoc/Auth';

function Main() {
  const [mode, setMode] = useState('');

  return (
    <>
      <div className="main-wrapper">
        <MainLeft 
          setMode={setMode}
          mode={mode}
        />
        <MainCenter 
          mode={mode} 
        />
        <MainRight />
      </div>
    </>
  );
}

export default Auth(Main);