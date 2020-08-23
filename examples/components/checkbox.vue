<template>
  <div class>
    <me-checkbox label="nv" v-model="active">女</me-checkbox>

    <me-checkbox-group v-model="arr">
      <me-checkbox active-color="ordinary" label="A">AA</me-checkbox>
      <me-checkbox active-color="success" label="B">BB</me-checkbox>
      <me-checkbox active-color="warning" label="C">CC</me-checkbox>
      <me-checkbox active-color="youth" label="E">EE</me-checkbox>
      <me-checkbox active-color="important" label="F">FF</me-checkbox>
      <me-checkbox active-color="dynamic" label="G">GG</me-checkbox>
      <me-checkbox active-color="plain" label="V">VV</me-checkbox>
      <me-checkbox active-color="elegant" label="H">HH</me-checkbox>
      <me-checkbox active-color="red" label="L">LL</me-checkbox>
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