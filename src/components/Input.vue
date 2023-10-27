<template>
  <input v-model="this.value"/>
</template>

<script>
  export default {
    name: 'InputComponent',
    data () {
      return {
        value: ""
      }
    }
  }
</script>