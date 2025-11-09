## name: "TP React Hooks Avancés – Niveau Débutant"
author: "Jamila Dabachine"
# description: >
  Ce projet React a pour objectif de pratiquer les Hooks avancés :
  useReducer, useRef, useEffect, et la création de Hooks personnalisés 
  comme useFetch et useLocalStorage.
  Il s’agit d’un TP complet permettant de comprendre la gestion d’état,
  la manipulation du DOM, les effets avec nettoyage et la réutilisation
  de logique via des Hooks personnalisés.

---

# objectifs:
  - Gérer un état complexe avec useReducer
  - Manipuler le DOM ou conserver une donnée sans re-render avec useRef
  - Gérer des effets avec nettoyage via useEffect
  - Créer et utiliser des Hooks personnalisés
  - Sauvegarder des données dans localStorage
  - Mettre à jour une horloge en temps réel

---

# structure_du_projet:
  dossier: src/
  fichiers:
    - App.js
    - Compteur.js
    - FocusInput.js
    - CompteurRendu.js
    - useFetch.js
    - ListeArticles.js
    - Timer.js
    - useLocalStorage.js
    - index.js

---

# etapes:
  - Étape 1: Créer un compteur avec useReducer (Compteur.js)
  - Étape 2: Donner le focus à un champ texte avec useRef (FocusInput.js)
  - Étape 3: Compter le nombre de rendus d’un composant (CompteurRendu.js)
  - Étape 4: Créer un Hook personnalisé pour récupérer des données API (useFetch.js)
  - Étape 5: Utiliser useFetch pour afficher une liste d’articles (ListeArticles.js)
  - Étape 6: Créer un Timer avec effet et nettoyage automatique (Timer.js)
  - Étape 7: Créer un Hook personnalisé useLocalStorage pour stocker une valeur localement
  - Étape 8: Ajouter une Horloge affichant la date et l’heure actuelles chaque seconde
  - Étape 9: Intégrer tous les composants dans App.js

---

# #hooks_utilises:
  - useState: Pour gérer des états simples
  - useReducer: Pour gérer un état complexe avec actions
  - useRef: Pour manipuler directement le DOM ou conserver une valeur
  - useEffect: Pour exécuter des effets (fetch, timers, logs…)
  - useFetch: Hook personnalisé pour récupérer des données d’une API
  - useLocalStorage: Hook personnalisé pour lire/écrire dans le localStorage

---

# exemple_execution:

  commandes:
    - npm install
    - npm start
  resultat:
    - Affiche le compteur (useReducer)
    - Met le focus sur un champ texte (useRef)
    - Compte les rendus dans la console (useRef + useEffect)
    - Affiche une liste d’articles via API (useFetch)
    - Lance un timer (useEffect avec nettoyage)
    - Sauvegarde un nom dans localStorage (useLocalStorage)
    - Met à jour la date et l’heure en temps réel

---
<img width="1755" height="3395" alt="image" src="https://github.com/user-attachments/assets/ff15ecd1-e86f-45dc-b468-5ef11ef5f802" />

auteurs_et_credits:
  etudiante: "Jamila Dabachine"
  encadrant: "M. Lachgar"
  formation: "Master Technologies Émergentes en Éducation – ENS Marrakech"
  annee_universitaire: "2024-2025"

---

licence:
  type: "Projet académique - usage pédagogique"
  copyright: "© 2025 ENS Marrakech"
