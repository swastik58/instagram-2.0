import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { Layout, Typography, Space } from 'antd';

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/icon.jpg" />
      </Head>

        {/* header */}
        <Header />

        <Feed />

        {/*modal*/}
        <Modal />
        <br /><br />
        <div className="bg-gray-200 items-center text-center text-black italic">
                    <Typography.Title level={5} style={{color: 'black', textAlign: 'center', fontSize: '25px'}}>
                        INSTAGRAM -- 2.0 <br /> 
                        A frontend Instagram website clone made by <a className="text-blue-900" href="https://swastik-portfolio.netlify.app/" target="_blank" rel="noreferrer">Swastik </a><br />
                    </Typography.Title>
                    <p className="not-italic font-bold text-blue-800"><a href="https://github.com/swastik58/instagram-2.0" target="_blank" rel="noreferrer">GitHub Source Code</a></p>
        </div>
    </div>
  )
}