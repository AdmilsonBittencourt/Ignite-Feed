import style from './Sidebar.module.css'
import backgroundImg from '../assets/background-img-sidebar.svg'
import avatar from '../assets/avatar-img.svg'
import { PencilSimpleLine } from 'phosphor-react'//Biblioteca de icones.

export function Sidebar(){
    return (
        <aside className={style.sidebar}>
            <img src= {backgroundImg} alt="Imagem de fundo" />

            <div className={style.profile}>
                <img src={avatar} alt="avatar imagem" />

                <strong>Leslie Alexander</strong>
                <span>UI Designer</span>
            </div>

            <hr />

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
} 