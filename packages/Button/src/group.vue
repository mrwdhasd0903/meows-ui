<template>
  <div class="me-button-group" :class="[
  {
      'me-border-round':round
    }
  ]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "MeButtonGroup",
  props: {
    round: Boolean
  }
};
</script>

<style scoped lang="scss">
.me-button-group {
  $radius: 4px;
  $roundRadius: 16px;
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
  &.me-border-round {
    > .me-button {
      &:first-child {
        border-top-left-radius: $roundRadius;
        border-bottom-left-radius: $roundRadius;
      }
      &:last-child {
        border-top-right-radius: $roundRadius;
        border-bottom-right-radius: $roundRadius;
      }
    }
  }
}
</style>