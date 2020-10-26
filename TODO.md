- Documenter les parametres de chaque option pour les interfaces de params
- préfixer tout ce qui est privé par "\_" (méthodes de classes y compris)
- compléter l'arboraissance du contributing.md
- compléter les interface d'options des effets
- créer une class generique pour les instruments (dont le sound player)
- plus de any
- Class singleton
- Gérer autrement les effectsNames ( meilleure maiontenabilité )
- un transformer typescript pour les chemins relatifs
- tester la methode remove effect du channel strip avec un effect en parametre
- faire un tour dans les effets et les channels pour voir si il n'y a pas des valeur à contraindre
- pourvoir ajouter un effet à un index particulier de la chaine d'effets du channelStrip

- retirer les channels de base dans l'audio engine et faire des methodes pour en rajouter.
  -> se répercute dans le projet d'allan en etendant la classe audioengine pour créer un préset avec les 3 channels de base

- personaliser les couleurs

- Typer tous les retours de fonction, etc...
- Rajouter comme pour png5 types, files, repository, keywords, author, bugs, homepage

- Ajouter un effet de type compresseur
- Pouvoir jouer en parralel un meme son
- Ajouter un effet de type Wah/Auto Wah
- Ajouter un effet de type Spacialiser

- Revoir le typage des effets pour le passage de parametre des options ( un generique sur la methode de creation d'effet ? )

- Pouvoir connecter un channel à plusieurs channels

- refaire les options des effects pour inclure en optionnel la totalité des propriétés possible
- faire une method option sur chaque effet pour récupérer un object options ( sauvegarde, duplicat )

- se débarasser des any et implicit any
- plus de "as" dans le soundPlayer et l'audioEngine

- Convertir les listes de signatures surchargées par des single ligne avec des pipes

- Faire des template d'issue sur github
  https://docs.github.com/en/enterprise-server@2.20/github/building-a-strong-community/configuring-issue-templates-for-your-repository

- des warnings sur les éléments non connectés ( input et outputs )
- Les tests unitaires
