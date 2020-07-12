<template>
  <div class="me-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "MeButtonGroup"
};
</script>

<style scoped lang="scss">
.me-button-group {
  $radius: 4px;
  > .me-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
    }
    &:last-child {
      border-top-right-radius: $radius;
      border-bottom-right-radius: $radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>