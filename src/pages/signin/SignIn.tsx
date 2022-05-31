import React, { useState, useCallback, useEffect } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInEnabled, setSignInEnabled] = useState('');

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  },[email]);

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  },[password]);

  const handleClickFormSubmit = () => {
    
  }

  useEffect(() => {
    if (email && password) {
      setSignInEnabled('enabled');
    } else {
      setSignInEnabled('');
    }
  }, [email, password]);

  return (
    <>
      <header>
        <nav>
          <div className="sign-in-logo">
            <svg width="114" height="22" viewBox="0 0 114 22" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false"><path fillRule="evenodd" clipRule="evenodd" d="M15.1729 22C20.5275 22 24 18.8999 24 13.1351V0H13.745V3.91067H19.4871V13.1309C19.4871 16.7251 17.8647 18.0865 15.1729 18.0865H13.745V22H15.1729ZM8.82732 22C3.47351 22 0.00141429 18.8773 0.00141429 13.0704L0 1.7926H10.2536V5.73253H4.51372V13.0662C4.51372 16.6866 6.13592 18.0579 8.82732 18.0579H10.255V22H8.82732Z" fill="#00C473"></path><path fillRule="evenodd" clipRule="evenodd" d="M44.3803 11.8805C44.3803 15.8614 42.0029 18 38.3361 18H34.3962L34 15.3008H38.3361C40.1785 15.3008 41.2888 14.3604 41.2888 11.8805V6.69917H34.8529V4H44.3803V11.8805ZM53.7564 14.6995H60.5972L61.9412 18H65.4989L59.6168 4H54.7801L48.8546 18H52.4147L53.7564 14.6995ZM57.3165 6.57478L59.5108 12.0003H54.8596L57.0756 6.57478H57.3165ZM83.933 18V4H80.9901V13.2007L72.8881 4H70.5101V18H73.453V8.79928L81.555 18H83.933ZM97.0991 18C102.143 18 104.515 15.754 104.515 10.9955C104.515 6.23918 102.143 4 97.0991 4H91.0918V18H97.0991ZM97.0991 6.70237C99.9518 6.70237 101.299 8.07842 101.299 10.9955C101.299 13.9148 99.9518 15.2953 97.1059 15.2998H94.2328V6.70237H97.0991ZM114 4H110.779V18H114V4Z" fill="#000"></path></svg>
          </div>
          <div className="sign-in-link-contents">
            <ul>
              <li>
                잔디소개
                <i className="sign-in-arrow-down"></i>
              </li>
              <li>고객사례</li>
              <li>요금안내</li>
              <li>도입문의</li>
              <li>블로그</li>
              <li>리포트</li>
              <li>
                이벤트
                <i className="sign-in-new-icon"></i>
              </li>
            </ul>
            <div className="sign-in-link-contents-app">
              <a href="#">다운로드</a>
              <a href="#">로그인</a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <form>
          <div className="sign-in-wrapper">
            <div className="sign-in-box">
              <div>
                <h1>로그인</h1>
              </div>
              <div>
                <input 
                  type="text"
                  name="email"
                  className="sign-in-input"
                  placeholder="이메일"
                  onChange={onChangeEmail}
                  value={email}
                />
              </div>
              <div>
                <input 
                  type="password"
                  name="password"
                  className="sign-in-input"
                  placeholder="비밀번호"
                  onChange={onChangePassword}
                  value={password}
                />
              </div>
              <fieldset>
                <div className="sign-in-form">
                  <div className="sign-in-round-checkbox">
                    <input type="checkbox" id="rememberEmail" />
                    <label htmlFor="rememberEmail">
                      <span>이메일 기억하기</span>
                    </label>
                    <input 
                      type="checkbox"
                      id="maintainLogin"
                      
                    />
                    <label htmlFor="maintainLogin">
                      <span>로그인 상태 유지</span>
                    </label>
                  </div>
                  <div>
                    <a>
                      비밀번호 찾기
                      <i className="sign-in-arrow" />
                    </a>
                  </div>
                </div>
              </fieldset>
              <div>
                <button type="submit" onClick={handleClickFormSubmit} className={`${signInEnabled}`}>로그인</button>
              </div>
              <section>잔디가 처음이신가요? <a href="">회원가입</a></section>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

export default SignIn