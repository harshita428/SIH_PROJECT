# 🏛️ KALACHAKRA (कालचक्र)
> **Explore India • Experience History • Shape the Future**
> *Smart India Hackathon (SIH) Project*

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![NEP 2020 Aligned](https://img.shields.io/badge/Curriculum-NEP_2020_Aligned-FF9933?style=for-the-badge)](https://www.education.gov.in/nep)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
  - [1. The Era Time Wheel (Interactive Epochs)](#1-the-era-time-wheel-interactive-epochs)
  - [2. Interactive Explore India Map & State Hubs](#2-interactive-explore-india-map--state-hubs)
  - [3. Interactive Gamified Learning Suite](#3-interactive-gamified-learning-suite)
  - [4. The Citadel Mystery Game Quest](#4-the-citadel-mystery-game-quest)
  - [5. Architectural Blueprints & Monument Audio Guides](#5-architectural-blueprints--monument-audio-guides)
  - [6. NEP 2020 Curriculum-Mapped Quests](#6-nep-2020-curriculum-mapped-quests)
  - [7. Instant Heritage Search (`Ctrl` + `K`)](#7-instant-heritage-search-ctrl--k)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Local Setup](#installation--local-setup)
  - [Available Scripts](#available-scripts)
- [Keyboard Shortcuts & Navigation](#-keyboard-shortcuts--navigation)
- [Team & Acknowledgements](#-team--acknowledgements)

---

## 🌟 Overview

**KALACHAKRA** is an experiential, gamified Indian heritage and history learning portal designed for students, educators, and culture enthusiasts. Built for the **Smart India Hackathon (SIH)**, the platform bridges ancient Indian history, architecture, metallurgy, performing arts, and regional cultures with modern interactive web technologies and **NEP 2020** pedagogical frameworks.

---

## ✨ Key Features

### 1. 🎡 The Era Time Wheel (Interactive Epochs)
Travel across six major chronological epochs of Indian history:
- 🏺 **Indus Valley Civilization (3300 – 1300 BCE)**: Urban planning, drainage systems, Harappan seals.
- 📜 **Vedic & Mahajanapadas (1500 – 321 BCE)**: Vedic literature, Upanishads, early democratic republics (*Ganasanghas*).
- 🦁 **Mauryan & Golden Age (321 BCE – 550 CE)**: Ashokan edicts, Gupta arts, Aryabhata's mathematics, Nalanda University.
- 🛕 **Medieval Empires & Temple Architecture (550 – 1526 CE)**: Chola bronzes, Kakatiya engineering, Konark Sun Temple, Dravidian & Nagara styles.
- 👑 **Mughal & Deccan Sultanates (1526 – 1757 CE)**: Indo-Islamic architecture, Golconda acoustics, Charminar, miniature paintings.
- 🇮🇳 **Colonial Era & Freedom Struggle (1757 – 1947 CE)**: 1857 revolt, Swadeshi movement, non-violent resistance, independence.

### 2. 🗺️ Interactive Explore India Map & State Hubs
- **Interactive SVG India Map**: Hover over states to preview cultural highlights, monuments, and historical significance.
- **Deep-Dive State Pages**: Dedicated cultural portals for states (Rajasthan, Telangana, Maharashtra, Tamil Nadu, Odisha, Uttar Pradesh, and more).
- **State Details**: Comprehensive dossiers on traditional crafts, folk music/dance, indigenous cuisines, historical rulers, and festivals.

### 3. 🎮 Interactive Gamified Learning Suite
Four distinct game & exploration modes on each state portal:
- 🔍 **Cultural Hub (Explore Now)**: Guided virtual tours, photo galleries, and architectural breakdowns.
- 🧩 **Heritage Puzzle Game**: Visual jigsaw and sliding tile puzzles testing memory of Indian monuments.
- 📝 **State Master Quiz**: Timed quizzes tailored to regional history with XP rewards, instant feedback, and explanation cards.
- 🕵️ **Citadel Mystery Quests**: Story-driven detective and code-breaking missions.

### 4. 🏰 The Citadel Mystery Game Quest
- **Story-driven Heritage Mystery**: e.g., *The Whispers of Golconda Citadel*.
- **Interactive Clue Solving**: Solve archaeological riddles based on real architectural marvels:
  - *The Acoustic Whispering Gallery of Bala Hissar*
  - *The Floating Earthquake-Resistant Bricks of Ramappa Temple*
  - *The Cardinal Alignment of Charminar*
  - *The Legendary Diamond Mines of Kollur & Koh-i-Noor*
- **Progressive Unlocking & Badges**: Unlock cipher keys, earn ancient artifact relics, and log achievements to your adventurer profile.

### 5. 🏛️ Architectural Blueprints & Monument Audio Guides
- Click on monument cards (Konark, Kailasa, Ramappa, Charminar, Golconda, Taj Mahal, Sanchi Stupa) to inspect **engineering blueprints**.
- Immersive **Audio Guides** with voice narration transcripts and structural cross-sections.
- UNESCO World Heritage classification badges and conservation trivia.

### 6. 📚 NEP 2020 Curriculum-Mapped Quests
- Mapped specifically to NCERT & State Board History curricula for **Classes 6 through 12**.
- Gamified quests covering Social Science units: Harappan Towns, Asoka's Dhamma, Bhakti-Sufi traditions, Vijayanagara Empire, and the Indian National Movement.

### 7. ⚡ Instant Heritage Search (`Ctrl` + `K`)
- Omnibox search accessible globally across the app.
- Instant fuzzy search across all **monuments**, **dynasties**, **eras**, **rulers**, and **states**.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **Styling & Design** | [Tailwind CSS 3.4](https://tailwindcss.com/) + Custom Heritage Themes & Jali Patterns |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/) |
| **State & Persistence** | React Context API (`ProgressContext`) + LocalStorage Persistence |
| **Code Quality & Linter** | [Oxlint](https://oxc.rs/) |

---

## 📁 Project Architecture

```plaintext
SIH_PROJECT/
├── public/                     # Static assets and favicons
├── src/
│   ├── assets/                 # SVGs, historical illustrations, imagery
│   ├── components/
│   │   ├── about/              # Philosophy & 4 pillars of Kalachakra
│   │   ├── common/             # Badges, Modals, SearchModal, StatsBar, JaliPattern
│   │   ├── cta/                # Student Quest Call to Action
│   │   ├── curriculum/         # NEP 2020 Grade 6-12 Curriculum Quests
│   │   ├── exploreIndia/       # Interactive Map, StateCulturalHub, ActivityCard, Quiz & Puzzle
│   │   ├── features/           # Core EdTech capability showcases
│   │   ├── hero/               # Hero banner with dynamic wheel animations
│   │   ├── layout/             # Sticky Navbar, Footer, Navigation drawer
│   │   ├── monuments/          # MonumentExplorer & Architectural Blueprint Modal
│   │   ├── timeline/           # EraTimeWheel (6 Epochs timeline system)
│   │   └── traditions/         # Performing arts, metallurgy, ancient sciences showcase
│   ├── context/
│   │   └── ProgressContext.jsx # Gamification state, XP, Badges & Quiz streak tracking
│   ├── data/
│   │   ├── curriculumData.js   # Class 6-12 chapter mappings
│   │   ├── erasData.js         # 6 Historical epochs detailed data
│   │   ├── gameOptions.js      # Configuration for Explore, Puzzle, Quiz, Mystery
│   │   ├── indiaMapData.js     # High-precision SVG paths for all Indian States
│   │   ├── monumentsData.js    # Blueprints, audio transcripts, historical metrics
│   │   ├── stateQuizQuestions.js # Comprehensive question bank with explanations
│   │   ├── statesData.js       # In-depth cultural data for Indian states
│   │   └── traditionsData.js   # Heritage crafts, dance, martial arts, sciences
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page with all interactive modules
│   │   ├── MysteryGame.jsx     # Full-screen / Modal Citadel Mystery Adventure
│   │   └── StateDetailPage.jsx # State-specific cultural hub with 4 game tabs
│   ├── utils/
│   │   └── localStorage.js     # Helpers for progress syncing
│   ├── App.jsx                 # App routing, global search modal & shortcuts
│   ├── index.css               # Heritage color palette & custom scrollbar styles
│   └── main.jsx                # Application root entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or later ([Download Node.js](https://nodejs.org/))
- **npm**: v9.0.0 or later

### Installation & Local Setup

1. **Clone or navigate to the repository directory**:
   ```bash
   cd SIH_PROJECT
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Bundles the application into an optimized production build in `/dist`. |
| `npm run preview` | Locally serves the production build for testing and benchmarking. |
| `npm run lint` | Runs ultra-fast Oxlint checks across the codebase. |

---

## ⌨️ Keyboard Shortcuts & Navigation

- <kbd>Ctrl</kbd> + <kbd>K</kbd> / <kbd>Cmd</kbd> + <kbd>K</kbd> : Launch the **Instant Heritage Search Omnibox**.
- <kbd>Esc</kbd> : Close open modals (Monument Blueprints, Search Dialogs, Clue Modals).
- **Interactive Map** : Click on any state to enter its dedicated Cultural & Gaming Hub.
- **URL Direct Tabs** : You can deep link directly to state activities (e.g. `/state/telangana?tab=mystery`, `/state/rajasthan?tab=quiz`).

---

## 👥 Team & Smart India Hackathon

Developed for the **Smart India Hackathon (SIH)** to revitalize Indian heritage education through experiential, immersive, and NEP-compliant technology.

---
<div align="center">
  <sub>Made with ❤️ for Indian Culture & Heritage • KALACHAKRA 2026</sub>
</div>
