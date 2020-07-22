<template>
  <div class="me-side" :class="
  [{
    'me-side-active':active
  }]">
    <div :style="{
      width:width +'px',
      height:height +'px'
    }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeSide",
  components: {},
  data() {
    return {};
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    width() {
      return this.$parent.width;
    },
    height() {
      return this.$parent.height;
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style>
</style>