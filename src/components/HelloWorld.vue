<template>
  <div id="hello">
    <button @click="isShown = !isShown">Turn on</button>  
    <transition>
    <p v-show="isShown">Hello, World!!</p> 
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: function() {
    return {
      isShown: false
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

.v-enter-active, .v-leave-active {
  transition: opacity 500ms ease-out;
}

.v-enter {
  opacity: 0;
}

.v-enter-to {
  opacity: 1;
}

.v-leave {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
}
</style>
