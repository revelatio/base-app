import React from 'react'
import Dummy from '../components/Dummy'
import Header from '../components/Header'
import { Link } from '../routes'
import { ScreenFrame, PageFrame } from 'awesome-components'

const Index = ({url}) => (
  <ScreenFrame>
    <PageFrame>
    <Header title='Index page'/>

    <Dummy>
      Welcome to base-app
      <Link route='index' params={{id: 'hello-world'}}>
        <a>Hello</a>
      </Link>

      <Link route='resource' params={{id: 'my-fancy-resource'}}>
        <a>Resource</a>
      </Link>

      {url.query.id &&
        <p>{url.query.id}</p>
      }
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

export default Index
