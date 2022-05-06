import React from 'react'
import { RenderProp } from '../hooks/useGetFavs'
import { Layout } from '../components/Layout'

export default  ()=>(
  <Layout title="Tus favoritos" subtitle="'Aquí 
  puedes encontrar tus favoritos">
    <RenderProp />
  </Layout>
)
