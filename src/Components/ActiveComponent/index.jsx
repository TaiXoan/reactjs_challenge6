
import React from "react";
import styles from './style.module.css'
import { Link } from 'react-router-dom';
const active = ({ setActiveTab,  activeTab }) => {
  const isActive = activeTab === 'active';
  return (
    <div className={styles.navigationActive} onClick={() => setActiveTab('active')}>
    <div className={`${styles.navigationBar} ${isActive ? styles.active : ''}`}>
    <Link to="/">Active</Link>
    </div>
  </div>
  )
}


export default active;
