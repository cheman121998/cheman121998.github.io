import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

class Car extends React.Component{
    render(){
        return <h1 className={styles.bigblue}>Hello Car!</h1>;
    }
}
export default Car;