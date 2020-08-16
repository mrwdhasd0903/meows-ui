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
      MeRadioGroup: this,
      GroupClick: this.GroupClick
    };
  },
  data() {
    return { count: 0 };
  },
  props: {
    //需要触发子组件
    value: null
  },
  methods: {
    GroupClick() {
      setTimeout(() => {
        this.$emit("click", this.value);
      }, 0);
    }
  }
};
</script>

<style lang="scss">
</style>