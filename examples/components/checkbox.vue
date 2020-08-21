<template>
  <div class>
    <me-checkbox label="nv" v-model="active">女</me-checkbox>

    <me-checkbox-group v-model="arr">
      <me-checkbox label="A">AA</me-checkbox>
      <me-checkbox label="B">BB</me-checkbox>
      <me-checkbox label="C">CC</me-checkbox>
      <me-checkbox label="D">DD</me-checkbox>
    </me-checkbox-group>
    {{arr}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      arr: ["A", "B", "C"]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>