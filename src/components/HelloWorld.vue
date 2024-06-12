<template>
  <div class="hello-world">
      <h2 class="hello-world__title">Find a majstor!</h2>
      <p class="hello-world__description">Vaše prvo mjesto za pronalazak majstora.</p>
      <h3 class="odaberi">Odaberi majstora kojeg tražiš</h3>
  </div>

  <div class="poslovi">
    
    <div class="button-group">
      <button class="button" @click="$router.push('/adaptacije')">Adaptacije</button>
      <button class="button" @click="$router.push('/arhitektura')">Arhitektura</button>
      <button class="button" @click="$router.push('/bazeni')">Bazeni</button>
      <button class="button" @click="$router.push('/bojleri')">Bojleri</button>
      <button class="button" @click="$router.push('/ciscenje')">Čišćenje</button>
      <button class="button" @click="$router.push('/elektroinstalacije')">Elektroinstalacije</button>
      </div>
  </div>
  <button class="seemore" @click="$router.push('/poslovi')">Vidi više</button>
  <router-view />
</template>

<script>
export default {
  name: 'HelloWorld'
};


</script>

<style scoped>
.hello-world {
  display: flex;
  flex-direction: column; /* ovo je zas mi je pre velik razmak dolje */
  align-items: center;
  padding: 20px;
  margin-bottom: 50px; /*a ovo to popravlja*/
}

.hello-world__title {
  font-size: 90px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hello-world__description {
  font-size: 25px;
  color: #666;
  margin-bottom: 60px;
}

.odaberi{
  font-size: 32px;
  margin-bottom: 10px;
}

.poslovi {
  display: flex;
  align-items: column;
  padding: 10px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.button {
  font-size: 24px;
  font-weight: bold;
  border: 3px solid #cbb3ff;
  border-radius: 30px;
  background-color: #eae0ff;
  padding: 40px 40px;
  cursor: pointer;
  margin-right: 10px; /* Add margin-right to create gap between buttons */
  flex-grow: 1;
}

@media (max-width: 1200px) {
  .button {
    font-size: 20px;
    padding: 30px 30px;
  }
}

@media (max-width: 992px) {
  .button {
    font-size: 16px;
    padding: 20px 20px;
  }
}

@media (max-width: 768px) {
  .button-group {
    flex-direction: column; /* Change to column layout on small screens */
  }

  .button {
    font-size: 32px;
    margin-right: 0; /* Remove margin-right on small screens */
    margin-bottom: 10px; /* Add margin-bottom for vertical spacing */
    padding: 30px 30px;
  }
}

.button:last-child {
  margin-right: 0; /* Remove margin-right for the last button */
}

.button:hover {
  background-color: #cbb3ff;
}

.seemore {
  font-size: 18px;
  font-weight: bold;
  border: 3px solid #cbb3ff;
  border-radius: 30px;
  background-color: #eae0ff;
  padding: 10px 20px;
  cursor: pointer;
}

.seemore:hover{
  background-color: #cbb3ff;
}


</style>