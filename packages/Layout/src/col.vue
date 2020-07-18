<template>
  <div class="me-col" :class="[
    'me-span--'+span
  ]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "MeCol",
  props: {
    span: {
      default: 24
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.me-col {
  @import "./colspan.scss";
  display: inline-block;
  border: 1px solid #eee;
  min-height: 10px;
}
</style>