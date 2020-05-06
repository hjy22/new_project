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
  }
  .goTop:hover{
    cursor:pointer
  }
  .goTopIcon{
    display: block;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>