<template>
  <div class>
    <me-switch v-model="active" name="gender" active-color="red" inactive-color="green"></me-switch>
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