<template>
  <div class="title">
    <h2 class="title-first">USLUGE</h2>
    <p class="title-desc">
      Pelikan Transport nudi širok spektar transportnih usluga dizajniranih da zadovolje različite potrebe naših klijenata.
    </p>
  </div>
  <div id="app">
    <div class="rectangle">
      <div class="content">
        <h5>Privatno iznajmljivanje</h5>
        <p>Za osobne događaje poput vjenčanja ili izleta, nudimo udobne autobuse koji pružaju privatnost i udobnost vašim gostima. Uživajte u sigurnom i pouzdanom prijevozu za vaš poseban dan.</p>
      </div>
    </div>
    <div class="rectangle">
      <div class="content">
        <h5>Poslovno iznajmljivanje</h5>
        <p>Pružamo pouzdan prijevoz za vaše poslovne sastanke, konferencije i timsko povezivanje s profesionalnim vozačima. Naši moderni autobusi osiguravaju udobnost i produktivnost tijekom putovanja.</p>
      </div>
    </div>
    <div class="rectangle">
      <div class="content">
        <h5>Turističko iznajmljivanje</h5>
        <p>Istražite destinacije s našim turističkim autobusima, uživajte u udobnosti i stručnim vodičima za nezaboravna putovanja. Otkrijte skrivene bisere i kulturnu baštinu uz pouzdani prijevoz i personalizirana iskustva.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Usluge'
};
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

#app {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.rectangle {
  width: 400px;
  height: 400px;
  background-color: #00a1c2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  margin-left: 8px;
  margin-right: 8px;
}

.rectangle .content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h5 {
  margin: 0 0 20px;
  font-size: 26px;
}

p {
  margin: 0;
  font-size: 20px;
}

.title-first {
  font-size: 90px;
  font-weight: bold;
  margin-bottom: 20px;
}

.title-desc {
  font-size: 25px;
  color: #666;
  margin-bottom: 60px;
  margin-left: 300px;
  margin-right: 300px;
  flex-grow: 1;
}

@media (max-width: 1200px) {
  .title-desc {
    margin-right: 200px;
    margin-left: 200px;
  }
}

@media (max-width: 992px) {
  .title-desc {
    margin-right: 100px;
    margin-left: 100px;
  }
}

@media (max-width: 768px) {
  .title-first {
    font-size: 70px;
  }

  .title-desc {
    margin-right: 50px;
    margin-left: 50px;
  }
}
</style>
