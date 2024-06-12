<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <!-- Dodajte logotip ovdje ako je potrebno -->
        </div>
        <div class="footer-info">
          <p>&copy; Pelikanosi. All rights reserved.</p>
          <p>Adresa: Ulica Baze Podataka 12B, Žorž Taun, Kajmanski otoci </p>
          <nav class="footer-nav">
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.footer {
  background-color: #00a1c2;
  padding: 20px 0;
  width: 100%;
  margin-top: auto; /* Postavlja footer na dno stranice */
  
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

.footer-logo img {
  max-width: 150px;
  margin-bottom: 20px;
}

.footer-info {
  text-align: center;
}

.footer-info p {
  color: #666;
  margin-bottom: 10px;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.footer-nav li {
  margin-left: 20px;
}

.footer-nav a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
}

.footer-nav a:hover {
  color: #000;
}
</style>
