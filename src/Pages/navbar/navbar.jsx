import Bouton from '../bouton/bouton.jsx';
import styles from "./navbar.module.scss"


function Home() {

  return (
    <>
    <nav>
    <h2>Docknotes</h2>
        <button  className={styles.blue}></button >
        <br></br>
        <button  className={styles.orange}></button >
        <br></br>
        <button  className={styles.red}></button >
        <br></br>
        <button className={styles.green}></button >
        <br></br>
        <button className={styles.purple}></button>
    </nav>
    </>
  )
}

export default Home