<template>
  <div class="me-input">
    <input
      :class="[{
      'me-disabled':disabled,
    }]"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :value="value"
      @input="(e)=>{$emit('input',e.target.value)}"
      class="me-input__inner"
    />
  </div>
</template>

<script>
export default {
  name: "MeInput",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPwd: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang='scss'>
.me-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .me-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #4093ff;
    }
    &.me-disabled {
      cursor: not-allowed;
      background-color: #f5f7fa;
      border-color: #e4e7ed;
    }
  }
}
</style>