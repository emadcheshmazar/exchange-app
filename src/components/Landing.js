import React, { useState, useEffect} from 'react';

//API
import { getCoin } from '../services/api';

//components
import Loader from './Loader';
import Coin from './Coin';

//styles
import styles from '../styles/Landing.module.css';

const Landing = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data)
        }
        
        fetchAPI()
    }, [])

    const searchHandeler = e => {
        setSearch(e.target.value)
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className={styles.container}>
            <input className={styles.input} type='text' placeholder='Search Coins' value={search} onChange={searchHandeler}/>
            <div>

                {
                    coins.length ?
                        <div className={styles.coinContainer}>
                            {
                                searchCoins.map(coin => 
                                <Coin
                                    key={coin.id}
                                    name={coin.name}
                                    image={coin.image}
                                    symbol={coin.symbol}
                                    price={coin.current_price}
                                    marketCap={coin.market_cap}
                                    priceChange={coin.price_change_percentage_24h}
                                />) 
                            } 
                        </div>
                                : <Loader className={styles.loading} />
                }

            </div>

        </div>
    );
};

export default Landing;