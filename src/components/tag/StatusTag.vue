<script setup lang="ts">
import { Status } from "./enum";
import { number, string } from "vue-types";

let props = defineProps({
  status: number().def(0).isRequired,
  defaultNum: number().def(Status.Default),
  disableNum: number().def(Status.Disable),
  defaultTag: string().def(""),
  disableTag: string().def("")
});
</script>

<template>
  <el-tag :type="
    status === defaultNum
      ? 'success'
      : status === disableNum
        ? 'danger'
        : 'info'
  ">{{
status == defaultNum
  ? defaultTag
  : status === disableNum
    ? disableTag
    : "--"
}}</el-tag>
</template>