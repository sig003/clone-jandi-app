import React from 'react';
import MainLeft from '/src/components/main/MainLeft';
import MainCenter from '/src/components/main/MainCenter';
import MainRight from '/src/components/main/MainRight';
import Auth from '/src/hoc/Auth';

function Main() {

  return (
    <>
      <div className="main-wrapper">
        <MainLeft />
        <MainCenter />
        <MainRight />
      </div>
    </>
  );
}

export default Auth(Main);