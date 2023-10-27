<template>
  <div class="hello-world">
    <button @click="this.decrease">decrease</button>
    {{counter}}
    <button @click="this.increase">increase</button>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increase () {
      this.counter++;
    },
    decrease () {
      this.counter--
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
