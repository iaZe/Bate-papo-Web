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
            <section class="u-clearfix u-section-1" id="sec-a60a">
            <div class="u-align-center u-container-style u-expanded-width u-grey-5 u-group u-group-1">
            <div class="u-container-layout u-container-layout-1">
                <h1 class="u-text u-text-1">Bate-papo Web</h1>
                <h3 class="u-text u-text-2">Aviso importante</h3>
                <h3 class="u-text u-text-3">Para começar basta clicar para fazer login</h3>
                <p class="u-text u-text-4">Este é um projeto de estudo, para a criação de conteúdo e aprendizado das tecnologias nele implementada, gostaria ainda de salientar que nenhum dos dados será salvo, ou exposto.</p>
                <a onClick={handleLogin} class="u-border-none u-btn u-btn-round u-button-style u-color-scheme-summer-time u-color-style-multicolor-1 u-palette-4-dark-1 u-radius-5 u-btn-1">Fazer login</a>
                <p class="u-text u-text-5">Foi utilizada a plataforma firebase para implementação do OAuth2 (Autenticação de conta). Logo, não temos acesso a dados como login e senha, apenas captamos dados&nbsp;<span style="font-weight: 700;"> necessários e públicos<span style="font-weight: 400;"> , que são: seu nome e imagem de perfil.&nbsp; Quanto ao armazenamento de dados, são feitos atráves do firebase store. Todos os dados serão deletados após o termino do estudo, junto ao desligamento da plataforma</span>
                </span>
                </p>
                <p class="u-text u-text-6">As tecnologias aqui utilizadas foram: Firebase, Node.JS, CSS e React</p>
            </div>
            </div>
        </section>
        </div>
    );
}