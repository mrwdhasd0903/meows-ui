<template>
  <div class="dddiv">
    <me-three ref="three" width="120" height="160" deep="200">
      <me-surface slot="front">前</me-surface>
      <me-surface slot="back">后</me-surface>
      <me-surface slot="top">上</me-surface>
      <me-surface slot="bottom">下</me-surface>
      <me-surface slot="left">左</me-surface>
      <me-surface slot="right">右</me-surface>
    </me-three>
    <me-button style="marginLeft:300px" @click="rollBack('top')">↑</me-button>
    <me-button style="marginLeft:300px;marginTop:40px" @click="rollBack('bottom')">↓</me-button>
    <me-button style="marginLeft:240px;marginTop:-130px" @click="rollBack('left')">←</me-button>
    <me-button style="marginLeft:350px;marginTop:-160px" @click="rollBack('right')">→</me-button>
    <input style="marginLeft:350px;marginTop:-160px" type="text" v-model="code" />
    <me-button style="marginLeft:350px;marginTop:-160px" @click="evalString">执行</me-button>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      code: ""
    };
  },
  computed: {},
  methods: {
    evalString() {
      var arr = this.code.split(" ");
      this.$refs.three.evalString(
        "this.rotateX=" +
          arr[0] +
          ";this.rotateY=" +
          arr[1] +
          ";this.rotateZ=" +
          arr[2]
      );
    },
    rollBack(flag) {
      this.$refs.three.rollBack(flag);
    }
  },
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