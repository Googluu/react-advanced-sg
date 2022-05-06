import React from 'react'
import { RenderProp } from '../hooks/useGetFavs'
import { Layout } from '../components/Layout'

export const Favs = ()=>(
  <Layout title="Tus favoritos" subtitle="'Aquí 
  puedes encontrar tus favoritos">
    <RenderProp />
  </Layout>
)
