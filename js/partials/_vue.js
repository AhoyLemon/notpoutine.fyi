var app = new Vue({
  el: '#app',
  data: {
    showScores: false,
    crimes: crimes
  },

  methods: {
    scrollToAnchor(a) {
      document.querySelector(a).scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  },

  computed: {
    computedScores() {
      let self = this;

      let scores = {
        fries: {
          good: 0,
          bad: 0
        },
        curds: {
          good: 0,
          bad: 0
        },
        gravy: {
          good: 0,
          bad: 0
        },
        priceList: [],
        stateList: [],
        countryList: [],
        averagePrice: 0

      };

      self.crimes.forEach(function(item) {

        // Check fries
        if (item.requirements.fries) {
          scores.fries.good++;
        } else {
          scores.fries.bad++;
        }

        // Check curds
        if (item.requirements.curds) {
          scores.curds.good++;
        } else {
          scores.curds.bad++;
        }

        if (item.requirements.gravy) {
          scores.gravy.good++;
        } else {
          scores.gravy.bad++;
        }

        scores.priceList.push(item.price);

        if (item.country == "US") {
          if (!scores.stateList.includes(item.state)) {
            scores.stateList.push(item.state);
          }
        }

        if (!scores.countryList.includes(item.country)) {
          scores.countryList.push(item.country);
        }

      });

      let sum = 0;

      for(var i = 0; i < scores.priceList.length; i++) {
        sum += scores.priceList[i];
      }
      scores.averagePrice = sum / scores.priceList.length;
      
      return scores;
    }
  },
  beforeMount() {
    const self = this;
    self.crimes = shuffle(self.crimes);
  },
  mounted: function() {

    // Scroll the the appropriate crime, if any.
    let queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("place")) {
      const crimePlace = decodeURI(queryParams.get("place"));
      document.querySelector('[crime-place="'+crimePlace+'"]').scrollIntoView();
    } else if (queryParams.get("name")) {
      const crimeName = queryParams.get("name");
      document.querySelector('[crime-name="'+crimeName+'"]').scrollIntoView();
    } else if (queryParams.get("city")) {
      const crimeCity = queryParams.get("city");
      document.querySelector('[crime-city="'+crimeCity+'"]').scrollIntoView();
    } else if (queryParams.get("country")) {
      const crimeCountry = queryParams.get("country");
      document.querySelector('[crime-country="'+crimeCountry+'"]').scrollIntoView();
    }
  }

});
