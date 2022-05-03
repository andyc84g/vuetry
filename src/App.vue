<template>
  <div id="app">
    <Header />
    <el-divider></el-divider>
    <!-- <router-link to="/search">search</router-link> -->
    <router-view></router-view>
    <el-divider></el-divider>
    <Footer/>
    <F/>
  </div>
</template>

<script>
import requests from "./api/request";
import F from "./components/F.vue";
import Header from "./components/Header";
import { Divider } from "element-ui";
import Footer from './components/Footer'

export default {
  components: {
    F,
    Header,
    [Divider.name]: Divider,
    Footer
  },
  data() {
    return {
      appData: "appData",
      github: {},
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
};
</script>

<style lang="less"></style>
