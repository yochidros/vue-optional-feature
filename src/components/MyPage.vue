<template>
  <My-Page-Content>
    <div>
      <header>
        <slot name="header"></slot>
      </header> 
      <main>
        <slot></slot> 
      </main>
      <footer>
        <slot name="footer"></slot> 
      </footer>
    </div>
  </My-Page-Content>

</template>

<script>
import MypageContent from './MyPageContent.vue'

export default {
  name: 'MyPage',
  components: {
    MyPageContent: MypageContent
  }
}
</script>
