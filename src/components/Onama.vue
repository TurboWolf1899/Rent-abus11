<template>
  <div class="title">
    <h2 class="title-first">Adaptacije</h2>
    <p class="title-desc">
      Majstori pružaju usluge adaptacije i renovacije za poboljšanje, modernizaciju, uređenje i preuređenje vašeg
      prostora. Pronađite iskusne profesionalce za vaš sljedeći projekt danas!
    </p>
  </div>
  <div class="posao">
    <h3 class="subheading">Trebaš majstora?</h3>
    <button class="button">Naruči uslugu</button>
    <p class="paragraph">
      Adaptacija ili renovacija prostora predstavlja postupak preuređenja, poboljšanja ili modernizacije određenog
      dijela ili cijelog stambenog ili poslovnog objekta. Bilo da je riječ o adaptaciji kuhinje, kupaonice, potkrovlja,
      tavana ili vanjskog prostora, ovaj postupak podrazumijeva niz radova kojima se osvježava i podiže funkcionalnost i
      estetika prostora.
    </p>
    <img class="adapt" src="../../img/adaptacija.jpg">
    <p class="paragraph">
      <b>Adaptacija stana i kuće:</b> Kompletno uređenje i preuređenje stambenih prostora kako bi se povećala njihova
      funkcionalnost i estetska vrijednost.<br><br>

      <b>Adaptacija kupaonice i kuhinje:</b> Specifične adaptacije koje se fokusiraju na poboljšanje funkcionalnosti i izgleda
      ovih ključnih prostora u domu.<br><br>

      <b>Adaptacija poslovnih prostora:</b> Uređenje kancelarija, kafića, restorana i drugih poslovnih prostora kako bi postali
      atraktivniji i funkcionalniji.<br><br>

      <b>Modernizacija interijera:</b> Implementacija suvremenih rješenja i dizajna u prostor kako bi se stvorio moderniji
      izgled.<br><br>

      <b>Renovacija vanjskog prostora:</b> Poboljšanje izgleda vanjskih površina, uključujući balkone, terase, vrtove i fasade.<br><br>

      <b>Obnova i preuređenje:</b> Radovi koji obuhvaćaju popravke, promjene zidova, zamjenu starih materijala i poboljšanje
      općeg stanja prostora.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Adaptacije'
};

</script>

<style scoped>

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.title-first{
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

.subheading {
  font-size: 36px;
  margin-bottom: 20px;
}

.button {
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #cbb3ff;
}

.button:hover {
  background-color: #a2a2ff;
}

.paragraph {
  font-size: 18px;
  color: #666;
  margin-top: 40px;
  margin-left: 300px;
  margin-right: 300px;
  flex-grow: 1;
}

.adapt{
  width: 40%;
  height: auto;
}

@media (max-width: 1200px) {
  .title-desc{
    margin-right: 200px;
    margin-left: 200px;
  }
  .paragraph{
    margin-right: 200px;
    margin-left: 200px
  }
}

@media (max-width: 992px) {
  .title-desc{
    margin-right: 100px;
    margin-left: 100px;
  }
  .paragraph{
    margin-right: 100px;
    margin-left: 100px
  }
  .adapt{
    width: 60%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .title-first{
    font-size: 70px;
  }
  .title-desc{
    margin-right: 50px;
    margin-left: 50px;
  }
  .paragraph{
    margin-right: 50px;
    margin-left: 50px
  }
  .adapt{
    width: 80%;
    height: auto;
  }
}


</style>
