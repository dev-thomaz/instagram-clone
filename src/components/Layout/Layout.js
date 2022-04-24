import React, { Fragment } from 'react';
import './styles.css';
import Story from '../Story/Story'
import Post from '../Post/Post';
function Layout() {
  return (
    <Fragment>
      <div className='grid-main'>
        <div className='first'>
          <div className='box-story'><Story /></div>
          <div className='box-post'><Post /></div>
        </div>
          <div className='suggestion-box'>sugestion</div>
      </div>
    </Fragment>
  );
}

export default Layout;
