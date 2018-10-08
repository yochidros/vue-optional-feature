<template>
  <div id="app">
    <img v-fallback-image alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PullDownMenu></PullDownMenu>
    <MyPage></MyPage>
    <MyButton>{{ textLabel }}</MyButton>
    <div>
      <h1>TODO List</h1>
      <ToDoList :todos="todos">
      <li slot-scope="{ todo }" v-if="!todo.isCompleted">{{ todo.text }}</li> 
      </ToDoList>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PullDownMenu from './components/PullDownMenu.vue'
import MyPage from './components/MyPage.vue'
import MyButton from './components/MyButton.vue'
import ToDoList from './components/TodoList.vue'

export default {
  name: 'app',
  data: function() {
    return {
      textLabel: 'parent',
      todos: [
        { id: 1, text: 'c++', isCompleted: true },
        { id: 2, text: 'java', isCompleted: false },
        { id: 3, text: 'Rust', isCompleted: true },
        { id: 4, text: 'Perl', isCompleted: false },
      ]
    }
  },
  components: {
    HelloWorld,
    PullDownMenu,
    MyPage,
    MyButton,
    ToDoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
