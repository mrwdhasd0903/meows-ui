<template>
  <div class>
    <me-switch v-model="active" name="gender" active-color="red" inactive-color="green"></me-switch>
    <me-switch v-model="active" name="gender" active-color="#000" inactive-color="#fff"></me-switch>
    <me-switch v-model="active" active-color="success" inactive-color="warning"></me-switch>
    <me-switch v-model="active"></me-switch>
    <me-switch v-model="active" type="line"></me-switch>
    <me-switch v-model="active"></me-switch>

  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      active: true
    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
</style>