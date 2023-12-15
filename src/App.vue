<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted } from "vue";

const route = useRoute();
/**
 *  全局初始化函数
 */
const doInit = () => {
  /**
   * openapi --input http://localhost:8121/api/v2/api-docs --output ./generated --client axios
   */
  console.log("Hi");
};

onMounted(() => {
  doInit();
});
</script>
