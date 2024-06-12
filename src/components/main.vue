<template>
    <div>
      <header>
        <h1>Find a Handyman</h1>
        <p>Professional Handyman Services for Your Home or Business</p>
      </header>
      <main>
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li v-for="service in services" :key="service.id">
              {{ service.name }}
            </li>
          </ul>
        </section>
        <section id="why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li v-for="reason in reasons" :key="reason.id">
              {{ reason.description }}
            </li>
          </ul>
        </section>
        <section id="get-a-quote">
          <h2>Get a Free Quote</h2>
          <p>Fill out the form below or give us a call to schedule your free, no-obligation quote. We'll assess your project and provide you with an accurate estimate.</p>
          <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name"><br><br>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" v-model="form.phone"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email"><br><br>
            <label for="message">Message:</label>
            <textarea id="message" v-model="form.message"></textarea><br><br>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section id="testimonials">
          <h2>Testimonials</h2>
          <ul>
            <li v-for="testimonial in testimonials" :key="testimonial.id">
              <p>{{ testimonial.text }}</p>
              <p>— {{ testimonial.author }}</p>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Contact Us:</p>
        <ul>
          <li>Phone: (555) 123-4567</li>
          <li>Email: <a href="mailto:info@findahandyman.com">info@findahandyman.com</a></li>
          <li>Address: 123 Main Street, Anytown USA</li>
        </ul>
        <ul>
          <li><a href="#" target="_blank">Facebook</a></li>
          <li><a href="#" target="_blank">Twitter</a></li>
          <li><a href="#" target="_blank">Instagram</a></li>
        </ul>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          { id: 1, name: "General home repairs and maintenance" },
          { id: 2, name: "Plumbing and electrical work" },
          { id: 3, name: "Drywall and painting" },
          { id: 4, name: "Carpentry and furniture assembly" },
          { id: 5, name: "Yard work and landscaping" },
          { id: 6, name: "And much more!" }
        ],
        reasons: [
          { id: 1, description: "Fully licensed, bonded, and insured for your peace of mind" },
          { id: 2, description: "Prompt and reliable service with flexible scheduling" },
          { id: 3, description: "Competitive rates and transparent pricing" },
          { id: 4, description: "High-quality workmanship and attention to detail" },
          { id: 5, description: "Friendly and professional technicians" }
        ],
        testimonials: [
          { id: 1, text: "I've used Find a Handyman for several projects in my home, and I've always been impressed with their professionalism and the quality of their work. Highly recommended!", author: "John D." },
          { id: 2, text: "The handyman who came to my business was knowledgeable, efficient, and completed the job quickly. I'll definitely be using their services again.", author: "Sarah M." }
        ],
        form: {
          name: "",
          phone: "",
          email: "",
          message: ""
        }
      };
    },
    methods: {
      submitForm() {
        // Form submission logic goes here
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  header {
    background-color: #333;
    color: #fff;
    padding: 1em;
    text-align: center;
  }
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
  }
  
  section {
    background-color: #f7f7f7;
    padding: 1em;
    margin-bottom: 1em;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-top: 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 0.5em;
    border-bottom: 1px solid #ddd;
  }
  
  li:last-child {
    border-bottom: none;
  }
  
  form {
    padding: 1em;
  }
  
  label {
    display: block;
    margin-bottom: 0.5em;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
  }
  
  button[type="submit"] {
    background-color: #4CAF50;
    color: #fff;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #3e8e41;
  }
  
  footer {
    background-color: #333;
    color: #fff;
    padding: 1em;
    text-align: center;
    clear: both;
  }
  
  ul.social {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li.social {
    display: inline-block;
    margin-right: 1em;
  }
  
  a.social {
    color: #fff;
    text-decoration: none;
  }
  
  a.social:hover {
    color: #ccc;
  }
  </style>