<template>
  <div class="title">
    <h2 class="title-first">NAŠ ASORTIMAN ABUSA</h2>
    <p class="title-desc">
      Naš modernizirani i up-to-date vozni park omogućuje našim zaposlenicima i korisnicima vrhunske uvjete rada po najnovijim standardima i uvjetima. Evo nekoliko voznih jedinica i modela koji krase naš asortiman:
    </p>
  </div>
  <div>
    <div class="content-row">
      <img src="/img/ABUS1.jpg" alt="Privatno iznajmljivanje" height="325px">
      <div class="text-content">
        <h3>SETRA 515 HD</h3>
        <p>SETRA 515 HD, Reg.oznaka: ZG 6606 GP, Sjedala : 49+1+1
        </p>
      </div>
    </div>
    <hr>
    <div class="content-row">
      <img src="/img/ABUS2.jpg" alt="Poslovno iznajmljivanje" height="325px">
      <div class="text-content">
        <h3>SETRA 516HD</h3>
        <p>SETRA 516HD, Reg.oznaka: ZG 2723-IZ, Sjedala : 57+1+1
        </p>
      </div>
    </div>
    <hr>
    <div class="content-row">
      <img src="/img/ABUS3.jpg" alt="Privatno iznajmljivanje" height="325px">
      <div class="text-content">
        <h3>MERCEDES TRAVEGO</h3>
        <p>MERCEDES TRAVEGO, Reg.oznaka ZG 9449 IF: , Sjedala: 59+1+1
        </p>
      </div>
    </div>
    <hr>
    <div class="content-row">
      <img src="/img/ABUS4.jpg" alt="Poslovno iznajmljivanje" height="325px">
      <div class="text-content">
        <h3>SETRA 515HD</h3>
        <p>SETRA 515HD, Reg.oznaka: ZG 8444-GR, Sjedala : 49+1+1
        </p>
      </div>
    </div>
    <hr>
    <div class="content-row">
      <img src="/img/ABUS5.jpg" alt="Privatno iznajmljivanje" height="325px">
      <div class="text-content">
        <h3>SETRA 516HD</h3>
        <p>SETRA 516HD, Reg.oznaka: ZG 1112-IS, Sjedala : 83+1+1
        </p>
      </div>
    </div>
    <hr>
    <div class="content-row">
      <img src="/img/ABUS6.jpg" alt="Poslovno iznajmljivanje" height="325px">
      <div class="text-content">
        <h3>SETRA 516HD</h3>
        <p>SETRA 516HD, Reg.oznaka: ZG 1393-IS, Sjedala : 53+2+1
        </p>
      </div>
    </div>
    <hr>
    <div class="content-row">
      <img src="/img/miniABUS.jpeg" alt="Poslovno iznajmljivanje" height="325px">
      <div class="text-content">
        <h3>Peugeot Traveller</h3>
        <p>Peugeot Traveller, Reg.oznaka: ZG 9005-IT, Sjedala : 8+1
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Busevi'
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

.content-row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.content-row img {
  margin-right: 20px;
}

.text-content {
  flex: 1;
}

hr {
  margin: 40px 0;
  border: 1px solid #ccc;
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

}
</style>
