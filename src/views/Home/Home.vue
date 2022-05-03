<template>
    <div class="home-root">
        <Left/>
        <Right class="right"/>
    </div>
</template>

<script>
import Left from './Left.vue'
import Right from './Right.vue'
export default {
    components:{
        Left,
        Right,
    }
}
</script>

<style lang="less" scoped>
    .home-root{
        display: flex;
        align-items: center;
        .right{
            width: 600px;
            height: 400px;
            border: 1px solid #000;
            display: flex;
            flex-direction: column;
            justify-content: center;

        }
    }
</style>