<template>
  <div
    class="me-col"
    :class="[
    'me-span--'+span,
    ...mediaClass,
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
    },
    xs: [Number, String],
    sm: [Number, String],
    md: [Number, String],
    lg: [Number, String],
    offsetXs: [Number, String],
    offsetSm: [Number, String],
    offsetMd: [Number, String],
    offsetLg: [Number, String]
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
    },
    mediaClass() {
      let classList = [];
      ["xs", "sm", "md", "lg"].forEach(item => {
        if (this[item] || this[item] === 0) {
          classList.push("me-span-" + item + "--" + this[item]);
        }
      });
      ["offsetXs", "offsetSm", "offsetMd", "offsetLg"].forEach(item => {
        if (this[item]) {
          let size = item.substring(6).toLocaleLowerCase();
          classList.push("me-offset-" + size + "--" + this[item]);
        }
      });
      return classList;
    }
  }
};
</script>

<style scoped lang="scss">
.me-col {
  @import "./colspan.scss";
  display: inline-block;
  transition: width 0.2s ease, margin-left 0.2s ease;
}
@import "./colspan-xs.scss";
@import "./colspan-sm.scss";
@import "./colspan-md.scss";
@import "./colspan-lg.scss";
</style>