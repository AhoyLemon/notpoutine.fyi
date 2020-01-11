var app = new Vue({
  el: '#app',
  data: {
    h1: 'It works.',
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

  },

  mounted: function() {

  }

});
