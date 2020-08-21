<template>
  <div class>
    <slot />
  </div>
</template>

<script>
export default {
  name: "MeCheckboxGroup",
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      MeCheckboxGroup: this
    };
  }
};
</script>

<style scoped>
</style>