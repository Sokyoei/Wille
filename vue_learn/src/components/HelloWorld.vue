<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Child component</h2>
    <slot>fallback content</slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  emits: ['response'],
  created() {
    this.$emit('response', 'childMsg: HELLO FROM CHILD')
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
