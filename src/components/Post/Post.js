import React, { Fragment } from 'react';
import './styles.css';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';
function Post() {
  return (
    <Fragment>
      <header className='header-post'>
        <div className='infos-post'>
          <img
            src='https://t.ctcdn.com.br/WXGIAsXxAX1C2Qy2rqN4eoWyVCg=/400x400/smart/i490761.jpeg'
            alt='pic post'
            className='img-user-post'
          />
          <p>steve.jobs</p>
        </div>
        <FiMoreHorizontal />
      </header>
      <div className='img-post'>
        <img
          src='https://www.suno.com.br/wp-content/uploads/2021/12/Steve_Jobs.jpg'
          alt='pic post'
        />
      </div>

      <div className='footer-post'>
        <IconContext.Provider value={{ size: '25px' }}>
          <section className='engagement-post'>
            <div className='icons-first'>
              <div className='icon'>
                <IoMdHeartEmpty />
              </div>
              <div className='icon'>
                <BsChat />
              </div>
              <div className='icon'>
                <FiSend />
              </div>
            </div>
            <div className='icon'>
              <BsBookmark />
            </div>
          </section>
        </IconContext.Provider>
        <section className='likes'>
          <span>22 curtidas</span>
        </section>

        <div className='legend'>
          <p>
            <span>steve.jobs</span> Introducing iPhone 4
          </p>
        </div>

        <div className='time'>
          <time>Há 50 minutos</time>
        </div>

        <div className='comments'>
          <div className='comment'>
            <IconContext.Provider value={{ size: '20px' }}>
              <div className='icon'>
                <BsEmojiSmile />
              </div>
            </IconContext.Provider>
            <input placeholder='Adicione um comentário...' />
          </div>
          <button>Publicar</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Post;
