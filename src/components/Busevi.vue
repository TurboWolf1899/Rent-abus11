<template>
  <div class="title">
    <h2 class="title-first">Bazeni</h2>
    <p class="title-desc">
      Bez obzira na veličinu ili namjenu vašeg projekta, kvalitetno izvedeni bazeni donose stabilnost, estetiku i
      neusporedivu funkcionalnost svakom vanjskom prostoru, pretvarajući ga u središte obiteljskog okupljanja i osobnog
      užitka.
    </p>
  </div>
  <div class="posao">
    <h3 class="subheading">Trebaš majstora?</h3>
    <button class="button">Naruči uslugu</button>
    <p class="paragraph">
      Bazeni predstavljaju više od mjesta za osvježenje tijekom vrućih ljetnih dana; oni su centar okupljanja,
      relaksacije i zabave za obitelj i prijatelje. Pravilnim planiranjem, dizajnom i održavanjem, bazen može postati
      ključni element vašeg doma, pružajući ne samo užitak već i povećavajući vrijednost nekretnine.
    </p>
    <img class="adapt" src="../../img/bazen.jpg">
    <p class="paragraph">
      <b>Dizajn i izgradnja</b>: Izbor pravog dizajna bazena ključan je za usklađivanje s ukupnim estetskim izgledom vašeg doma
      i dvorišta. Bilo da se odlučite za klasične pravokutne bazene, bazene nepravilnih oblika ili moderne beskonačne
      bazene, važno je uzeti u obzir veličinu prostora, pristupačnost i vaše osobne potrebe.<br><br>

      <b>Materijali i tehnologije</b>: Napredak u materijalima i tehnologijama omogućuje izgradnju bazena visoke kvalitete koji
      zahtijevaju manje održavanja. Od fiberglasa do betonskih bazena s keramičkim pločicama, izbor materijala utječe na
      dugovječnost, izgled i osjećaj vašeg bazena.<br><br>

      <b>Oprema za bazene</b>: Pravilna oprema, poput filtera, pumpi i sustava za grijanje, ključna je za održavanje čistoće
      vode i optimalne temperature. Također, dodaci poput podvodne rasvjete, protustrujnih uređaja za plivanje i
      hidromasažnih sistema mogu obogatiti iskustvo korištenja bazena.<br><br>

      <b>Sigurnost</b>: Sigurnost je primarna pri planiranju i izgradnji bazena. Ograde oko bazena, pokrivači za bazen i alarmi
      za detekciju pada u vodu neki su od načina za osiguravanje sigurnog okruženja za djecu i kućne ljubimce.<br><br>

      <b>Održavanje</b>: Redovito održavanje bazena, uključujući čišćenje, filtriranje i kemijsku ravnotežu vode, osigurava da
      je bazen uvijek spreman za korištenje, sprječavajući razvoj algi i bakterija.<br><br>

      <b>Pejzažno uređenje</b>: Integracija bazena s pejzažnim dizajnom dvorišta može stvoriti savršeno mjesto za opuštanje.
      Biljke, staze, kamene obloge i vanjski namještaj pridonose stvaranju ugodne atmosfere.<br><br><br><br>


      U zaključku, bazen je investicija koja pruža dugoročne koristi za zdravlje, dobrobit i društveni život. Bilo da
      želite prostor za vježbanje, relaksaciju ili zabavu, bazen može biti savršeno rješenje koje će obogatiti vaš
      životni prostor i stvoriti nezaboravne trenutke za vašu obitelj i prijatelje.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Bazeni'
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
