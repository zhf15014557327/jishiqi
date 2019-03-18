<template>
  <div id="app">
    <!-- <jishu></jishu> -->
   <jishu :initnum="15" :max="35" :min="0" :bushu="3" @num-change="numchange"></jishu>
  </div>
</template>

<script>
// 导入组件
// import jishu from "./components/jishu"
export default {
  name: "app",
//  components:{
//    jishu
//  },
 methods: {
   numchange(value){
     console.log(value);
     
   }
 },
};
</script>

<style lang="less">

</style>
