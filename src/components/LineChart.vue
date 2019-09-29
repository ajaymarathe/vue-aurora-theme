<template>
  <div class="small">
    <line-chart :chart-data="datacollection" style='width:400px;height:auto;'></line-chart>
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
      datacollection: {},
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
        datasets: [
          {
            label: "# Traffic",
            data: [0, 20, 10, 30, 15, 40, 20, 50, 50],
            backgroundColor: ["#132441"],
            borderColor: ["white"],
            borderWidth: 3
          }
        ]
      };
    }
  }
};
</script>