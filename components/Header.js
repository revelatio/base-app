import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Header = ({title}) => (
  <Head>
    <title>{title}</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
  </Head>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
