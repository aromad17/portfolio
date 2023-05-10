import React, { useEffect } from 'react'
import 'styles/about.css'
import { FaUserAlt, FaPhone, FaHistory } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'styles/stripe.scss';


function About() {

  useEffect(() => {
    const about = document.querySelector('.about');
    const aboutMove = document.querySelector('.about .contents');
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      if (window.innerWidth >= 768) {

        if (scrollPosition >= 970) {
          console.log(scrollPosition);
          const leftPosition = -((scrollPosition - 970) / 10);

          about.style.position = 'fixed';
          about.style.left = 0;
          about.style.top = 0;
          about.style.zIndex = 100;
          aboutMove.style.left = leftPosition + "%";
          if (parseFloat(aboutMove.style.left) <= -50) {
            if (scrollPosition >= 1465) {
              about.style.position = 'absolute';
              window.scroll({
                top: 1072,
                left: 0
              })
            }
          }
        }
      }
    });
  }, []);


  return (

    <div className='about'>
      {/* 
      <div className='stripe_wrap'>
        <div className='stripe'>
          <div className='stripe_line'></div>
        </div>
        <div className='stripe'>
          <div className='stripe_line'></div>
        </div>
        <div className='stripe'>
          <div className='stripe_line'></div>
        </div>
        <div className='stripe'>
          <div className='stripe_line'></div>
        </div>
        <div className='stripe'>
          <div className='stripe_line'></div>
        </div>
        <div className='stripe'>
          <div className='stripe_line'></div>
        </div>
        <div className='stripe'>
          <div className='stripe_line'></div> 
        </div>
      </div> */}

      <div className='section_title'>
        <h2>About <span>-</span>&nbsp;</h2>
        <ul>
          <li>Me</li>
          <li>Skill</li>
        </ul>
      </div>
      <div className='contents'>
        <div className='about_me_wrap'>


          <div className='about_me'>
            <div className='about_me_top'>
              <div className='about_me_left about_me_text'>
                <dl>
                  <dt><FaUserAlt />About me</dt>
                  <dd>이상현</dd>
                  <dd>1993.11.17</dd>
                  <dd>서울시 동작구 거주 중</dd>
                </dl>
              </div>
              <div className='about_me_right about_me_text'>
                <dl>
                  <dt><FaPhone />Contact</dt>
                  <dd>010.6685.0145</dd>
                  <dd>aromad1117@naver.com</dd>
                </dl>
              </div>
            </div>
            <div className='about_me_bottom about_me_text'>
              <dl>
                <dt><FaHistory />History</dt>
                <dd>2019.07 ~ 2019.10 블록체인 미르 개발팀 입사 - 퍼블리셔 업무</dd>
                <dd>2019.08 ~ 2019.10뉴비코 홈페이지 제작</dd>
                <dd>2022.12 ~ 2023.05 이젠 평생 교육원 UI/UX 웹&앱 디자인 & 프론트엔드 강의 수료</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className='about_skills_wrap'>
          <div className='about_skills'>
            <div className='about_skills_top'>




              <div className='about_skills_top_left'>
                <div className='about_skills_pic'>

                  <img src={process.env.PUBLIC_URL + '/images/me.png'} alt="me" />
                  <p>안녕하세요,<br />
                    노력이 결실을 맺을 때의 쾌감을 즐기는
                    UI 개발자 <strong>이상현</strong> 입니다!
                  </p>
                </div>


              </div>

              <div className='about_skills_top_right'>
                <Swiper
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <ul>
                      <li>html5/css3.0한국형 웹접근성 지침(KWCAG 2.1)을 준수한 기본 마크업과 레이아웃 구성</li>
                      <li>반응형MEDIA Query를 이용한 반응형 웹페이지 하드코딩 제작 가능</li>
                      <li>JAVA SCRIPTJAVA SCRIPT 기분문법(core) 하드코딩 가능
                        (2Depth animation을 활용한 네비게이션 하드코딩 제작가능)
                        (BUTTON형, DOT형 반응형 슬라이드 하드코딩 제작)</li>
                      <li>Firebase 연동 백엔드 기능 구현 가능</li>
                    </ul>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='about_me_top'>
                      <div className='about_me_left about_me_text'>
                        <dl>
                          <dt><FaUserAlt />About me</dt>
                          <dd>이상현</dd>
                          <dd>1993.11.17</dd>
                          <dd>서울시 동작구 거주 중</dd>
                        </dl>
                      </div>
                      <div className='about_me_right about_me_text'>
                        <dl>
                          <dt><FaPhone />Contact</dt>
                          <dd>010.6685.0145</dd>
                          <dd>aromad1117@naver.com</dd>
                        </dl>
                      </div>
                    </div>
                    <div className='about_me_bottom about_me_text'>
                      <dl>
                        <dt><FaHistory />History</dt>
                        <dd>2019.07 ~ 2019.10 블록체인 미르 개발팀 입사 - 퍼블리셔 업무</dd>
                        <dd>2019.08 ~ 2019.10뉴비코 홈페이지 제작</dd>
                        <dd>2022.12 ~ 2023.05 이젠 평생 교육원 UI/UX 웹&앱 디자인 & 프론트엔드 강의 수료</dd>
                      </dl>
                    </div>
                  </SwiperSlide>
                </Swiper>

              </div>
            </div>
            <div className='about_skills_bottom'>
              <ul>
                <li>
                  <img src={process.env.PUBLIC_URL + '/images/html5.png'} alt='html5' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/images/css3.png'} alt='css3' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/images/javascript.png'} alt='javascript' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/images/react.png'} alt='react' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/images/typescript.png'} alt='typescript' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/images/sass.png'} alt='sass' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/images/photoshop.png'} alt='photoshop' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/images/illustrator.png'} alt='illustrator' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + '/images/figma.png'} alt='figma' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About