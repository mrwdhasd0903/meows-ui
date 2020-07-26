<template>
  <div class>
    <!-- 正常 -->
    <me-dialog :visible.sync="v1"></me-dialog>
    <!-- title -->
    <me-dialog :visible.sync="v2" title="欧里给"></me-dialog>
    <!-- title by solt -->
    <me-dialog :visible.sync="v3">
      <div slot="title">欧里给gei</div>
    </me-dialog>
    <!-- width & top -->
    <me-dialog :visible.sync="v4" width="60%" top="35vh">
      <div>1</div>
      <div>2</div>
    </me-dialog>
    <!-- footer by slot -->
    <me-dialog :visible.sync="v5" width="60%" top="45vh">
      <div slot="title">欧里给gei</div>
      <div>2</div>
      <div slot="footer" />
    </me-dialog>
    <!-- @event -->
    <me-dialog :visible.sync="v6" @close="log('close')" @sure="log('sure')" @cancel="log('cancel')"></me-dialog>
    <!-- transition  -->
    <!-- <me-dialog :visible.sync="v7" transition="me-fadeRotateX"></me-dialog> -->
    <me-dialog :visible.sync="v7" transition="me-fadeToRight"></me-dialog>
    <me-button-group>
      <me-button @click="v1=!v1">v1</me-button>
      <me-button @click="v2=!v2">v2</me-button>
      <me-button @click="v3=!v3">v3</me-button>
      <me-button @click="v4=!v4">v4</me-button>
      <me-button @click="v5=!v5">v5</me-button>
      <me-button @click="v6=!v6">v6</me-button>
      <me-button @click="v7=!v7">v7</me-button>
    </me-button-group>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      v1: false,
      v2: false,
      v3: false,
      v4: false,
      v5: false,
      v6: false,
      v7: false
    };
  },
  computed: {},
  methods: {
    log(v) {
      console.log(v);
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>