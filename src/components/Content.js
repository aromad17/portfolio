import React, { useCallback, useEffect, useRef } from 'react';
import 'styles/common.css';
import 'styles/content.scss';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Intro from './Intro';

function Content() {
  const currentIndexRef = useRef(0);
  const intervalIdRef = useRef(null); // New ref for storing the interval ID

  const animatedHeader = useCallback(() => {
    window.addEventListener('scroll', () => {
      const scrollHeight = window.scrollY || window.pageYOffset;
      console.log(scrollHeight);
    });

    const header = document.querySelector('header');
    const ulElement = document.querySelector('.content header ul');
    const liElement = document.querySelector('.content header ul li');

    const liContent = [

      {
        content: `
          <strong>WORK</strong>
          <span>
            Watch What
            <br />
            I Did
          </span>
        `,
        altText: "WORK으로 이동"
      },
      {
        content: `
          <strong>CONTACT</strong>
          <span>
            Get In Touch
            <br />
            With Me
          </span>
        `,
        altText: "CONTACT으로 이동"
      },
      {
        content: `
          <strong>ABOUT</strong>
          <span>
            Creating UI of
            <br />
            a website
          </span>
        `,
        altText: "ABOUT으로 이동"
      },
    ];

    const liClass = ['about_menu', 'work_menu', 'contact_menu'];

    const startInterval = () => {
      if (ulElement.childElementCount >= 30) {
        return; // Stop if there are already 30 or more li elements
      }

      intervalIdRef.current = setTimeout(() => {
        const newLi = document.createElement('li');
        newLi.className = liClass[currentIndexRef.current];
        newLi.innerHTML = `
          ${liContent[currentIndexRef.current].content}
          <img src="${process.env.PUBLIC_URL + '/images/XMARK.png'}" alt="${liContent[currentIndexRef.current].altText}" />
        `;

        ulElement.appendChild(newLi);

        currentIndexRef.current = (currentIndexRef.current + 1) % liContent.length;

        startInterval(); // Recursive call
      }, 2000);

    };




    header.addEventListener('mouseenter', () => {
      ulElement.style.animationPlayState = 'paused';
      clearInterval(intervalIdRef.current); // Stop the interval using intervalIdRef
    });

    header.addEventListener('mouseleave', () => {
      ulElement.style.animationPlayState = 'running';
      startInterval(); // Start the interval again
    });

    // Cleanup function
    return () => {

      window.removeEventListener('scroll', () => { });
      header.removeEventListener('mouseenter', () => { });
      header.removeEventListener('mouseleave', () => { });
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector('header');
    const ham = document.querySelector('.ham');
    animatedHeader();

    setTimeout(() => {
      header.style.height = 100 + 'px';
    }, 2000);

    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= 100) {
        const opacity = (scrollPosition - 100) / 100;
        header.style.opacity = 1 - opacity;
        ham.style.opacity = opacity;
      } else {
        header.style.opacity = 1;
        ham.style.opacity = 0;
      }
    });
  }, []);



  return (
    <div className='content'>
      <header>
        <p>SEE ALL</p>
        <ul>
          <li className='about_menu'>
            <strong>ABOUT</strong>
            <span>
              Creating UI of<br /> a website
            </span>
            <img src={process.env.PUBLIC_URL + '/images/XMARK.png'} alt="ABOUT으로 이동" />
          </li>
          <li className='work_menu'>
            <strong>WORK</strong>
            <span>
              Watch What<br />I Did
            </span>
            <img src={process.env.PUBLIC_URL + '/images/XMARK.png'} alt="ABOUT으로 이동" />
          </li>
          <li className='contact_menu'>
            <strong>CONTACT</strong>
            <span>
              Get In Touch<br />With Me
            </span>
            <img src={process.env.PUBLIC_URL + '/images/XMARK.png'} alt="ABOUT으로 이동" />
          </li>
          <li className='about_menu'>
            <strong>ABOUT</strong>
            <span>
              Creating UI of<br /> a website
            </span>
            <img src={process.env.PUBLIC_URL + '/images/XMARK.png'} alt="ABOUT으로 이동" />
          </li>
        </ul>
      </header>
      <div className='ham'>
        <span>SEE ALL</span>
      </div>
      <Intro />
      <About />
      <Work />
      <Contact />
    </div>
  )
}

export default Content