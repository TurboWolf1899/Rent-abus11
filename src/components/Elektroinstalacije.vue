<template>
  <div class="title">
    <h2 class="title-first">Elektroinstalacije</h2>
    <p class="title-desc">
      Bez obzira na vaše potrebe, bilo da se radi o jednostavnoj zamjeni prekidača ili složenom projektu, iskusni
      električari će osigurati kvalitetnu i profesionalnu uslugu. Uvijek se obratite stručnjaku za elektroinstalacije
      kako biste osigurali sigurnost i kvalitetu radova!
    </p>
  </div>
  <div class="posao">
    <h3 class="subheading">Trebaš majstora?</h3>
    <button class="button">Naruči uslugu</button>
    <p class="paragraph">
      Elektroinstalacije su neizostavan dio svakodnevnog života i ključne su za funkcioniranje svakog doma, ureda ili
      industrijskog objekta. Bez obzira da li vam je potrebna instalacija nove rasvjete, popravak postojećih električnih
      instalacija ili postavljanje složenih industrijskih sistema, evo kako specijalizirani električari mogu pomoći:<br><br>
      <b>Domaće i stambene instalacije:</b> Usluge obuhvaćaju sve od osnovnih električnih radova kao što su montaža i popravak
      električnih instalacija, rasvjete i ožičenja, do složenijih kao što su pametne kuće i solarni paneli.<br><br>

      <b>Poslovne i komercijalne instalacije:</b> Sveobuhvatne elektroinstalacije za poslovne prostore, uključujući ugradnju
      rasvjete, ožičenje, sigurnosne sustave i sustave za punjenje električnih vozila.<br><br>

      <b>Industrijske instalacije:</b> Specijalizirane usluge za industrijska postrojenja, uključujući energetski razvod,
      besprekidno napajanje i složene električne panele.
    </p>
    <img class="adapt" src="../../img/industrijske-elektroinstalacije-el-kast-3.jpeg">
    <p class="paragraph"> 
      <b>Specijalizirane i napredne usluge:</b> Ugradnja i održavanje solarnih sustava, pametnih prekidača, video nadzora, i
      sustava daljinskog upravljanja.<br><br>

      <b>Održavanje i popravci:</b> Uz ugradnju novih sistema, električari pružaju usluge popravka i održavanja kako bi se
      osiguralo ispravno funkcioniranje i sigurnost svih električnih instalacija.<br><br>

      <b>Sigurnost i energetska učinkovitost:</b> Od ugradnje energetski učinkovite rasvjete do postavljanja dimnih detektora i
      sustava zaštite, sigurnost i energetska efikasnost su na prvom mjestu.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Elektroinstalacije'
};

</script>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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

.adapt {
  width: 40%;
  height: auto;
}

@media (max-width: 1200px) {
  .title-desc {
    margin-right: 200px;
    margin-left: 200px;
  }

  .paragraph {
    margin-right: 200px;
    margin-left: 200px
  }
}

@media (max-width: 992px) {
  .title-desc {
    margin-right: 100px;
    margin-left: 100px;
  }

  .paragraph {
    margin-right: 100px;
    margin-left: 100px
  }

  .adapt {
    width: 60%;
    height: auto;
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

  .paragraph {
    margin-right: 50px;
    margin-left: 50px
  }

  .adapt {
    width: 80%;
    height: auto;
  }
}
</style>
