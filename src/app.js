import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {

  new Vue({
    el: "#app",
    data: {
      exchangeRates: []
    },
    mounted () {
      this.getRates()
    },
    methods: {
      getRates: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(result => this.exchangeRates = result.rates)
      }
    }
  });
});
