<template>
  <div class>
    <p>
      <me-button full>设置</me-button>
    </p>
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
      <me-button-group>
        <me-button outer>上一页</me-button>
        <me-button outer>首页</me-button>
        <me-button outer>下一页</me-button>
      </me-button-group>
      <me-button-group>
        <me-button outerin>上一页</me-button>
        <me-button outerin>首页</me-button>
        <me-button outerin>下一页</me-button>
      </me-button-group>
      <me-button-group round>
        <me-button outerin>上一页</me-button>
        <me-button outerin>首页</me-button>
        <me-button outerin>下一页</me-button>
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
        <me-button icon="i-shezhi">设置</me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" outer>设置</me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" outerin>设置</me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" outertoin>设置</me-button>
      </span>
    </div>
    <div>
      <span>
        <me-button icon="i-shezhi" nofocus>不聚焦</me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" nofocus outer>不聚焦</me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" nofocus outerin>不聚焦</me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" nofocus outertoin>不聚焦</me-button>
      </span>
    </div>
    <div>
      <span>
        <me-button icon="i-shezhi" disabled @click="setLoading">不可点击</me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" disabled outer @click="setLoading">不可点击</me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" disabled outerin @click="setLoading">不可点击</me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" disabled outertoin @click="setLoading">不可点击</me-button>
      </span>
    </div>
    <div>
      <span>
        <me-button icon="i-shezhi" size="mini" outer round>圆角</me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" round></me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" size="big" outerin round>圆角</me-button>
      </span>
    </div>
    <div>
      <span>
        <me-button icon="i-shezhi" size="mini" outer circle></me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" circle></me-button>
      </span>
      <span>
        <me-button icon="i-shezhi" size="big" outerin circle></me-button>
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
    <div>
      <span>
        <me-button type="ordinary" outerin>普通</me-button>
      </span>
      <span>
        <me-button type="success" outerin>成功</me-button>
      </span>
      <span>
        <me-button type="warning" outerin>警告</me-button>
      </span>
      <span>
        <me-button type="important" outerin>重要</me-button>
      </span>
      <span>
        <me-button type="youth" outerin>青春</me-button>
      </span>
      <span>
        <me-button type="dynamic" outerin>活力</me-button>
      </span>
      <span>
        <me-button type="plain" outerin>朴素</me-button>
      </span>
      <span>
        <me-button type="elegant" outerin>优雅</me-button>
      </span>
    </div>
    <div>
      <span>
        <me-button type="ordinary" outertoin>普通</me-button>
      </span>
      <span>
        <me-button type="success" outertoin>成功</me-button>
      </span>
      <span>
        <me-button type="warning" outertoin>警告</me-button>
      </span>
      <span>
        <me-button type="important" outertoin>重要</me-button>
      </span>
      <span>
        <me-button type="youth" outertoin>青春</me-button>
      </span>
      <span>
        <me-button type="dynamic" outertoin>活力</me-button>
      </span>
      <span>
        <me-button type="plain" outertoin>朴素</me-button>
      </span>
      <span>
        <me-button type="elegant" outertoin>优雅</me-button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
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