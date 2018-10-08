<template>
  <div>
    <template v-for="todo in todos">
      <slot :todo="todo">
      <li :key="todo.id">
        {{ todo.text }}
      </li>
      </slot>
    </template>
  </div>
</template>

<script>

export default {
  name: 'ToDoList',
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
}
</script>
