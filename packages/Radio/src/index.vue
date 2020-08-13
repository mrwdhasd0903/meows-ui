<template>
  <label class="me-radio" :class="{'me-checked':label===value}">
    <span class="me-radio__input">
      <span class="me-radio__inner" :class="[shape?'me-radio-shape--'+shape:'']"></span>
      <input type="radio" class="me-radio__original" :name="name" :value="label" v-model="model" />
    </span>
    <span class="me-radio__label">
      <slot>{{label}}</slot>
      <!-- <template v-if="!$slots.default"></template> -->
    </span>
  </label>
</template>

<script>
export default {
  name: "MeRadio",
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        //触发父组件input事件
        this.$emit("input", value);
      }
    }
  },
  props: {
    shape: {
      type: String
    },
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
.me-radio {
  &.me-checked {
    .me-radio__input {
      .me-radio__inner {
        border-color: #409eff;
        background: #409eff;
        &:after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }

    .me-radio__label {
      color: #409eff;
    }
  }
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  .me-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .me-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.2s ease-in;
      }
    }
    .me-radio-shape--square {
      border-radius: 2px;
      &:after {
        border-radius: 0px;
      }
    }
    .me-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .me-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>