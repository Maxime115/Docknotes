import React, { useState } from 'react';
import styles from './postit.module.scss'; 

function PostIt({ color, onClose }) {
  const [text, setText] = useState('');

  const handleTextClick = () => {
    const newText = prompt('Edit the text:', text);
    if (newText !== null) {
      setText(newText);
    }
  };

  return (
    <div className={styles.container}>
    <div className={`${styles.postIt} ${styles[color]}`}>
      <div className={styles.content} onClick={handleTextClick}>
        {text || 'Hello World'}
      </div>
    </div>
    </div>
  );
}

export default PostIt;