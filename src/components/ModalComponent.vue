
<template>
  <div id="modal">
    <Modal>
     <p>
       <b>重要なお知らせ</b> 
     </p> 
     <p>
       <a href="https://pixeljp.withgoogle.com">Pixel3 !?</a>
     </p> 
    </Modal> 
    <my-slot>Submit</my-slot>
    <my-slot></my-slot>
  </div>
</template>

<script>
import MySlot from './MySlot.vue'

export default {
  name: 'ModalComponent',
  components: {
    MySlot: MySlot
  }
}
</script>

