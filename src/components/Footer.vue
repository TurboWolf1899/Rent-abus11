<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
          
          </div>
          <div class="footer-info">
            <p>&copy; Gule&Grac. All rights reserved.</p>
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
  .footer {
    background-color: #f5f5f5;
    border-top: 1px solid #e5e5e5;
    padding: 20px 0;
    width: 100%;
    bottom: 0;
    left: 0%;
    position: fixed;
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
    bottom: 0%;
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