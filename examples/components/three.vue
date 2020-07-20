<template>
  <div class="dddiv">
    <me-three>
      <me-surface slot="front">前</me-surface>
      <me-surface slot="back">后</me-surface>
      <me-surface slot="top">上</me-surface>
      <me-surface slot="bottom">下</me-surface>
      <me-surface slot="left">左</me-surface>
      <me-surface slot="right">右</me-surface>
    </me-three>
    <!-- <me-button>按钮</me-button> -->
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style>
.dddiv {
  border: 1px solid #000;
  width: 300px;
  margin-left: 300px;
}
</style>