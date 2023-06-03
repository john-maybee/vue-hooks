<script>
// import HomePage from "./views/HomePage.vue";
// import LoginPage from "./views/LoginPage.vue";
// import UserPage from "./views/UserPage.vue";

// export default {
//   components: {
//     HomePage,
//     LoginPage,
//     UserPage,
//   },
//   data: () => ({
//     currentPage: "User",
//   }),
//   computed: {
//     renderPage() {
//       return this.currentPage + "Page";
//     }
//   },
//   methods: {
//     showHomePage() {
//       this.currentPage = "Home";
//     },
//     showLoginPage() {
//       this.currentPage = "Login";
//     },
//     showUserPage() {
//       this.currentPage = "User";
//     },
//   },
// };
</script>

<template>
  <header class="header">
    <span class="logo">
      <img src="@/assets/vue-heart.png" width="30" />C'est La Vue
    </span>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/user">User</router-link>
      <!-- <a href="#" @click.prevent="showHomePage">Home</a>
      <a href="#" @click.prevent="showLoginPage">Login</a>
      <a href="#" @click.prevent="showUserPage">User</a> -->
    </nav>
  </header>

  <p class="content">This is a new message to test the build!</p>

  <!-- <HomePage v-if="currentPage === 'Home'" />
  <LoginPage v-else /> -->
  <Suspense>
    <router-view />
    <!-- <component :is="renderPage" :key="renderPage" /> -->

    <template v-slot:fallback> Data is loading... </template> 
  </Suspense>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  font-size: 1.5rem;
  background-color: black;
  color: rgb(66,184,131);
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
}

main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>