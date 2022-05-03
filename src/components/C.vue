<template>
  <div>
      <ul>
          <li v-for="(item) in list" :key="item.id">
            <slot :iName="item"></slot>
            <!-- <slot :age="item.age" ></slot> -->
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childData: "childData",
    };
  },
  props:['list']
};
</script>
