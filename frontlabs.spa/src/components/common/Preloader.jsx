import React from 'react';
import preloader from '../../assets/preloader.svg'

const Preloader = () => {
    return <div>
        <img src={preloader} alt="preloader" className="mx-auto d-block" style={{marginTop: '40px'}}/>
    </div>
}

export default Preloader;