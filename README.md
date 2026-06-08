# Neurodapt

Landing page de pre-lancement construite en React + Vite a partir des documents :

- `C:\Users\k_perei\Desktop\Projecto\Neurodapt_WebDev_Brief.pdf`
- `C:\Users\k_perei\Desktop\Projecto\Value Prop.pdf`

## Resume du besoin

Neurodapt est une startup early-stage qui prepare un lancement Kickstarter cible pour fin T3 2026.
Le site web doit servir de hub marketing pre-lancement et sa fonction principale est de convertir le trafic social en inscriptions a une waitlist.

Objectifs principaux :

- expliquer clairement le produit et a qui il s'adresse
- donner envie de suivre le projet
- convertir simplement vers la waitlist

Contraintes majeures :

- site en anglais
- experience tres accessible, faible charge cognitive, mobile-first
- ton chaleureux, simple et moderne
- marque assez rassurante pour des parents, sans etre infantile pour les jeunes adultes
- pas d'e-commerce a ce stade

Audiences cibles :

- parents d'enfants de 6 a 14 ans
- jeunes adultes, etudiants et jeunes professionnels

Piliers de marque :

- accessibilite sans etiquetage excessif
- simplicite d'usage
- co-development et communaute

Direction de message issue des notes de valeur :

- calmer, distraction-light, single-purpose
- soutien a l'organisation, a la planification et au suivi quotidien
- "Keeping you on track, wherever you go" comme base de proposition de valeur

## Ce qui a ete genere

Le site actuel comprend :

- un hero d'ouverture tres visuel
- une proposition de valeur en anglais
- des sections "story", "audiences", "co-development" et "waitlist"
- une integration des assets fournis (logos, squiggle, photos)
- un formulaire de waitlist pret a etre branche a un endpoint live

En local, le formulaire tourne en mode demo et stocke les soumissions dans `localStorage`.

## Lancer le projet

```bash
npm install
npm run dev
```

Build production :

```bash
npm run build
```

## Prochaines etapes recommandees

- brancher la waitlist a un vrai outil de collecte (Netlify Forms, Formspree, ConvertKit, etc.)
- valider le wording produit exact si la nature du produit doit etre decrite plus precisement
- ajouter analytics et tracking de conversion
- affiner encore les visuels et les animations apres revue du rendu
