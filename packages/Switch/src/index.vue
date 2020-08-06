<template>
  <div class="me-switch" :class="{
    'me-checked':value
  }" @click="handleClick">
    <input class="me-switch__input" type="checkbox" ref="input" :name="name" />
    <span class="me-switch__core" ref="core">
      <span class="me-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "MeSwitch",
  components: {},
  props: {
    name: {
      type: String,
      defualt: ""
    },
    value: {
      type: Boolean,
      defualt: false
    },
    activeColor: {
      type: String,
      defualt: ""
    },
    inactiveColor: {
      type: String,
      defualt: ""
    }
  },
  mounted() {
    this.setColor();
    this.setCheck();
  },
  computed: {},
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      //等待value值更新
      await this.$nextTick();
      this.setColor();
      this.setCheck();
    },
    setCheck() {
      //同步input
      this.$refs.input.checked = this.value;
    },
    setColor() {
      //修改颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  }
};
</script>

<style lang="scss">
.me-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .me-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .me-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .me-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.me-switch.me-checked {
  .me-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .me-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>