<template>
  <div class="comment">
    <div class="media">
      <img class="mr-3 rounded-circle" :src="image" alt="Generic placeholder image" />
      <div class="media-body">
        <h6 class="mt-0">{{ user }}</h6>
        <p class="text-muted"> {{ comment }} </p>
        <div>
            <span class="text-secondary"> {{ created_at }} </span>
            <span class="badge badge-primary badge-pill">{{ status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props:["user","comment","image","created_at","status"],
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>