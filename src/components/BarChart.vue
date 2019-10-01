<template>
  <div class="small">
    <bar-chart :chart-data="datacollection" style="width:auto;height:auto;"></bar-chart>
  </div>
</template>

<script>
import BarChart from "@/components/charts/BarChart.js";

export default {
  components: {
    BarChart
  },
  data() {
    return {
      datacollection: {}
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      // hide grid lines
      Chart.defaults.scale.gridLines.display = false;

      this.datacollection = {
        labels: [
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange"
        ],
        datasets: [
          {
            label: "Total Sales",
            data: [
              0,
              20,
              10,
              30,
              15,
              35,
              20,
              50,
              0,
              20,
              10,
              30,
              15,
              35,
              20,
              50,
              0,
              20,
              10,
              30,
              15,
              35,
              20,
              60
            ],
            backgroundColor: [
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA",
              "#A8E5DA"
            ],
            borderColor: [
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3",
              "#4FBFA3"
            ],
            borderWidth: 3
          }
        ]
      };
    }
  }
};
</script>