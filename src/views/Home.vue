<template>
  <div class="home">
    <aurora-navbar></aurora-navbar>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 pr-0">
          <aurora-sidebar></aurora-sidebar>
        </div>
        <div class="col-md-10"  style="background:#d0e8fb;">
          <div class="container" >
            <div class="row mt-4" >
              <div class="col-md-3">
                <state-card title="Total Traffic" bgColor="bg-gradient-red" value="454,345" subTitle="Since last month" icon="fa fa-signal rounded" ></state-card>
              </div>
              <div class="col-md-3">
                <state-card title="New Projects" bgColor="bg-gradient-orange" value="259,347" subTitle="Since last month" icon="fa fa-cloud-download rounded"></state-card>
              </div>
              <div class="col-md-3">
                <state-card title="New Invoices" bgColor="bg-gradient-success" value="465,455" subTitle="Since last month" icon="fa fa-envelope rounded"></state-card>
              </div>
              <div class="col-md-3">
                <state-card title="New Leads" bgColor="bg-gradient-skyblue" value="658,389" subTitle="Since last month" icon="fa fa-paper-plane rounded"></state-card>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-6">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <AuroraLineChart></AuroraLineChart>  
                  </div>  
                </div>
              </div>
              <div class="col-md-4">
                Total Leads
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import AuroraSidebar from "@/components/sidebar.vue";
import AuroraNavbar from "@/components/navbar.vue";

// stateCard
import StateCard from "@/components/state-card.vue";
// lineChart
import AuroraLineChart from "@/components/LineChart.vue";

export default {
  name: "home",
  components: {
    AuroraSidebar,
    AuroraNavbar,
    StateCard,
    AuroraLineChart
  }
};
</script>
