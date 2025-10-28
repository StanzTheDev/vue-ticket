<template>
  <div class="hero">
    <div class="my-nav">
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-logo">
            <a href="/" @click="closeMenu">Paseo</a>
          </div>

          <ul :class="['nav-menu', { active: isMenuOpen }]">
            <li class="nav-item">
              <a href="#home" class="nav-link" @click="closeMenu">Home</a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link" @click="closeMenu">About</a>
            </li>
            <li class="nav-item">
              <a href="#ticket" class="nav-link" @click="closeMenu">Ticket</a>
            </li>
            <li class="nav-item">
              <a href="#dashboard" class="nav-link" @click="closeMenu">Dashboard</a>
            </li>
          </ul>

          <div class="nav-cta">
            <a href="/signup" class="cta-button">Get Started</a>
          </div>
          <div class="nav-toggle" @click="toggleMenu">
            <span :class="['bar', { active: isMenuOpen }]"></span>
            <span :class="['bar', { active: isMenuOpen }]"></span>
            <span :class="['bar', { active: isMenuOpen }]"></span>
          </div>
        </div>
      </nav>
    </div>
    
    <main>
      <div class="content">
        <h1 class="h1">Simple. Powerful. Consistent ticket management workflow.</h1>
        <p class="p-1">
          Our ticket management system helps you stay organized, resolve issues faster, and keep every request in one place. From open to closed, every step is simple, transparent, and built to keep your team focused on what matters most.
        </p>
        <a href="/signup" id="cta1" class="getStarted">Get Started</a>
      </div>
      
      <div class="wave-background">
      <img src="../assets/wave.svg" alt="wave background" class="image" />
  </div>
      
      <div class="decorative-circle circle-1"></div>
      <div class="decorative-circle circle-2"></div>
    </main>

    <section class="features-section">
      <div class="container">
        <h2 class="features-title">Why Choose TicketMaster Pro?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
               <img 
                src="../assets/rocket_launch_24dp_A29E91_FILL0_wght400_GRAD0_opsz24.svg" 
                alt="rocket" 
                width="40"
                height="40"
              />
            </div>
            <h3>Lightning Fast</h3>
            <p>Create and manage tickets in seconds with our intuitive interface</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <!-- Replace with your analytics icon -->
              <img 
                src="../assets/analytics_24dp_A29E91_FILL0_wght400_GRAD0_opsz24.svg" 
                alt="analytics" 
                width="40"
                height="40"
              />
            </div>
            <h3>Smart Analytics</h3>
            <p>Track performance with real-time dashboard and detailed reports</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
             <img 
                src="../assets/lock_24dp_A29E91_FILL0_wght400_GRAD0_opsz24.svg" 
                alt="lock" 
                width="40"
                height="40"
              />
            </div>
            <h3>Secure & Reliable</h3>
            <p>Your data is protected with enterprise-grade security measures</p>
          </div>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <span class="logo-text">Paseo</span>
          </div>
          <div class="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="footer-copyright">
            © 2024 TicketMaster Pro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Landing',
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero {
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.navbar {
  background: #fff;
  padding: 0 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 20px;
  width: 95%;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-radius: 10px;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
.nav-logo a {
  color: #1A1A1A;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.my-nav {
  display: flex;
  justify-content: center;
  position: relative;
  top: -20px;
}

.nav-logo a:hover {
  transform: scale(1.05);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #1A1A1A;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.cta-button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  text-decoration: none;
}

.cta-button:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
}

.bar {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.bar.active:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.bar.active:nth-child(2) {
  opacity: 0;
}

.bar.active:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

main {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.wave-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.wave-background img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  height: 1000px;
}

.content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(5px);
}

.h1 {
  margin-top: 100px;
  text-align: center;
  font-size: 3rem;
  color: #2C2C2C;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.p-1 {
  margin: 20px auto;
  text-align: center;
  font-size: 1.2rem;
  color: #6B5E53;
  max-width: 1000px;
  line-height: 30px;
  margin-bottom: 2rem;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.decorative-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(232, 23, 23, 0.1);
  animation: float 6s ease-in-out infinite;
  z-index: 1;
}

.circle-1 {
  width: 120px;
  height: 120px;
  top: 10%;
  right: 5%;
  animation-delay: 0s;
}

.circle-2 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 5%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.getStarted {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  text-decoration: none;
  width: auto;
}

.getStarted:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

.features-section {
  padding: 6rem 2rem;
  background: #FAF9F6;
  position: relative;
  z-index: 2;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  width: auto;
  display: flex;
  justify-content: center;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #6B7280;
  line-height: 1.6;
}
.footer {
  background: #E9E2D6;
  color: #2C2C2C;
  padding: 3rem 2rem;
  position: relative;
  z-index: 2;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: #2C2C2C;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #2C2C2C;
}

.footer-copyright {
  color: #2C2C2C;
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 0 1rem;
    width: 90%;
  }

  .nav-container {
    height: 60px;
  }

  .nav-menu {
    position: fixed;
    top: 60px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 60px);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
    gap: 2rem;
    transition: left 0.3s ease;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    width: 80%;
    text-align: center;
  }

  .nav-link {
    display: block;
    padding: 1rem;
    font-size: 1.1rem;
    border-radius: 10px;
  }

  .nav-cta {
    display: none;
  }

  #cta1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #764ba2;
  }

  .nav-toggle {
    display: flex;
  }

  .h1 {
    font-size: 2rem;
    line-height: 1.3;
    margin-top: 60px;
  }

  .p-1 {
    font-size: 1rem;
    line-height: 1.6;
  }

  .features-title {
    font-size: 2rem;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-menu.active .nav-item {
  animation: slideIn 0.3s ease forwards;
}

.nav-menu.active .nav-item:nth-child(1) { animation-delay: 0.1s; }
.nav-menu.active .nav-item:nth-child(2) { animation-delay: 0.2s; }
.nav-menu.active .nav-item:nth-child(3) { animation-delay: 0.3s; }
.nav-menu.active .nav-item:nth-child(4) { animation-delay: 0.4s; }
.nav-menu.active .nav-item:nth-child(5) { animation-delay: 0.5s; }
</style>

<style>
html {
  scroll-behavior: smooth;
}

body {
  padding-top: 70px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media screen and (max-width: 768px) {
  body {
    padding-top: 60px;
  }
}
</style>