<template>
  <div>
    <div class="card shadow-sm">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <p>{{ title }}</p>
          <p class="bold">{{value}}</p>
          <p class="span">{{subTitle}}</p>
        </div>
        <i  v-if="icon"  :class="[icon, bgColor]"  aria-hidden="true"></i>
        <i v-else class="fa fa-check-square rounded" :class="bgColor" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "state-card",
  props: ["bgColor", "color", "title","value","subTitle","icon"],
  data: function() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
</style>