<template>
  <div class="me-radio-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "MeRadioGroup",
  provide() {
    return {
      MeRadioGroup: this
    };
  },
  props: {
    //需要触发子组件
    value: null
  }
};
</script>

<style lang="scss">
</style>