<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :fill="fill"
       :class="'add-icon '+cssAnchor"
       height="24" viewBox="0 -960 960 960" width="24">
    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
  </svg>
</template>

<script setup lang="ts">
  import {defineProps, withDefaults} from "vue";
  import {IconProps} from "@/types/IconProps";

  withDefaults(defineProps<IconProps>(), {
    fill: '',
    cssAnchor: ''
  })
</script>

<script lang="ts">
export default {
  name: "AddIcon"
}
</script>