<template>
  <div id="app">
    <p>
      <router-link
        v-for="(item,index) in plateMenu"
        :key="index"
        tag="span"
        :to="item.link"
      >{{item.text}}</router-link>
    </p>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      plateMenu: [
        { link: "/button", text: "按钮" },
        { link: "/icon", text: "图标" },
        { link: "/layout", text: "布局" },
        { link: "/three", text: "魔方" }
      ]
    };
  }
};
</script>

<style scoped>
span{
  margin: 20px;
  cursor: pointer;
}
</style>
