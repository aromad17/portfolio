import React, { useEffect, useState } from 'react';
import 'styles/intro.css'
import 'styles/polygon.css'
function Intro() {

  const completionWord = 'LEE SANG HYEON';
  const [typeText, setTypeText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {




    if (count < completionWord.length) {
      const typingInterval = setTimeout(() => {
        setTypeText((prevTitleValue) => prevTitleValue + completionWord[count]);
        setCount(count + 1);
      }, 300);
      return () => clearInterval(typingInterval);
    }
  }, [count, typeText, completionWord]);


  return (
    <div className='intro'>
      <div className='intro_left'>
        <div className='intro_polygon'>
          <div className="wrapper">
            <div className="cube">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
              <div className="four"></div>
              <div className="five"></div>
              <div className="six"></div>
            </div>
          </div>
        </div>
        <div className='intro_left_texts'>
          <span>JaVa SCriPT</span>
          <span>ReaCT</span>
        </div>
      </div>

      <div className='intro_content'>
        <div className='intro_content_logo'>
          <h1 className="main-title">{typeText}<span className='typing_bar'>|</span></h1>
        </div>

        <div className='intro_content_right'>
          <span>FRONT END</span>
          <span>Html + csS</span>
        </div>

        <div className='intro_content_footer'>
          <div className='circles'>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
          </div>

          <div className='scroll_down'>
            <div className='scroll_ani'>
            </div>
            <span>SCROLL DOWN</span>
          </div>




        </div>



      </div>
    </div>
  )

}

export default Intro;

