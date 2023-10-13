import { Post } from "./Post"
import { Header } from "./componentes/Header"
import './global.css'

export function App() {
  return (
  <div>

      <Header />

      <Post 
        author="Admilson" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur est delectus quod rerum deserunt nesciunt magnam iure quibusdam, mollitia eum esse blanditiis reiciendis corporis sit ullam doloribus ipsum voluptate?"
      />
  </div>
  )
}

