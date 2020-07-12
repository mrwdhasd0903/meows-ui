<template>
  <div id="app">
    <span>
      <me-button>设置</me-button>
    </span>
    <span>
      <me-button icon="i-shezhi">设置</me-button>
    </span>
    <span>
      <me-button icon="i-shezhi" icon-position="right">设置</me-button>
    </span>
    <span>
      <me-button @click="setLoading" :loading="loading">加载中</me-button>
    </span>
    <span>
      <me-button @click="setLoading" loadingIcon="i-loading-doc" :loading="loading">加载中</me-button>
    </span>
    <span>
      <me-button-group>
        <me-button>上一页</me-button>
        <me-button>首页</me-button>
        <me-button>下一页</me-button>
      </me-button-group>
    </span>
    <span>
      <me-button size="mini">首页</me-button>
    </span>
    <span>
      <me-button size="standard">首页</me-button>
    </span>
    <span>
      <me-button size="big">首页</me-button>
    </span>
    <div>
      <span>
        <me-button type="ordinary">普通</me-button>
      </span>
      <span>
        <me-button type="success">成功</me-button>
      </span>
      <span>
        <me-button type="warning">警告</me-button>
      </span>
      <span>
        <me-button type="important">重要</me-button>
      </span>
      <span>
        <me-button type="youth">青春</me-button>
      </span>
      <span>
        <me-button type="dynamic">活力</me-button>
      </span>
      <span>
        <me-button type="plain">朴素</me-button>
      </span>
      <span>
        <me-button type="elegant">优雅</me-button>
      </span>
    </div>
    <div>
      <span>
        <me-button nofocus>不聚焦</me-button>
      </span>
    </div>
    <div>
      <span>
        <me-button disabled outer @click="setLoading">不可点击</me-button>
      </span>
    </div>
    <div>
      <span>
        <me-button type="ordinary" outer>普通</me-button>
      </span>
      <span>
        <me-button type="success" outer>成功</me-button>
      </span>
      <span>
        <me-button type="warning" outer>警告</me-button>
      </span>
      <span>
        <me-button type="important" outer>重要</me-button>
      </span>
      <span>
        <me-button type="youth" outer>青春</me-button>
      </span>
      <span>
        <me-button type="dynamic" outer>活力</me-button>
      </span>
      <span>
        <me-button type="plain" outer>朴素</me-button>
      </span>
      <span>
        <me-button type="elegant" outer>优雅</me-button>
      </span>
    </div>
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

<style scoped>
span {
  margin: 10px;
}
div {
  margin: 10px;
}
</style>
