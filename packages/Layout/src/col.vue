<template>
  <div
    class="me-col"
    :class="[
    'me-span--'+span,
    offset?'me-offset--'+offset:''
  ]"
    :style="{
  ...space
  }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "MeCol",
  props: {
    span: {
      default: 24
    },
    offset: {
      default: 0
    }
  },
  computed: {
    //计算padding
    space() {
      let _space = this.$parent.space;
      if (!_space) {
        return null;
      }
      let padding = _space / 2;
      return {
        paddingLeft: padding + "px",
        paddingRight: padding + "px"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.me-col {
  @import "./colspan.scss";
  display: inline-block;
}
@import "./colspan-xs.scss";
@import "./colspan-sm.scss";
@import "./colspan-md.scss";
@import "./colspan-lg.scss";
</style>