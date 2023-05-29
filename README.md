# MMM-FrenchHoroscope

Show your horoscope of the day, the week or the month on your MagicMirror. Currently only in French.

Affichez votre horoscope en français du jour, de la semaine ou du mois pour votre signe astrologique. Utilise l'API AstrooAPI développée par kayoo 123.

https://kayoo123.github.io/astroo-api

## Capture d'écran
![Capture d'écran du module MMM-FrenchHoroscope](screenshot.png)

## Installation

1. Clonez ce dépôt dans le répertoire `modules` de votre MagicMirror :
   ```sh
   cd ~/MagicMirror/modules
   git clone https://github.com/votre-utilisateur/MMM-FrenchHoroscope.git
   ```
  
2. Configurez le module dans le fichier de configuration `config.js` de votre MagicMirror en ajoutant l'objet de module suivant :


   ```javascript
   {
   module: "MMM-FrenchHoroscope",
   position: "top_left",
   config: {
      selectedSign: 'taureau',
      updateInterval: 3600000,
      selectedPeriod: 'jour',
   }
   }
   ```

3. Redémarrez votre MagicMirror pour charger le module MMM-FrenchHoroscope.

## Configuration
Les options de configuration suivantes sont disponibles pour le module `MMM-FrenchHoroscope` :

| Option              | Description                                                                                                                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `selectedSign`      | Le signe astrologique sélectionné, en français sans majuscule et sans accent. Par défaut : `'taureau'`.                                                                                                                                    |
| `updateInterval`    | L'intervalle de mise à jour de l'horoscope en millisecondes. Par défaut : `3600000` (1 heure).                                                                                                 |
| `selectedPeriod`    | La période sélectionnée : `'jour'`, `'hebdomadaire'` ou `'mensuel'`. Par défaut : `'jour'`.                                                                                                    |
