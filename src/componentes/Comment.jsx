import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'

export function Comment(){
    return(
        <div className={style.comment}>
            <img src="https://github.com/diego3g.png" />

            <div className={style.commentBox}>
                <div className={style.content}>
                    <header>
                        <div className={style.author}>
                            <strong>Devon Lane</strong>
                            <time title='14 novembro de 2023' dateTime='2023-10-14 12:56:30'>Cerca de 2h</time>
                        </div>    

                        <button title='Deletar comentário'>
                                <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button title='Aplaudir'>
                        <ThumbsUp size={20}/>
                        Aplaudir  
                        <span>03</span>
                    </button> 
                    
                </footer>
            </div>
        </div>
    )
}