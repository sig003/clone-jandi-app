import React from 'react';

function SignIn() {
  return (
    <>
      <header>
        <nav>
          <div>
            logo jandi
          </div>
          <div>
            잔디소개
            고객사례
            요금안내
            도입문의
            블로그
리포트
이벤트
다운로드
로그인
          </div>
        </nav>
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
                <div className='sign-in-round-checkbox'>
                  <input type='checkbox' id='rememberEmail' />
                  <label htmlFor='rememberEmail'>
                    <span>이메일 기억하기</span>
                  </label>
                  <input type='checkbox' id='maintainLogin' />
                  <label htmlFor='maintainLogin'>
                    <span>로그인 상태 유지</span>
                  </label>
                </div>
                <div>
                  <a>
                    비밀번호 찾기
                    <i className='sign-in-arrow' />
                  </a>
                </div>
              </div>
            </fieldset>
            <div>
              <button>로그인</button>
            </div>
            <section>잔디가 처음이신가요? <a href=''>회원가입</a></section>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignIn