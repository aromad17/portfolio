import React, { useEffect } from 'react'
import 'styles/content.css'
import 'styles/bg.scss'
import About from './About';
import Work from './Work';

function Content() {

  useEffect(() => { }, []);


  return (
    <div className='content'>


      {/* <svg id="starry" filter="url(#goo)" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />

            <feColorMatrix in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                             0 1 0 0 0  
                             0 0 1 0 0  
                             0 0 0 55 -10"
              result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>

        <g class="starry-els">
          <ellipse id="el1" rx="80" ry="200" />
          <ellipse id="el2" rx="200" ry="80" />
          <ellipse id="el3" rx="200" ry="80" />
          <ellipse id="el4" rx="80" ry="200" />
        </g>
  </svg> ddd*/}

      <About />
      <Work />


    </div>
  )
}

export default Content

