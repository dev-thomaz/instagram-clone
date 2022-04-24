import React, { Fragment } from 'react';
import './styles.css';
import Story from '../Story/Story'
function Layout() {
  return (
    <Fragment>
      <div className='grid-main'>
        <div className='first'>
          <div className='box'><Story /></div>
          <div className='box'>post</div>
        </div>
          <div className='suggestion-box'>sugestion</div>
      </div>
    </Fragment>
  );
}

export default Layout;
