<template>
  <div>
      <h1>Welcome to Vue.js!</h1>
      <ul>
          <WelcomeItem v-for="item in items" :key="item.id" :item="item" />
      </ul>
  </div>
</template>

<script>
import WelcomeItem from './WelcomeItem.vue';

export default {
  components: { WelcomeItem },
  data() {
      return {
          items: [
              { id: 1, name: 'Item 1' },
              { id: 2, name: 'Item 2' },
              { id: 3, name: 'Item 3' }
          ]
      }
  }
};
</script>
