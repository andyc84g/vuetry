<template>
  <div>
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" @click="getSearchInfo"></el-button>
    </el-input>
  </div>
</template>

<script>
import { Button, Input } from "element-ui";

export default {
   data() {
     return {
       input3: ''
     }
   },
    components: {
        [Button.name]: Button,
        [Input.name]: Input
    },
    methods:{
        getSearchInfo(){
            console.log(this.$store)
        }
    }
};
</script>

<style lang="less" scoped>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
