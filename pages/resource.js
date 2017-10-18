import React from 'react'
import Dummy from '../components/Dummy'
import Header from '../components/Header'
import { Link } from '../routes'
import ScreenFrame from '../components/ScreenFrame'
import PageFrame from '../components/PageFrame'

const Resource = ({url}) => (
  <ScreenFrame>
    <PageFrame>
      <Header title={`Resource ${url.query.id}`} />

      <Dummy>
        {url.query.id}

        <Link route='/'><a>Go back</a></Link>
      </Dummy>
    </PageFrame>

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
