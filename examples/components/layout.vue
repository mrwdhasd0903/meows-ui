<template>
  <div class>
    <me-row>
      <me-col span="1" v-for="(item, index) in arr" :key="index">{{index}}</me-col>
    </me-row>
    <me-row space="20">
      <me-col span="8">
        <div class="tt">123</div>
      </me-col>
      <me-col span="8">
        <div class="tt">123</div>
      </me-col>
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
      <me-col span="2">
        <div class="tt">123</div>
      </me-col>
    </me-row>
    <me-row>
      <me-col offset="8" span="8">
        <div class="tt">123</div>
      </me-col>
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
      <me-col span="2">
        <div class="tt">123</div>
      </me-col>
    </me-row>
    <me-row flex justify="between">
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
    </me-row>
    <me-row flex justify="end">
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
    </me-row>
    <me-row flex justify="around">
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
    </me-row>
    <me-row flex justify="center">
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
      <me-col span="6">
        <div class="tt">123</div>
      </me-col>
    </me-row>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      arr: new Array(24)
    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.tt {
  background: rgb(238, 173, 173);
}
</style>