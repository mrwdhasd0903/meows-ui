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
    <router-view></router-view>
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
        { link: "/three", text: "魔方" },
        { link: "/dialog", text: "对话框" },
        { link: "/input", text: "输入框" },
        { link: "/switch", text: "开关" },
        { link: "/radio", text: "单选框" },
        { link: "/checkbox", text: "复选框" },
      ]
    };
  }
};
</script>

<style scoped>
span {
  margin: 20px;
  cursor: pointer;
}
</style>
