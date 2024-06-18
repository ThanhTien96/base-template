import { Image, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import loading_asets from "assets/loading/loading.gif"
const LoadingPage: React.FC = () => {
  return (
    <Layout className='flex w-full h-[100vh] items-center justify-center'>
      <Content className='flex items-center justify-center'>
        <Image preview={false} src={loading_asets} width={80} />
      </Content>
    </Layout>
  )
}

export default LoadingPage