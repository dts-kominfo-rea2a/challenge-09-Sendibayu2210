// Kalian bisa menambahkan CSS di src/components/Header.css
import '../components/Header.css';
import React from 'react';

const Header = () => {
    return (
        <section>
            <div className='header'>
                <h2>Call a Friend</h2>
                <p>your friend contact app</p>
                <div className="hr"></div>
            </div>
        </section>
    )
}

export default Header;