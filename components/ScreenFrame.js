import React from 'react'

const ScreenFrame = ({children}) => (
  <div className='ScreenFrame'>
    {children}

    <style jsx>{`
      .ScreenFrame {
        font-family: 'Helvetica', 'Arial', sans-serif;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        background-color: #f8f8f8;
        flex-direction: column;
        justify-content: center;
      }
    `}</style>
  </div>
)

export default ScreenFrame
