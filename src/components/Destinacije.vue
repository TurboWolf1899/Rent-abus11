<template>
    <div class="title">
      <h2 class="title-first">DESTINACIJE</h2>
      <p class="title-desc">
        Pelikan Transport ponosno nudi prijevoz do raznih nerazvijenih destinacija diljem svijeta.
      </p>
    </div>
    <div>
      <div class="content-row">
        <img src="/img/eritrea.jpg" alt="Privatno iznajmljivanje" height="325px">
        <div class="text-content">
          <h3>Eritrea</h3>
         <p>Asmara, Keren, Massawa, Assab</p>
        </div>
      </div>
      <hr>
      <div class="content-row">
        <img src="/img/nepal.jpg" alt="Poslovno iznajmljivanje" height="325px">
        <div class="text-content">
          <h3>Nepal</h3>
          <p>Kathmandu, Pokhara, Lalitpur (Patan), Biratnagar</p>
        </div>
      </div>
      <hr>
      <div class="content-row">
        <img src="/img/rwanda.jpg" alt="Privatno iznajmljivanje" height="325px">
        <div class="text-content">
          <h3>Rwanda</h3>
          <p>Kigali, Butare (Huye), Gisenyi, Musanze</p>
        </div>
      </div>
      <hr>
      <div class="content-row">
        <img src="/img/niger.jpg" alt="Poslovno iznajmljivanje" height="325px">
        <div class="text-content">
          <h3>Niger</h3>
          <p>Niamey, Zinder, Maradi, Tahoua</p>
        </div>
      </div>
      <hr>
      <div class="content-row">
        <img src="/img/mauritania.jpeg" alt="Privatno iznajmljivanje" height="325px">
        <div class="text-content">
          <h3>Mauritania</h3>
          <p>Nouakchott, Nouadhibou, Kaédi, Rosso</p>
        </div>
      </div>
      <hr>
      <div class="content-row">
        <img src="/img/gambia.jpg" alt="Poslovno iznajmljivanje" height="325px">
        <div class="text-content">
          <h3>Gambia</h3>
          <p>Serekunda, Bakau, Brikama, Banjul</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Destinacije'
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
    margin-left: 2.7vw;
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
  