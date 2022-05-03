<template>
  <div class="header-root">
    <h1>Header</h1>
    <el-input placeholder="请输入内容" v-model="input" class="header-input">
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
  data(){
      return {
          input: ''
      }
  }
};
</script>

<style lang="less" scoped>
.header-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .header-input {
    width: 400px;
  }
}
</style>
