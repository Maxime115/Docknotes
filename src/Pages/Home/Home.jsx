import Navbar from '../navbar/navbar.jsx';
import Recherche from '../recherche/recherche.jsx';
import styles from "./Home.module.scss"


function Home() {

  return (
    <>
    <div class={styles.home}>
    <Recherche/>
    <Navbar/>
    
    </div>
    </>
  )
}

export default Home