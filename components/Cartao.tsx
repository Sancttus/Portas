
import styles from '../styles/Cartao.module.css';


interface CartaoProps{
    bgcolor?: string;
    children?: any;
}

export default function cartao (props: CartaoProps){
    return (
        <div className={styles.Cartao} style={{backgroundColor: props.bgcolor ?? "#fff"}}>           
                   {props.children}
        </div>
    )
}