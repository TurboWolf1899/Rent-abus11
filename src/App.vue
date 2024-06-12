<template>
  <div>
    <Header1 />
    <main>
      <router-view />
    </main>
    <Footer1 />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Footer1 from './components/Footer.vue';
import Header1 from './components/Header.vue';

export default {
  components: { HelloWorld, Footer1, Header1 }
};
</script>