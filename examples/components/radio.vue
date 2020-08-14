<template>
  <div class>
    <me-radio label="1" v-model="gender">男</me-radio>
    <me-radio label="0" v-model="gender">女</me-radio>
    <me-radio label="男" v-model="gender" />
    <me-radio label="女" v-model="gender" />

    <me-radio label="女" v-model="gender" shape="square" />
    <me-radio label="女" v-model="gender" active-color="ordinary" shape="square" />
    <me-radio label="女" v-model="gender" active-color="success" shape="square" />
    <me-radio label="女" v-model="gender" active-color="warning" shape="square" />
    <me-radio label="女" v-model="gender" active-color="youth" shape="square" />
    <me-radio label="女" v-model="gender" active-color="important" shape="square" />
    <me-radio label="女" v-model="gender" active-color="dynamic" shape="square" />
    <me-radio label="女" v-model="gender" active-color="plain" shape="square" />
    <me-radio label="女" v-model="gender" active-color="elegant" shape="square" />
    <me-radio label="女" v-model="gender" active-color="red" shape="square" />
    {{gender}}
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      gender: "0"
    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
</style>