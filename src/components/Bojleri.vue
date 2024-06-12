<template>
  <div class="title">
    <h2 class="title-first">Bojleri</h2>
    <p class="title-desc">
      Majstori pružaju vodoinstalaterske usluge za odčepljivanje, popravak, instalaciju, zamjenu i još mnogo toga!
      Pronađite pomoć danas.
    </p>
  </div>
  <div class="posao">
    <h3 class="subheading">Trebaš majstora?</h3>
    <button class="button">Naruči uslugu</button>
    <p class="paragraph">
      Bojleri su uređaji namijenjeni zagrijavanju vode za razne svrhe unutar stambenih ili industrijskih objekata.
      Glavna funkcija bojlera je osigurati toplu vodu za sanitarnu upotrebu, grijanje prostora ili druge specifične
      potrebe.
    </p>
    <img class="adapt" src="../../img/Bojler.jpg">
    <p class="paragraph">
      Na temelju izvora energije i svrhe, bojleri se mogu kategorizirati na razne načine:<br><br>

      Električni bojleri koriste električnu energiju za grijanje vode. Jednostavni su za instalaciju i često se koriste
      za manje prostorije poput kupaonica ili kuhinja.<br><br>

      Plinski bojleri koriste plin (prirodni ili ukapljeni) kao izvor topline. Odlikuju se brzim zagrijavanjem vode i
      većim kapacitetom.<br><br>

      Solarni bojleri koriste sunčevu energiju za grijanje vode, čineći ih ekološki prihvatljivijim rješenjem.<br><br>

      Bojleri na drva ili pelete koriste obnovljive izvore energije, što ih čini pogodnima za objekte bez pristupa
      plinskoj ili električnoj mreži.<br><br>

      Usluge vezane uz bojlere obuhvaćaju:<br><br>

      Instalacija bojlera: Postupak postavljanja novog bojlera u prostoru.<br><br>

      Servisiranje bojlera: Redovno održavanje i popravci kako bi se osigurao ispravan rad bojlera. To može uključivati
      kemijsko čišćenje bojlera ili redovni servis.<br><br>

      Zamjena bojlera: Postupak uklanjanja starog bojlera i postavljanja novog.<br><br>

      Montaža bojlera: Ugradnja bojlera na određeno mjesto, bilo da je riječ o solarnom, plinskom ili električnom
      bojleru.Bez obzira na vrstu bojlera, važno je osigurati pravilnu instalaciju i redovito održavanje kako bi se
      osigurao optimalan rad i dugovječnost uređaja.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Bojleri'
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
