var vg_1 = "my_map.vg.json";

vegaEmbed("#map", vg_1, { actions: false })
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

var vg_2 = "SocialsupportVsHappiness.vg.json";

vegaEmbed("#SocialsupportVsHappiness", vg_2, { actions: false })
  .then(function (result) {})
  .catch(console.error);
