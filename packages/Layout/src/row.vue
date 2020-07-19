<template>
  <div
    class="me-row"
    :style="{
    ...spaceStyle,
    justifyContent:flex?justifyContent:'',
    alignItems:flex?alignItems:'',
    display:flex?'flex':''
  }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "MeRow",
  components: {},
  props: {
    space: {
      default: 0
    },
    flex: {
      type: Boolean,
      default: false
    },
    spaceEdge: {
      type: Boolean,
      default: false
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "start"
    }
  },
  computed: {
    spaceStyle() {
      if (this.spaceEdge || !this.space) {
        return null;
      }
      return {
        marginLeft: "-" + this.space / 2 + "px",
        marginRight: "-" + this.space / 2 + "px"
      };
    },
    //justifyContent计算
    justifyContent() {
      let value = "flex-start";
      if (this.justify.indexOf("end") != -1) {
        value = "flex-end";
      } else if (this.justify.indexOf("center") != -1) {
        value = "center";
      } else if (this.justify.indexOf("between") != -1) {
        value = "space-between";
      } else if (this.justify.indexOf("around") != -1) {
        value = "space-around";
      }
      return value;
    },
    //alignItems计算
    alignItems() {
      let value = "stretch";
      if (this.align.indexOf("end") != -1) {
        value = "flex-end";
      } else if (this.align.indexOf("center") != -1) {
        value = "center";
      } else if (this.align.indexOf("start") != -1) {
        value = "flex-start";
      } else if (this.align.indexOf("baseline") != -1) {
        value = "baseline ";
      }
      return value;
    }
  }
};
</script>

<style scoped>
.me-row {
  font-size: 0;
}
</style>