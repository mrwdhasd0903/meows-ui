<template>
  <div class>
    <me-input placeholder="请输入内容"></me-input>
    <me-input placeholder="密码" type="password"></me-input>
    <me-input placeholder="禁用" disabled></me-input>
    <me-input placeholder="v-model" v-model="username"></me-input>
    {{username}}
    <me-input placeholder="clearable" type="password" v-model="username" clearable show-pwd></me-input>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      username: "xiaowang"
    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
</style>