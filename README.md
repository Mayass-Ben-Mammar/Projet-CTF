# CTF 

[![Deployment](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blueviolet?style=flat-square)](https://mayass-ben-mammar.github.io/Projet-CTF/)

Une plateforme de **Capture The Flag (CTF)** minimaliste, statique et immersive, conçue pour l'apprentissage de la cybersécurité. L'interface est inspirée du gestionnaire de fenêtres **dwm** et de la charte graphique de **Gentoo Linux**.

## Objectifs du Projet
Le but est de proposer un environnement d'apprentissage guidé couvrant les piliers de la sécurité offensive. La plateforme regroupe **15 épreuves** originales:
* **Reverse Engineering** : Analyse de binaires et de bytecode.
* **PWN** : Exploitation de vulnérabilités mémoires (Buffer Overflow, Format String).
* **Forensics** : Analyse de captures réseau (.pcap) et investigation numérique.
* **Web Exploitation** : Injections et manipulation de cookies.
* **OSINT** : Recherche d'informations en sources ouvertes.

## Architecture Technique
Le projet repose sur une architecture **100% statique**, permettant un déploiement léger sur **GitHub Pages**.
* **Frontend** : HTML5, CSS3 (Grid & Flexbox pour le rendu "tiling").
* **Sécurité** : Validation des flags via l'API **Web Crypto (SHA-256)**. Les solutions ne sont jamais stockées en clair.
* **Persistance** : Sauvegarde du score et de la progression via le **LocalStorage** du navigateur.

## Installation & Utilisation
Aucune installation serveur n'est requise.

## Recommandations
Pour résoudre les exercices, l'usage d'un environnement **Linux** (natif, VM ou WSL) est fortement recommandé.
Outils conseillés : `gcc`, `gdb`, `python3`, `pwntools`, `ghidra`, `wireshark`.

## Arborescence du projet
```
├── index.html
├── script.js
├── style.css
├── README.md
└── defis/
    ├── reverse_1.zip
    ├── reverse_2.zip
    ├── reverse_3.zip
    ├── reverse_4.zip
    ├── reverse_5.zip
    ├── pwn_6.zip
    ├── pwn_7.zip
    ├── pwn_8.zip
    ├── pwn_9.zip
    ├── pwn_10.zip
    ├── osint_11.zip
    ├── forensics_12.zip
    ├── forensics_13.zip
    ├── web_14.zip
    └── web_15.zip
```
