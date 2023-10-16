import { Comment } from './Comment'
import style from './Post.module.css'

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="https://github.com/diego3g.png" />

                    <div className={style.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='14 novembro de 2023' dateTime='2023-10-14 12:56:30'>Públicado há 1h</time>
            </header>

            <div className={style.content}>
                <p>Fala galeraa 👋 </p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <p><a className={style.link} href=""> 👉jane.design/doctorcare </a>  </p> 
           
                <a className={style.link} href="">#novoprojeto #nlw #rocketseat </a>
            </div>

            <form className={style.contentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'/>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div>
                <Comment />
                <Comment />
            </div>

        </article>
    )
}