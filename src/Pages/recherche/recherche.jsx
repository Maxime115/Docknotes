import styles from "./recherche.module.scss";

const MaBarreDeRecherche = () => {
    return (

        <>
      
        <input type="text" name="searchfield" placeholder="Search" className={styles.searchbar}></input>
  

    
        </>

    );
  }
  
  export default MaBarreDeRecherche;