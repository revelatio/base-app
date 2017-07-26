import React from 'react'

const Dummy = ({children}) => (
  <div className='Dummy'>
    <img src='/static/img/revelatio.png' />
    {children}

    {/* language=CSS */}
    <style jsx>{`
      .Dummy {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #667;
      }

      img {
        width: 48px;
        height: 48px;
        margin-bottom: 20px;
      }
    `}</style>
  </div>
)

export default Dummy
