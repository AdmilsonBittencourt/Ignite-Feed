import { Header } from "./componentes/Header"
import { Post } from "./componentes/Post"
import { Sidebar } from "./componentes/Sidebar"
import style from './App.module.css'
import './global.css'

export function App() {
  return (
  <div>

      <Header />

      <div className= {style.wrapper}>
        <Sidebar />
        
        <main>
         <Post />
         <Post />
        </main>

      </div>

  </div>
  )
}

