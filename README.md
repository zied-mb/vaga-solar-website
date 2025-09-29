# ☀️ VagaSolar : Application Vitrine Énergétique Haute Performance

## 📖 Description du Projet

Ce dépôt contient l'application web officielle et **entièrement responsive** de **Vaga Solar**, une entreprise leader dans les solutions d'énergie solaire.
Conçue pour une **expérience utilisateur optimale** et des performances rapides, cette application sert de **vitrine numérique** complète.

L'architecture est construite sur un stack technique moderne pour garantir **maintenabilité** et **scalabilité**.

| Section Incluse            | Objectif Business                                 |
| :------------------------- | :------------------------------------------------ |
| **Accueil (Landing Page)** | Attirer l’attention & présenter la valeur ajoutée |
| **Services & Projets**     | Mettre en avant l’expertise et les réalisations   |
| **Témoignages & À Propos** | Inspirer confiance & crédibilité                  |
| **Contact**                | Transformer les visiteurs en prospects qualifiés  |

---

## ⚙️ Stack Technique

| Technologie       | Version | Rôle                                   |
| :---------------- | :------ | :------------------------------------- |
| **React**         | v18.x   | Librairie frontend modulaire           |
| **Tailwind CSS**  | Latest  | Styling utilitaire rapide & responsive |
| **Framer Motion** | Latest  | Animations fluides                     |
| **Vite / CRA**    | N/A     | Bundling & optimisation                |
| **Jest / RTL**    | Latest  | Tests unitaires & d’intégration        |

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-6718FF?style=for-the-badge\&logo=framer\&logoColor=white)
![Licence](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge)

---

## 🚀 Démarrage Rapide

### Prérequis

* **Node.js** v14+
* **npm** ou **yarn/pnpm**

### Installation et Lancement

```bash
# 1. Cloner le dépôt
git clone <repository-url>
cd vagasolar

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm start
```

👉 L’application sera accessible sur [http://localhost:3000](http://localhost:3000)

---

## 📜 Scripts Disponibles

* `npm start` → Mode développement
* `npm run build` → Build production optimisé
* `npm test` → Lancer les tests unitaires
* `npm run eject` → Ejecter la config CRA (non réversible)

---

## 📂 Structure du Projet

```
vagasolar/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/       # Navbar, Footer, UI Reusable
│   ├── pages/            # Accueil, Services, Projets, etc.
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── tests/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🌐 Déploiement

* **Netlify** → Build command: `npm run build`
* **Vercel** → Auto-détection React
* **GitHub Pages** → Avec `gh-pages` ou GitHub Actions
* **AWS S3** → Uploader le contenu du dossier `/build`

---

## 🤝 Contribution

1. Forker le dépôt
2. Créer une branche (`git checkout -b feature/amazing-feature`)
3. Commit (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

---

## 📜 Licence

Projet distribué sous licence **MIT** – voir [LICENSE](LICENSE).

---

## 📬 Support & Contact

* Ouvrir une [Issue](../../issues) pour signaler un bug ou demander de l’aide
* Page officielle 👉 [Facebook Vaga Solar](https://www.facebook.com/Vaga.Solar.Tunisie/)
