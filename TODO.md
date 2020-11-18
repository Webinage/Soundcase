- Trouver une solution pour l'update d'options de manière recursive
- mettre des readonly dans toutes les classes abstraites
- enlever les private/protected quand c'est possible dans les constructor
- retirer les mixchannels de l'equalizer 3 bandes
- muted/drywet/gain (initialiser les nodes de base input/outpu/dry/wet avec les paramètres des options) l84à87
- muted/drywet/gain (mettre ces getter setter sur l'abstract class)
- Dans les effets. Quand on modifi un parametre. metttre à jour en meme temps les options du parametre.
- Une enveloppe d'amplitude étendu de la classe enveloppe ( avec un flow de channel )
- Midi et keyboard input polyphonic ( garder trace des différentes touches appuyés)
- Coder le glide avec une fonction d'interpolation linéaire
- renomer mute/unmute par bypass
- Pouvoir utiliser un effet sans channel strip ( a la maniere des instruments )
  -> vérifier les méthodes de connection/déconnection. pour qu'un effet créé puis rajouté dans un channelStrip soit bien déconnecté du flow/context normal
- Un dry/wet sur chaque effet.
- Verifier l'unité de mesure du delay time ( secondes ou millisecondes )
- Documenter les parametres de chaque option pour les interfaces de params
- Le dry/wet ratio dans les options.
- compléter l'arboraissance du contributing.md
- compléter les interface d'options des effets
- créer une class generique pour les instruments (dont le sound player)
- plus de any
- exposer des propriétés des noeuds dans les effets pour les binds avec les enveloppes et oscillateurs
- des @min et @max pour la doc des paramètres
- Class singleton
- Gérer autrement les effectsNames ( meilleure maiontenabilité )
- un transformer typescript pour les chemins relatifs
- tester la methode remove effect du channel strip avec un effect en parametre
- faire un tour dans les effets et les channels pour voir si il n'y a pas des valeur à contraindre
- pourvoir ajouter un effet à un index particulier de la chaine d'effets du channelStrip
- La méthode setSoundVolume sur le soundplayer
- Soundplayer : playbackSpeed?/detune?/speed?
  -> Avec option stretch
- Un donnor box sur le site et le github : https://donorbox.org/fr?utm_source=Poweredby
- Méthode disconnect sur l'effect abstract classe. ( et plus globalement sur tous les éléments ayant une méthode connect())
- des console warning si un "keepvaluebetween" sort de ses gond ???
- Faire le type de clavier qwerty
- repenser l'initialisation de l'abstract class effect pour y inclure la méthode d'updateOptions dans le constructeur et simplifier l'init
- Mettre le dryWet get/set dans tous les effets
- Typer tous les getter d'effets en AudioParam
- Trouver une solution pour que les parametres dynamique des effets générants des buffers ( comme la distortion ou la réverb ) puissent être modifiés et que le getter des params puisse etre relié à une enveloppe

- des groupes de sons dans un player pour en lancer plusieurs d'un coup et les faire charger en semble
- une methode addSound ???

- Trouver un moyen d'avoir la propriété "\_rootEffect" en private sur la classe abstraite effects

- De la pub dans le cli
- Créer un template d'effet pour les devs

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

- faire un systeme de min/max values pour que l'on puisse définir des schemas ( et qu'il y ai application automatique en ofnction de la config de fonctions restrictrices des paramètres d'entré ) ??? cf interface schema / class param

- nodemon sur la doc pour watcher le dossier src
- Dans le generatedistortioncurve, remplacer la valeur en dur du sample rate par un calcul type : contexteAudio.sampleRate
