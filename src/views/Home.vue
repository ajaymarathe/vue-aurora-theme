<template>
  <div class="home">
    <aurora-navbar></aurora-navbar>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <aurora-sidebar></aurora-sidebar>
        </div>
        <div class="col-md-10">
          <div class="container">
            <div class="row mt-3">
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

import StateCard from "@/components/state-card.vue";

export default {
  name: "home",
  components: {
    AuroraSidebar,
    AuroraNavbar,
    StateCard
  }
};
</script>
