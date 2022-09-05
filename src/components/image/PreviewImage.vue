<script setup lang="ts">
import { useAttrs } from "vue";
import errorImg from "@/assets/images/error.svg";
import { number, string } from "vue-types";
const attr: any = useAttrs();

defineProps({
  errorImg: string().def(errorImg),
  width: number().def(36),
  height: number().def(36),
});
</script>

<template>
  <el-image :style="`width: ${width}px; height: ${height}px`" fit="scale-down" preview-teleported v-bind="attr">
    <template #error>
      <img :src="errorImg" alt="" :style="attr.style" />
    </template>
  </el-image>
</template>    