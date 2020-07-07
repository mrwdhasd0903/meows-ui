<template>
  <svg v-if="name" class="me-icon">
    <use :xlink:href="'#'+name" />
  </svg>
</template>

<script>
export default {
  name: "MeIcon",
  props: ["name"]
};
</script>

<style scoped lang="scss">
.me-icon {
  height: 1em;
  width: 1em;
}
</style>