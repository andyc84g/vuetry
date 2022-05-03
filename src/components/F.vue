<template>
  <div>
    <br />
    <div style="margin-top: 15px">
      <el-input placeholder="请输入内容" v-model="text" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <br />
      <el-button slot="append" icon="el-icon-message-solid" @click="onClick"></el-button>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
    <br />
    <br />
   @@@ {{dataList}}
    <h2>swiper</h2>
    <Swiper :dataList="dataList" />

    <br>
    <C :list="list">
      
      <template slot-scope="name" >
        <span style="{color:'red'}"> {{ name }} </span>
      </template>
     <!--  <template slot-scope="age">
        <span :style="{color: age.item.isGood ? 'green' : 'red'}"> {{ age }} </span>
      </template> -->
    </C>
  </div>
</template>

<script>
import _ from "lodash";
import requests from "@/api/request";
import { Input, Card, Button } from "element-ui";
import C from "./C.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Swiper from "@/components/Swiper.vue";
export default {
  data() {
    return {
      text: "",
      dataList: undefined,
      list: [
        {id: 1, name: 'andy', isGood:true},
        {id: 2, name: 'bob', isGood:false},
        {id: 3, name: 'tao', isGood:true},
      ]
    };
  },
  components: {
    C,
    Swiper,
    [Input.name]: Input,
    [Card.name]: Card,
    [Button.name]: Button,
  },
  mounted() {},
  computed: {
    ...mapState(["inputArr"]),
  },
  methods: {
    async onClick() {
      let res2 = await requests({
        url: "/mock/datalist",
        method: "GET",
      });
      this.dataList = res2;
    },
    // onClick: _.debounce(() => console.log('@@@@'), 1000)
  },
};
</script>
