import React from 'react';

//styles
import styles from '../styles/Coin.module.css'

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img className={styles.image} src={image} alt={name}/>
            </div>
            <div className={styles.namePrice}>
                <div className={styles.nameContainer}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.symbol}>{symbol.toUpperCase()}</span>
                </div>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>$ {price.toLocaleString()}</span>
                    <span className={priceChange > 0 ? styles.greenPrice : styles.redPrice }>{priceChange ? priceChange.toFixed(2) : null}</span>
                </div>
                <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default Coin;