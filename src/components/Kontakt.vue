<template>
  <div class="title">
    <h2 class="title-first">KONTAKTIRAJ NAS</h2>
    <p class="title-desc">
      Ako želiš postati naš partner ili samo imaš neko pitanje ili komentar, slobodno nam se javi!
    </p>
  </div>

  <div class="query-box">
    <input type="text" placeholder="Ime i prezime" v-model="name" required>
    <input type="email" placeholder="Email" v-model="email" required>
    <textarea placeholder="Poruka" v-model="message" required></textarea>
    <button class="button" @click="sendMessage">Pošalji</button>
  </div>

</template>

<script>
export default {
  name: 'Kontakt',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendMessage() {
      // Ovdje možete dodati logiku za slanje poruke
      console.log('Ime i prezime:', this.name);
      console.log('Email:', this.email);
      console.log('Poruka:', this.message);
      
      // Resetirajte polja nakon slanja poruke
      this.name = '';
      this.email = '';
      this.message = '';
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
  margin-bottom: 50px;
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

.query-box {
  border: 3px solid #cbb3ff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  flex-grow: 1;
}

.query-box input,
.query-box textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cbb3ff;
  border-radius: 5px;
  font-size: 16px;
}

.query-box textarea {
  height: 120px;
  resize: none;
}

.query-box .button {
  width: 100%;
  max-width: 200px;
}

@media (max-width: 1200px) {
  .query-box{
    width: fit-content;
  }
}

@media (max-width: 992px) {
  .query-box{
    width: fit-content;
  }
}

@media (max-width: 768px) {
  .query-box{
    width: fit-content;
  }
}
</style>
