Module.register('MMM-FrenchHoroscope', {

    getStyles: function () {
        return ['MMM-FrenchHoroscope.css']; // Retourne le nom de votre fichier CSS
      },

    // Déclaration des configurations par défaut
    defaults: {
      selectedSign: 'taureau', // Signe astrologique sélectionné par défaut
      updateInterval: 60 * 60 * 1000, // Intervalle de mise à jour (1 heure par défaut)
      selectedPeriod: 'jour', // Période sélectionnée par défaut
    },
  
    start: function () {
      this.getData();
      this.scheduleUpdate();
    },
  
    getData: function () {
      const selectedSign = this.config.selectedSign;
      const selectedPeriod = this.config.selectedPeriod;
  
      const apiUrl = this.getApiUrl(selectedPeriod);
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const horoscope = data[selectedSign];
  
          // Mettre à jour la variable this.horoscope avec l'horoscope récupéré
          this.horoscope = horoscope;
  
          // Mettre à jour l'affichage du module avec l'horoscope récupéré
          this.updateDom();
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération des données.', error);
        });
    },
  
    getApiUrl: function (selectedPeriod) {
      const baseUrl = 'https://kayoo123.github.io/astroo-api/';
  
      if (selectedPeriod === 'jour') {
        return `${baseUrl}jour.json`;
      } else if (selectedPeriod === 'hebdomadaire') {
        return `${baseUrl}hebdomadaire.json`;
      } else if (selectedPeriod === 'mensuel') {
        return `${baseUrl}mensuel.json`;
      }
  
      // Retourne l'URL quotidienne par défaut si la période sélectionnée n'est pas valide
      return `${baseUrl}jour.json`;
    },
  
    scheduleUpdate: function () {
      const self = this;
      setInterval(function () {
        self.getData();
      }, this.config.updateInterval);
    },
  
    // Méthode appelée pour mettre à jour l'affichage du module
    getDom: function () {
      const wrapper = document.createElement('div');
  
      // Récupérer l'horoscope depuis les données du module
      const horoscope = this.horoscope || 'Chargement...';
  
        // Créer un élément HTML pour afficher le titre
        const titleElement = document.createElement('div');
        const selectedPeriod = this.config.selectedPeriod;
        const selectedSign = this.config.selectedSign;
        titleElement.innerHTML = `Horoscope ${selectedPeriod === 'jour' ? 'du jour' : (selectedPeriod === 'hebdomadaire' ? 'de la semaine' : 'du mois')} du signe ${selectedSign}`;
        titleElement.classList.add('horoscope-title'); // Ajoute la classe CSS

        // Ajouter l'élément HTML du titre à la vue du module
        wrapper.appendChild(titleElement);


      // Créer un élément HTML pour afficher l'horoscope
      const horoscopeElement = document.createElement('div');
      horoscopeElement.innerHTML = horoscope;
  
      // Ajouter l'élément HTML à la vue du module
      wrapper.appendChild(horoscopeElement);
  
      return wrapper;
    },
  });
  