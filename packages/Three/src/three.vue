<template>
  <div class="me-three">
    <div class="me-three-front">
      <slot name="front"></slot>
    </div>
    <div class="me-three-back">
      <slot name="back"></slot>
    </div>
    <div class="me-three-top">
      <slot name="top"></slot>
    </div>
    <div class="me-three-bottom">
      <slot name="bottom"></slot>
    </div>
    <div class="me-three-left">
      <slot name="left"></slot>
    </div>
    <div class="me-three-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeThree",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
.me-three {
  $width: 120px;
  $height: 160px;
  $deep: 200px;
  display: inline-block;
  transform-style: preserve-3d;
  transform:perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  transform-origin: $width/2 $height/2 0px;
  perspective-origin: 60px 80px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 60px;
    color: #fff;
  }
  & > .me-three-top {
    background: rgba(210, 210, 0, 0.7);
    width: $width;
    height: $deep;
    transform: rotateX(90deg) translateZ($deep/2);
  }
  & > .me-three-bottom {
    background: rgba(210, 0, 210, 0.7);
    width: $width;
    height: $deep;
    transform: rotateX(-90deg) translateZ($height - $deep/2);
  }
  & > .me-three-left {
    background: rgba(0, 0, 210, 0.7);
    width: $deep;
    height: $height;
    transform: rotateY(-90deg) translateZ($deep/2);
  }
  & > .me-three-right {
    background: rgba(210, 0, 0, 0.7);
    width: $deep;
    height: $height;
    transform: rotateY(90deg) translateZ($width - $deep/2);
  }
  & > .me-three-front {
    background: rgba(90, 90, 90, 0.7);
    width: $width;
    height: $height;
    transform: translateZ($deep/2);
  }
  & > .me-three-back {
    background: rgba(0, 210, 0, 0.7);
    width: $width;
    height: $height;
    transform: rotateY(-180deg) translateZ($deep/2);
  }
}
</style>