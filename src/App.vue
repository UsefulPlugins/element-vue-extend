<script setup lang="ts">
import StatusTag from "@/components/tag/StatusTag.vue"
import CountTo from "@/components/CountTo/CountTo.vue"
import PreviewImage from "@/components/image/PreviewImage.vue"
</script>

<template>
  <StatusTag :status="1" defaultTag="Status = 1" />
  <StatusTag :status="-1" disableTag="Status = -1" />
  <br /><br />
  <CountTo :startVal="0" :endVal="100" />
  <br /><br />
  <PreviewImage :width="100" :height="100" src="https://element-plus.gitee.io/images/element-plus-logo.svg"
    :preview-src-list="['https://element-plus.gitee.io/images/element-plus-logo.svg']" />
</template>

<style scoped>
</style>
