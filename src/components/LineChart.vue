<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart.js";

export default {
  components: {
    LineChart
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
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug"],
        datasets: [
          {
            label: "Total Traffic",
            backgroundColor: "#172B4E",
            borderColor: "#5E72E5",
            data: [0, 20, 10, 30, 15, 35, 20, 50],
            borderWidth: 4
          }
        ]
      };
    }
  }
};
</script>