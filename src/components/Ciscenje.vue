<template>
  <div class="title">
    <h2 class="title-first">Čišćenje</h2>
    <p class="title-desc">
      Bez obzira na vaše potrebe, stručnjaci za čišćenje nude sveobuhvatne i visokokvalitetne usluge koje će vaše
      prostore učiniti čistima i privlačnima. Dogovorite termin čišćenja već danas!
    </p>
  </div>
  <div class="posao">
    <h3 class="subheading">Trebaš majstora?</h3>
    <button class="button">Naruči uslugu</button>
    <p class="paragraph">
      Uzdržavanje čistih prostora ključno je za udobnost, zdravlje i dobar prvi dojam. Bilo da vam je potrebno
      standardno čišćenje doma ili specijalizirane usluge za poslovne prostore, stručnjaci za čišćenje pružaju široku
      paletu usluga prilagođenih vašim potrebama.
    </p>
    <img class="adapt" src="../../img/ciscenje.jpg">
    <p class="paragraph">
      <b>Domaćinstvo:</b> Od dubinskog čišćenja tepiha, pranja zavjesa i čišćenja kuhinje, do dezinfekcije i čišćenja nakon
      selidbe, osigurajte da vaš dom uvijek blista.<br><br>

      <b>Poslovni Prostori:</b> Redovno čišćenje ureda, konferencijskih dvorana, izložbenih prostora i drugih poslovnih
      objekata ključno je za održavanje profesionalnog izgleda.<br><br>

     <b> Specijalizirane Usluge:</b> Usluge čišćenja prozora na visinama, čišćenje građevinskih projekata ili medicinskih
      ustanova zahtijevaju posebnu pažnju i opremu.<br><br>

      <b>Javni i Komercijalni Prostori:</b> Održavanje čistih restorana, trgovačkih centara, sportskih objekata i školskih
      prostora esencijalno je za sigurnost i zadovoljstvo korisnika.<br><br>

      <b>Vanjski Radovi:</b> Bilo da se radi o pranju fasade, terasa ili građevinskih strojeva, vanjski prostori zahtijevaju
      redovno održavanje kako bi ostali u dobrom stanju.<br><br>

      <b>Zdravlje i Sigurnost:</b> Uz osnovne usluge čišćenja, dezinfekcija i deratizacija ključne su za održavanje zdravog
      okruženja.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Ciscenje'
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
