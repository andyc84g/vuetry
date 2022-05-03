<template>
  <div id="app">
    <Header />
    <el-divider></el-divider>
    <!-- <router-link to="/search">search</router-link> -->

    <el-divider></el-divider>
    <Footer />
    <F />
    ??
    <el-divider></el-divider>
    <UserList />
    <router-link to="/">home</router-link>
    <router-view></router-view>

    <el-divider></el-divider>

    <button @click="onClick">to register</button>
    <select name="s1" id="" v-model="inputVal">
      <option :value="1">forward</option>
      <option :value="-1">backward</option>
    </select>
    <br />
    <br />
    <button @click="go">go 1</button>

    <router-link
      :to="{
        name: 'Search',
        query: {
          name: 'andy',
          age: 18,
        },
      }"
      >Search</router-link
    >

    <el-divider></el-divider>
    <transition name="animate__backOutDown">
      <Round  v-show="isShow" class="animate__animated"/>
    </transition>
    <br>
    <button @click="isShow = !isShow">show</button>
    <!-- <Round class="animate__animated animate__backOutUp"  /> -->
  </div>
</template>

<script>
import requests from "./api/request";
import F from "./components/F.vue";
import Header from "./components/Header";
import { Divider } from "element-ui";
import Footer from "./components/Footer";
import UserList from "./components/UserList.vue";
import Round from "./components/Round.vue";
import 'animate.css';
export default {
  components: {
    F,
    Header,
    [Divider.name]: Divider,
    Footer,
    UserList,
    Round,
  },
  data() {
    return {
      appData: "appData",
      github: {},
      inputVal: 0,
      isShow: true
    };
  },
  mounted() {
    const env = process.env.NODE_ENV;
    console.log("@@@@@@@@@@@@@@@@@@", env);
    /*  requests({
      url: '/bob',
      method: 'GET'
    }) */
  },
  methods: {
    onClick() {
      this.$router.push({
        name: "Register",
        query: {
          plan: "query",
        },
        params: {
          pk1: "pk1 val",
          pk2: "pk2 val",
        },
      });
    },
    go() {
      this.$router.go(this.inputVal * 1);
    },
  },
};
</script>

<style lang="less">
// .fade-enter{
//   opacity: 0;
// }
// .fade-enter-to{
//   opacity: 1;
// }
// .fade-leave{
//   opacity: 1;
// }
// .fade-leave-to{
//   opacity: 0;
// }
// .fade-enter-active, .fade-leave-active {
//   transition: opacity 1s;
// }
.animate__backOutDown-enter-active{
  animation: backOutDown 1s reverse;
}
.animate__backOutDown-leave-active{
  animation: backOutDown 1s ;
}
// @keyframes animate{
//   0%{
//     opacity: 0;
//   }
//   100%{
//     opacity: 1;
//   }
// }

// .fade-enter-active{
//   animation: animate 1s;
// }
// .fade-leave-active{
//   animation: animate 1s reverse;
// }
</style>
