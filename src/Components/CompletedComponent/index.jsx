import React from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom';
const completed = ({ setActiveTab, activeTab  }) => {  //It accepts two parameters, setActiveTab and activeTab. props from the parent (from the App component)
  const isActive = activeTab === 'completed';
  return (
    <div className={styles.navigationCompleted} onClick={() => setActiveTab('completed')}>
    <div className={`${styles.navigationBar} ${isActive ? styles.active : ''}`}>
    <Link to="/">Completed</Link>
    </div>
  </div>
  )
}
export default completed;