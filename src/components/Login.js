import React from 'react';
import './Login.css'
import Api from '../Api'

export default ({onReceive}) => {
    const handleLogin = async () => {
        let result = await Api.lgPopup();
        if(result){
            onReceive(result.user);
        } 
        else {
            alert("error");
        }
    }

    return(
        <div className="login">
            <button onClick={handleLogin}>Fazer Login</button>
        </div>
    );
}