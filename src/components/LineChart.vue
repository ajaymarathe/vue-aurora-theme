<template>
  <div class="small">
        <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from '@/components/charts/LineChart.js';

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
         labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
          datasets: [{
            label: '# of Votes',
            data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
            backgroundColor: [
                '#172B4E',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        }
      },
    }
  }
</script>