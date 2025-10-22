# 🏋️‍♂️ Gym PANAS – Application Angular 20 Standalone

> Une application moderne et responsive de salle de sport, développée avec **Angular 20 (architecture standalone)**, et déployée automatiquement via **Netlify CI/CD** depuis GitHub.

---

## 🚀 Aperçu

🔗 **Démo en ligne :** [https://gym-panas.netlify.app](https://gym-panas.netlify.app)  
🧠 **Code source GitHub :** [https://github.com/Moise20/gymAppMo-se](https://github.com/Moise20/gymAppMo-se)

---

## 🧩 Objectifs du projet

- Créer un site vitrine pour une salle de sport avec une interface moderne et fluide  
- Présenter les programmes, équipements, tarifs et un formulaire de contact  
- Utiliser les **nouvelles pratiques Angular (standalone components)**  
- Mettre en place une **intégration continue (CI/CD)** avec **Netlify**

---

## 🏗️ Architecture du projet

src/
├── app/
│ ├── features/
│ │ ├── home/
│ │ ├── programs/
│ │ ├── equipment/
│ │ ├── pricing/
│ │ └── contact/
│ └── shared/
│ └── ui/
│ ├── navbar/
│ ├── footer/
│ ├── card/
│ └── button/
├── assets/
│ ├── intro1.jpg
│ ├── intro2.jpg
│ ├── intro3.jpg
│ ├── prog1.jpg
│ ├── prog2.jpg
│ ├── prog3.jpg
│ ├── eq1.jpg … eq6.jpg
│ └── gym-panas-icon.png
└── index.html


---

## 🧰 Stack Technique

| Technologie | Version | Description |
|--------------|----------|--------------|
| Angular | 20.3.6 | Framework principal |
| Node.js | 22.20.0 | Environnement JS |
| TypeScript | 5.9.3 | Langage |
| RxJS | 7.8.2 | Gestion des flux |
| Netlify | - | Déploiement automatique |

---

## ⚙️ Installation locale

Clone le dépôt :

```bash
git clone https://github.com/Moise20/gymAppMo-se
cd gym-app
npm install

Lancer l’application localement :
ng serve -o

Le site s’ouvre sur http://localhost:4200