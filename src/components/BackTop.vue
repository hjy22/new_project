<template>
    <div class="goTop" v-show="goTopShow" @click="backTop">
      <v-icon size="36px" class="goTopIcon">
        mdi-arrow-up-bold-circle</v-icon>
    </div>
</template>

<script>
export default {
   name: "BackTop",
   data(){
     return{
      goTopShow: false,
     }
   },
    mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},
 
 
methods: {
  // 点击图片回到顶部方法，加计时器是为了过渡顺滑
  backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
 
  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
  scrollToTop () {
    const that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop > 60) {
      that.goTopShow = true
    } else {
      that.goTopShow = false
    }
  }
}
}
</script>

<style scoped>
  .goTop{
    position: fixed;
    right: 50px;
    bottom: 100px;
    width: 50px;
    height: 50px;
    z-index: 999999;
    /* background:rgba(0, 0, 0, 0.65); */
  }
  .goTop:hover{
    cursor:pointer
  }
  .goTopIcon{
    display: block;
    width: 50px;
    height: 50px;
    /* background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABaUlEQVRYR+2W7U3DQBBE31QAJaQDUkJSAXQA6QAqACqADggVBCoAKoAOCBWEDgatZEcHyeX8AYqQvD/P59t3s7tjiz2H9pyfAWBQ4H8rYPtQ0mefSeqlgO0HYCVp1hWiM4DtOXACHADzrhCdAGxfAZdAffM74ELSbVslWgPYPgMi4UxSqMC2taYgrQCSRNeSQoV1VCU5BaaSnn8dwPYYeAIeJYUKG1FBHFcQb00gGimQJH+RFI2XDdtx+6OmEEWAmHXgHfgAJqW5r/YHhCuInT6xE6A6LGSPfcXktSzVe1GCVQmiBBCHjICxpGWTmiYQ0TOhxKukae7dLEBiNHHzRg31M0nVOwGxyBnVVoCuI5WZjGjaRc4tNwBsnwM3qdG0kT4DsWFe9b5vAH0crQSZu9gawHYt1X3OaEpJSs+3lTYFiGZZ/lXyZDri+zGSNIm1FKD3z0VJgdQnakMrOmHTQ7vuGwAGBQYFvgCufKAhUkYyWwAAAABJRU5ErkJggg=="); */
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>