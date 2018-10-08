<template>
  <div>
    <button><slot>OK</slot></button>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  data: function () {
    return {
      textLabel: 'child'
    }
  }
}
</script>
