<template>
  <div class="me-switch" :class="{
    'me-checked':value
  }" @click="handleClick">
    <input class="me-switch__input" type="checkbox" ref="input" :name="name" />
    <span class="me-switch__core" :class="[
    'me-switch-type--'+type
    ]" ref="core">
      <span class="me-switch__button"></span>
    </span>
  </div>
</template>

<script>
import themeMap from "../../Theme/color";
export default {
  name: "MeSwitch",
  components: {},
  props: {
    type: {
      type: String,
      default: "default"
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.setColor();
    this.setCheck();
  },
  watch: {
    value() {
      this.setColor();
      this.setCheck();
    }
  },
  computed: {
    _activeColor() {
      if (this.activeColor == "") {
        return themeMap.ordinary;
      }
      let res = themeMap[this.activeColor];
      return res ? res : this.activeColor;
    },
    _inactiveColor() {
      if (this.inactiveColor == "") {
        return themeMap.plain;
      }
      let res = themeMap[this.inactiveColor];
      return res ? res : this.inactiveColor;
    }
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
    },
    setCheck() {
      //同步input
      this.$refs.input.checked = this.value;
    },
    setColor() {
      //修改颜色
      let color = this.value ? this._activeColor : this._inactiveColor;
      this.$refs.core.style.borderColor = color;
      this.$refs.core.style.backgroundColor = color;
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
    // height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    // background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .me-switch__button {
      position: absolute;
      // top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .me-switch-type--default {
    height: 20px;
    .me-switch__button {
      top: 1px;
    }
  }
  .me-switch-type--line {
    height: 4px;
    width: 30px;
    margin: 0 5px;
    .me-switch__button {
      left: -6px;
      top: -7px;
      border: 1px solid rgb(230, 230, 230);
      background: linear-gradient(145deg, #c7c7c7, #ffffff);
      box-shadow: 1px 1px 0px #a5a5a5, -1px 1px 0px #b5b5b5;
    }
  }
}
.me-switch.me-checked {
  .me-switch__core {
    // border-color: #409eff;
    // background-color: #409eff;
    .me-switch__button {
      transform: translateX(20px);
    }
  }
  .me-switch-type--line {
    .me-switch__button {
      transform: translateX(24px);
    }
  }
}
</style>