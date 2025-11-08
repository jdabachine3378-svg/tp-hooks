import React, { useState, useEffect } from 'react';
import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';
import useLocalStorage from './useLocalStorage';

// 🔹 Composant pour tester useLocalStorage
function TestLocalStorage() {
    const [nom, setNom] = useLocalStorage('nomUtilisateur', '');

    return (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '10px' }}>
            <h2>Hook personnalisé : useLocalStorage</h2>
            <input
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Tape ton nom..."
                style={{ padding: '8px', marginRight: '10px' }}
            />
            <p>Bonjour, {nom || 'utilisateur inconnu'} 👋</p>
        </div>
    );
}

// 🔹 Composant pour afficher la date et l’heure actuelles
function Horloge() {
    const [dateHeure, setDateHeure] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateHeure(new Date());
        }, 1000);

        return () => clearInterval(timer); // Nettoyage du timer
    }, []);

    return (
        <div style={{ marginTop: '20px', backgroundColor: '#f3f3f3', padding: '10px', borderRadius: '10px' }}>
            <h2>Horloge en temps réel 🕒</h2>
            <p>{dateHeure.toLocaleDateString()} - {dateHeure.toLocaleTimeString()}</p>
        </div>
    );
}

// 🔹 Application principale
function App() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>TP React Hooks Avancés – Niveau Débutant</h1>

            <section>
                <h2>1️⃣ Compteur avec useReducer</h2>
                <Compteur />
            </section>

            <section>
                <h2>2️⃣ Mettre le focus avec useRef</h2>
                <FocusInput />
            </section>

            <section>
                <h2>3️⃣ Compteur de rendus avec useRef + useEffect</h2>
                <CompteurRendu />
            </section>

            <section>
                <h2>4️⃣ Liste d’articles via Hook personnalisé useFetch</h2>
                <ListeArticles />
            </section>

            <section>
                <h2>5️⃣ Timer avec nettoyage d’effet</h2>
                <Timer />
            </section>

            <section>
                <h2>6️⃣ Hook personnalisé : useLocalStorage</h2>
                <TestLocalStorage />
            </section>

            <section>
                <h2>7️⃣ Horloge : date et heure actuelle</h2>
                <Horloge />
            </section>
        </div>
    );
}

export default App;
