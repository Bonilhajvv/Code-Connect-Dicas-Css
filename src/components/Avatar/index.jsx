import Image from "next/image"
import styles from './avatar.module.css'

export const Avatar = ({name, imageSrc}) => {
    return (<ul className={styles.avatar}>
        <li>
            <Image src={imageSrc} width={32} height={32} alt={`Avatar do(a) ${name}`}/>
        </li>
        <li>
            @nicolyYume
        </li>
    </ul>)
}
// caso queira pra o uso dinâmico troque o "@nicolyYume" para @{name}