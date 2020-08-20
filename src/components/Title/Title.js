import React from 'react';
import './Title.css'

const Title = () => {

    return (
        <div style={{marginBottom: '10vh'}}>
            <h2 className="title">Cronômetro</h2>
            <p style={{textAlign:'center' }}>
                *Digite o valor em segundos
            </p>
        </div>
    );

}

export default Title;