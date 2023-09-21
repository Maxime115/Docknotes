import React, { useState } from 'react';
import Bouton from '../bouton/bouton.jsx';
import styles from "./navbar.module.scss"
import PostIt from '../Postit/postit.jsx';


function Navbar() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [PostIts, setPostIts] = useState([]);

  const handleColorButtonClick = (color) => {
    setSelectedColor(color);
    setPostIts([...PostIts, { color }]);
  };

  return (
    <>
    <nav>
    <h2>Docknotes</h2>
        <button  className={styles.blue} onClick={() => handleColorButtonClick('blue')}></button >
        <br></br>
        <button  className={styles.orange} onClick={() => handleColorButtonClick('orange')}></button >
        <br></br>
        <button  className={styles.red} onClick={() => handleColorButtonClick('red')}></button >
        <br></br>
        <button className={styles.green} onClick={() => handleColorButtonClick('green')}></button >
        <br></br>
        <button className={styles.purple} onClick={() => handleColorButtonClick('purple')}></button>
    </nav>
    {PostIts.map((postIt, index) => (
      <PostIt
      key={index}
      color={postIt.color}
      />
    ))}
    </>
  )
}

export default Navbar