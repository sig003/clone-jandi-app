import React from 'react';

function SignIn() {
  return (
    <>
      <div className='sign-in-wrapper'>
        <div className='sign-in-box'>
          <div>
            <h1>로그인</h1>
          </div>
          <div>
            <input type='text' name='email' className='sign-in-input' placeholder='이메일' />
          </div>
          <div>
            <input type='password' name='password' className='sign-in-input' placeholder='비밀번호' />
          </div>
          <div>
            <button>로그인</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn