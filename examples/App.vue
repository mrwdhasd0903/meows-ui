<template>
  <div id="app">
    <me-button icon="i-shezhi">设置</me-button>
    <me-button>设置</me-button>
    <me-button @click="setLoading" :loading="loading">加载中</me-button>
    <me-button @click="setLoading" loadingIcon="i-loading-doc" :loading="loading">加载中</me-button>
    <me-button icon="i-shezhi" icon-position="right">设置</me-button>
    <me-button-group>
      <me-button>上一页</me-button>
      <me-button>首页</me-button>
      <me-button>下一页</me-button>
    </me-button-group>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      loading: true
    };
  },
  methods: {
    setLoading() {
      this.loading = !this.loading;
    }
  }
};
</script>

<style>
</style>
