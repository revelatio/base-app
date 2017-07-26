import React from 'react'
import Dummy from '../components/Dummy'
import Link from 'next/link'

const Index = ({url}) => (
  <div className='index'>
    <Dummy>
      Welcome to base-app
      <Link to='/' as='/index/hello'><a>Hello</a></Link>

      {url.query.id &&
        <p>{url.query.id}</p>
      }
    </Dummy>

    {/* language=CSS */}
    <style jsx>{`
      .index {
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

      a {
        text-decoration: none;
        color: #83a6ff;
      }

      a:hover {
        color: #586daf;
      }
    `}</style>
  </div>
)

export default Index
