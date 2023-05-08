import React from 'react'
import 'styles/work.css'
import { FaCircle, FaChrome, FaGithub } from "react-icons/fa";

function Work() {
  return (
    <div className='work'>

      <div className='section_title'>
        <h2>Work</h2>
      </div>


      <div className='work_wrap'>
        <div className='work_contents'>
          <div className='work_content cj'>
            <div className='work_preview'>
              <div className='mockup'>
                <div className='pc_mockup'></div>
                <div className='tablet_mockup'></div>
                <div className='phone_mockup'></div>
              </div>
            </div>
            <div className='work_description'>
              <div className='description_space'>
                <h3>CJ ONE</h3>
                <ul className='skill_name'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>

                <dl>
                  <dt>주요 업무</dt>
                  <dd>
                    <dl>
                      <dt>웹 표준 준수</dt>
                      <dd><FaCircle />HTML/CSS W3C 웹 접근성 검사 통과</dd>
                    </dl>
                  </dd>
                  <dd>
                    <dl>
                      <dt>주요 기술</dt>
                      <dd><FaCircle />media query를 이용한 반응형 웹 페이지</dd>
                      <dd><FaCircle />CSS를 활용한 Animation 구현</dd>
                      <dd><FaCircle />JAVASCRIPT을 이용한 gif 이미지 구현</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
              <ul className='link'>
                <li>
                  <a href="https://aromad17.github.io/cjone_clone/" title="cjone 클론 사이트로 이동">
                    <FaChrome />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aromad17/cjone_clone" title='cjone 클론사이트 깃헙 리파지토리로 이동'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>



          <div className='work_content samsung_electric'>
            <div className='work_preview'>
              <div className='pc_mockup'></div>
              <div className='tablet_mockup'></div>
              <div className='phone_mockup'></div>
            </div>
            <div className='work_description'>
              <div className='description_space'>
                <h3>삼성 전기</h3>
                <ul className='skill_name'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>
                <dl>
                  <dt>주요 업무</dt>
                  <dd>
                    <dl>
                      <dt>웹 표준 준수</dt>
                      <dd><FaCircle />HTML/CSS W3C 웹 접근성 검사 통과</dd>
                    </dl>
                  </dd>
                  <dd>
                    <dl>
                      <dt>주요 기술</dt>
                      <dd><FaCircle />CSS를 활용한 Animation 구현 </dd>
                      <dd><FaCircle />JAVASCRIPT를 이용한 2depth 메뉴 구현</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
              <ul className='link'>
                <li>
                  <a href="https://aromad17.github.io/samsung-electric_clone/" title="삼성전기 클론 사이트로 이동">
                    <FaChrome />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aromad17/samsung-electric_clone" title='삼성 전기 클론사이트 깃헙 리파지토리로 이동'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>




          <div className='work_content samsung_engineering'>
            <div className='work_preview'>
              <div className='pc_mockup'></div>
              <div className='tablet_mockup'></div>
              <div className='phone_mockup'></div>
            </div>

            <div className='work_description'>
              <div className='description_space'>
                <h3>삼성 엔지니어링</h3>
                <ul className='skill_name'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>
                <dl>
                  <dt>주요 업무</dt>
                  <dd>
                    <dl>
                      <dt>웹 표준 준수</dt>
                      <dd><FaCircle />HTML/CSS W3C 웹 접근성 검사 통과</dd>
                    </dl>
                  </dd>
                  <dd>
                    <dl>
                      <dt>주요 기술</dt>
                      <dd><FaCircle />media query를 이용한 반응형 웹 페이지</dd>
                      <dd><FaCircle />CSS를 활용한 Animation 구현</dd>
                      <dd><FaCircle />form,table 양식 서브 페이지 구현</dd>
                      <dd><FaCircle />JAVASCRIPT로 영상배너 연속재생 및 pagination 구현</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
              <ul className='link'>
                <li>
                  <a href="https://aromad17.github.io/samsung-engineering_clone/" title="삼성엔지니어링 클론 사이트로 이동">
                    <FaChrome />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aromad17/samsung-engineering_clone" title='삼성엔지니어링 클론사이트 깃헙 리파지토리로 이동'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>



          <div className='work_content messanger'>
            <div className='work_preview'>
              <div className='pc_mockup'></div>
              <div className='tablet_mockup'></div>
              <div className='phone_mockup'></div>
            </div>

            <div className='work_description'>
              <div className='description_space'>
                <h3>메신저 앱</h3>
                <ul className='skill_name'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                </ul>
                <dl className=''>
                  <dt>주요 업무</dt>
                  <dd className='spa'>
                    Single Page Application
                  </dd>
                  <dd>
                    <dl>
                      <dt>주요 기술</dt>
                      <dd><FaCircle />FIREBASE와 연동하여 실시간 데이터 수정 가능</dd>
                      <dd><FaCircle />API 데이터를 이용하여 화면 컨텐츠 구성</dd>
                      <dd><FaCircle />FIREBASE를 이용한 SOCIAL 계정으로 회원가입, 로그인 가능</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
              <ul className='link'>
                <li>
                  <a href="https://aromad17.github.io/kkotalk/" title="메신저앱 사이트로 이동">
                    <FaChrome />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aromad17/kkotalk" title='메신저앱 깃헙 리파지토리로 이동'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='work_content netflix'>
            <div className='work_preview'>
              <div className='mockup'>
                <div className='pc_mockup'></div>
                <div className='tablet_mockup'></div>
                <div className='phone_mockup'></div>
              </div>
            </div>

            <div className='work_description'>
              <div className='description_space'>
                <h3>넷플릭스</h3>
                <ul className='skill_name'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                </ul>
                <dl className=''>
                  <dt>주요 업무</dt>
                  <dd className='spa'>
                    Single Page Application
                  </dd>
                  <dd>
                    <dl>
                      <dt>주요 기술</dt>
                      <dd><FaCircle />FIREBASE 연동으로 회원가입,로그인,회원 정보 수정 기능 구현</dd>
                      <dd><FaCircle />Axios를 사용한 외부 API 이용</dd>
                      <dd><FaCircle />리액트 라우터 v6의 중첩 라우팅 사용</dd>
                      <dd><FaCircle />SCSS 적용</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
              <ul className='link'>
                <li>
                  <a href="https://aromad17.github.io/netflix/" title="netflix 클론 사이트로 이동">
                    <FaChrome />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aromad17/netflix" title='netflix 클론사이트 깃헙 리파지토리로 이동'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>




    </div>

  )
}

export default Work