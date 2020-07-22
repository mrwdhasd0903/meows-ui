<template>
  <div class="dddiv">
    <me-three ref="three2" delay="1000" :actions="['top']" width="230" height="62">
      <me-side active>
        <span class="span">唯有时间</span>
      </me-side>
      <me-side>
        <span class="span">对我们一视同仁</span>
      </me-side>
    </me-three>
    <me-three ref="three1" width="230" height="62">
      <me-side active>
        <span class="span">唯有时间</span>
      </me-side>
      <me-side>
        <span class="span">对我们一视同仁</span>
      </me-side>
    </me-three>
    <span>
      <me-button @click="rollBack2('top')">上</me-button>
      <me-button @click="rollBack2('bottom')">下</me-button>
      <me-button @click="rollBack2('left')">左</me-button>
      <me-button @click="rollBack2('right')">右</me-button>
    </span>
    <span>
      <me-button @click="rollBack1('top')">上</me-button>
      <me-button @click="rollBack1('bottom')">下</me-button>
      <me-button @click="rollBack1('left')">左</me-button>
      <me-button @click="rollBack1('right')">右</me-button>
    </span>
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
    rollBack1(flag) {
      this.$refs.three1.rollBack(flag);
    },
    rollBack2(flag) {
      this.$refs.three2.rollBack(flag);
    }
  },
  mounted() {}
};
</script>

<style>
.span {
  display: block;
  background: rgb(228, 228, 228);
  width: 230px;
  height: 62px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}
.dddiv {
  border: 1px solid #000;
}
</style>