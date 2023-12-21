<template>
  <div id="app">
    <router-link class="nav-link" to="/users">Users</router-link>
    <router-link class="nav-link" to="/accounts">Accounts</router-link>
    <router-link class="nav-link" to="/transactions">Transactions</router-link>
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

#app {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url('https://source.unsplash.com/1600x900/?grey-concrete-building'); /* Replace with your actual image URL */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  padding: 10px;
}

.nav-link {
  text-decoration: none;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgb(218, 187, 129);
  color: #fff;
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.nav-link:hover,
.nav-link:active {
  background-color: #ff8c00;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.content {
  margin-top: 20px;
}
</style>
