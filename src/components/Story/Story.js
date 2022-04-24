import React from 'react';
import './styles.css'

function Story() {
  return (
   
    <div className='container'>
      <div className="user-elements">
        <div>
          <img className='image-user-story' src="https://t.ctcdn.com.br/WXGIAsXxAX1C2Qy2rqN4eoWyVCg=/400x400/smart/i490761.jpeg" alt="user" />
        </div>
        <span>steve.jobs</span>
      </div>
      <div className="user-elements">
        <div>
          <img className='image-user-story' src="https://rascunho.com.br/wp-content/uploads/2020/10/Bill-Gates-1024x640.jpg" alt="user" />
        </div>
        <span>bill.gates</span>
      </div>
    </div>
   
  );
}

export default Story;