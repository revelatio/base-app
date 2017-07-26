import React from 'react'
import Dummy from '../components/Dummy'
import Header from '../components/Header'
import { Link } from '../routes'
import ScreenFrame from '../components/ScreenFrame'

const Resource = ({url}) => (
  <ScreenFrame>
    <Header title={`Resource ${url.query.id}`} />

    <Dummy>
      {url.query.id}

      <Link route='/'><a>Go back</a></Link>
    </Dummy>

    {/* language=CSS */}
    <style jsx>{`
      a {
        text-decoration: none;
        color: #83a6ff;
      }

      a:hover {
        color: #586daf;
      }
    `}</style>
  </ScreenFrame>
)

export default Resource
