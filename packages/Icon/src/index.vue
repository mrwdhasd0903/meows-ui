<template>
  <svg v-if="name" :style="{fill:fill}" class="me-icon">
    <use :xlink:href="'#'+name" />
  </svg>
</template>

<script>
export default {
  name: "MeIcon",
  props: ["name", "fill"]
};
</script>

<style lang="scss">
.me-icon {
  height: 1em;
  width: 1em;
}
</style>