import React from 'react';
import Products from '../Products'
import './style.css'

const HomePage = () => {
    return (
        <>
            <div className="description">
                <h1>Aktuální nabídka</h1>
                <p>Nejnovější prémiové produkty od předních českých designérů.</p>
                <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>    
            </div>
            <Products/>
        </>
    )
};

export default HomePage;