import React from 'react';

function SignIn() {
  return (
    <>
      <header>

      </header>
      <main>
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
            <fieldset>
              <div className='sign-in-form'>
                <div>
                  <input type='checkbox' id='rememberEmail' />
                  <label for='rememberEmail'>
                    <span>이메일 기억하기</span>
                  </label>
                  <input type='checkbox' />
                  <label>
                    <span>로그인 상태 유지</span>
                  </label>
                </div>
                <div>
                  <a>비밀번호 찾기</a>
                </div>
              </div>
            </fieldset>
            <div>
              <button>로그인</button>
            </div>
            <section>잔디가 처음이신가요? <span>회원가입</span></section>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignIn