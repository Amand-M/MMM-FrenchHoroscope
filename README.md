# MMM-FrenchHoroscope
Affichez votre horoscope du jour, de la semaine ou du mois pour votre signe astrologique.

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
    // Options de configuration
  }
}
```

3. Redémarrez votre MagicMirror pour charger le module MMM-FrenchHoroscope.

## Configuration
Les options de configuration suivantes sont disponibles pour le module `MMM-FrenchHoroscope` :

- `selectedSign` : Le signe astrologique sélectionné.
- `updateInterval` : L'intervalle de mise à jour en millisecondes.
- `selectedPeriod` : La période sélectionnée (jour, hebdomadaire, mensuel).
