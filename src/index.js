import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppStyle from './App.scss';
import App from './App';

const customElementName = 'my-custom-element';

class WebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        ReactDOM.render(
            <>
                <style type="text/css">{AppStyle}</style>

                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </>,
            this.shadowRoot
        );
    }
}

if (!customElements.get(customElementName)) {
    customElements.define(customElementName, WebComponent);
}

