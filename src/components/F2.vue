<template>
  <div>
    <el-input placeholder="请输入内容" v-model="input3"  >      
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
import { Input, Button } from "element-ui";
export default {
  components: {
    [Input.name]: Input,
    [Button.name]: Button,
  },
};
</script>

<style lang="less" scoped>
</style>
