import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

function Layout({children,title = 'Yusron Training'}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout