<template>
  <div class="icons">
    <i :class="'fa fa-'+`${icon}`" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: ["icon"]
};
</script>

<style lang="scss" scoped>
</style>