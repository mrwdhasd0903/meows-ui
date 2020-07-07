<template>
  <svg v-if="icon" class="me-icon">
    <use :xlink:href="'#'+icon" />
  </svg>
</template>

<script>
export default {
  name: "MeIcon",
  props: ["icon"]
};
</script>

<style scoped lang="scss">
.me-icon {
  height: 1em;
  width: 1em;
}
</style>