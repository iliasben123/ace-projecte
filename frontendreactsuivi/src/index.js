import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Créer un root React pour le rendu
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendre l'application
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
