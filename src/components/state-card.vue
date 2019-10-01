<template>
  <div>
    <div class="card shadow-sm">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <p>{{ title }}</p>
          <p class="bold">{{value}}</p>
          <p class="span">{{subtitle}}</p>
        </div>
        <i v-if="icon" :class="[icon, bgcolor]" aria-hidden="true"></i>
        <i v-else class="fa fa-check-square rounded" :class="bgcolor" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "state-card",
  props: ["bgcolor", "color", "title", "value", "subtitle", "icon"],
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>