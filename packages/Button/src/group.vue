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
  > .me-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--me-border-radius);
      border-bottom-left-radius: var(--me-border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--me-border-radius);
      border-bottom-right-radius: var(--me-border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>