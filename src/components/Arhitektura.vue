<template>
  <div class="title">
    <h2 class="title-first">Arhitektura</h2>
    <p class="title-desc">
      Arhitekti pružaju usluge dizajna i planiranja za unapređenje, modernizaciju, uređenje i preuređenje vašeg prostora. Pronađite iskusne stručnjake za vaš sljedeći arhitektonski projekt danas!
    </p>
  </div>
  <div class="posao">
    <h3 class="subheading">Trebaš majstora?</h3>
    <a href="Kontakt.vue">
  <button>Naruči uslugu</button>
</a>
    <p class="paragraph">
      Projektiranje arhitektonskih prostora predstavlja proces preuređenja, poboljšanja ili modernizacije određenog dijela ili cijelog stambenog ili poslovnog objekta. Bilo da je riječ o arhitektonskom dizajnu kuhinje, kupaonice, potkrovlja, tavana ili vanjskog prostora, ovaj postupak obuhvata niz aktivnosti kojima se unapređuje funkcionalnost i estetika prostora.
    </p>
    <img class="adapt" src="../../img/slika.jpg">
  </div>
  <p class="paragraph">
    <b>Projektiranje stambenih i poslovnih objekata</b>: Izrada detaljnih planova i nacrta za izgradnju i preuređenje stambenih i poslovnih objekata, uzimajući u obzir funkcionalnost, estetiku i ekološke standarde.<br><br>

<b>Urbanističko planiranje</b>: Razvijanje urbanističkih rješenja za organizaciju prostora unutar gradova i naselja, uključujući prometnu infrastrukturu, javne prostore i zelene površine.<br><br>

<b>Interijer dizajn</b>: Kreiranje unutarnjih prostora koji su estetski privlačni, funkcionalni i prilagođeni potrebama korisnika, koristeći najnovije trendove i materijale.<br><br>

<b>Restauracija i konzervacija</b>: Obnova i očuvanje povijesnih zgrada i spomenika, uz poštivanje izvorne arhitekture i kulturne baštine.<br><br>

<b>Održiva arhitektura</b>: Implementacija ekološki prihvatljivih rješenja i održivih praksi u projektiranju i izgradnji, s ciljem smanjenja utjecaja na okoliš.<br><br>
  </p>
</template>

<script>
export default {
  name: 'Arhitektura',
  methods:{
    goToPage(){
      this.$router.push('src\components\Kontakt.vue');
    }
  }
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

.button a {
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
