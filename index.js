new Vue({
  el: "#app",
  data: {
    articles: []
  },
  methods: {
    reload: function() {
      location.reload();
    }
  },
  mounted() {
    axios
      .get(
        "https://script.googleusercontent.com/macros/echo?user_content_key=jVn91aj9aHnVA3eypy1A7f3gzOoXRXVb6qtKdbh2Ref2TqzDlUGV3I06yBttUe9zy42EsfI1f5KQGGWb6PdercNWDgd-AOIpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHTvB2KblKnwXCpBn8wj4GhaDiaVl2cXXEED4h86olF06ZjrL0CpV5DPFyUdPlCmAZ1AbEw70wW4&lib=MeQVp6SVOYrXNQ3Zdrewv-VcjcWQNOdFn"
      )
      .then(response => (this.articles = response.data));
  }
});
