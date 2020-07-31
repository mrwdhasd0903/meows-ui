<template>
  <div class>
    <me-input active-light="ordinary" placeholder="请输入内容"></me-input>
    <me-input active-light="success" placeholder="请输入内容"></me-input>
    <me-input active-light="warning" placeholder="请输入内容"></me-input>
    <me-input active-light="youth" placeholder="请输入内容"></me-input>
    <me-input active-light="important" placeholder="请输入内容"></me-input>
    <me-input active-light="dynamic" placeholder="请输入内容"></me-input>
    <me-input active-light="plain" placeholder="请输入内容"></me-input>
    <me-input active-light="elegant" placeholder="请输入内容"></me-input>
    <me-input placeholder="密码" type="password"></me-input>
    <me-input placeholder="禁用" v-model="username" disabled></me-input>
    <me-input placeholder="v-model" v-model="username"></me-input>
    <me-input placeholder="clearable" type="password" v-model="username" clearable show-pwd></me-input>
    <me-button>尺寸</me-button>
    <me-input placeholder="width" v-model="username" width="200px" clearable show-pwd></me-input>
    <me-input
      placeholder="width"
      type="password"
      v-model="username"
      size="big"
      width="200px"
      clearable
      show-pwd
    ></me-input>
    <me-input
      placeholder="width"
      type="password"
      v-model="username"
      size="mini"
      width="200px"
      clearable
      show-pwd
    ></me-input>
    <me-input
      v-model="username"
      @blur="log('blur')"
      @input="log('input')"
      @focus="log('focus')"
      @clear="log('clear')"
      clearable
      placeholder="focus & blur"
    ></me-input>
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
  methods: {
    log(value) {
      console.log(value);
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>