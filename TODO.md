- des channelsGroups
- créer une interface de base pour toutes les options
- Documenter les parametres de chaque option pour les interfaces de params
- compléter l'arboraissance du contributing.md
- compléter les interface d'options des effets
- créer une class generique pour les instruments (dont le sound player)
- plus de any
- plus de "as" dans le soundPlayer et l'audioEngine
- Faire que les effets ( voir tous les composants ) puissent être utilisés sans channels ( voir sans la classe audio engine )
- Class singleton
- Gérer autrement les effectsNames ( meilleure maiontenabilité )
- un transformer typescript pour les chemins relatifs

- retirer les channels de base dans l'audio engine et faire des methodes pour en rajouter.
  -> se répercute dans le projet d'allan en etendant la classe audioengine pour créer un préset avec les 3 channels de base

- personaliser les couleurs

- get rid of the channel merger node as an input

- documenter le code ( rechercher flowtype ) / sinon jsdoc

- Pour l'Introduction, regarder celle de P5js
- une bannière pour le README.md + le logo botdesign pour le sponsor special
- la prononciation de soundcase
- Typer tous les retours de fonction, etc...
- Minifier/Uglifier la lib pour unpkg ( xxx.min.js )
- Configurer le repo
- Faire une doc pour la homepage
- Rajouter comme pour png5 types, files, repository, keywords, author, bugs, homepage

( Les contexts dans les effets et le routing dans le channel strip )

- Ajouter un effet de type compresseur
- Pouvoir jouer en parralel un meme son
- Ajouter un effet de type Wah/Auto Wah
- Ajouter un effet de type Spacialiser

- Virer l'obtionnel dans le SoundElement interface

- Revoir le typage des effets pour le passage de parametre des options ( un generique sur la methode de creation d'effet ? )

- Pouvoir connecter un channel à plusieurs channels

- que la classe channel ne soit pas abstraite
- céer plus de class abstraites ou de classes pour étendre les channels, les effets, les nodes

- refaire les options des effects pour inclure en optionnel la totalité des propriétés possible
- faire une method option sur chaque effet pour récupérer un object options ( sauvegarde, duplicat )

- se débarasser des any et implicit any

- Convertir les listes de signatures surchargées par des single ligne avec des pipes

- Faire des template d'issue sur github
  https://docs.github.com/en/enterprise-server@2.20/github/building-a-strong-community/configuring-issue-templates-for-your-repository

- des warnings sur les éléments non connectés ( input et outputs )
- Les tests unitaires
