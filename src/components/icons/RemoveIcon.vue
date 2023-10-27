<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       height="24" viewBox="0 -960 960 960" width="24"
       :fill="fill"
       :class="'add-icon '+cssAnchor"
  >
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
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
    name: 'RemoveIcon'
  }
</script>