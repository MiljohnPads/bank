<template>
  <div>
    <center>
    <h1>User</h1>
    </center>

    <template v-if="loading">
      <p>Loading...</p>
    </template>

    <template v-else>
      <table class="table table-bordered table-striped table-sm">
        <thead>
          <th>ID</th>
          <th>FULL NAME</th>
          <th>ADDRESS</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>SEX</th>
          <th>OCCUPATION</th>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.full_name }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.sex }}</td>
            <td>{{ user.occupation }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const loading = ref(true); // Set to true if you want to show "Loading..." initially

onMounted(async () => {
  try {
    const response = await axios.get('user.json'); // Replace with the actual path
    users.value = response.data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    loading.value = false; // Hide loading state after data is fetched
  }
});
</script>

<style scoped>
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  .table th {
    background-color: #656464;
  }

  .table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .table-hover tbody tr:hover {
    background-color: #f5f5f5;
  }

  /* Optional: Add some additional styling for responsiveness */
  @media (max-width: 768px) {
    .table {
      overflow-x: auto;
      display: block;
    }

    .table thead, .table tbody, .table th, .table td, .table tr {
      display: block;
    }

    .table thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    .table tr {
      margin-bottom: 15px;
    }

    .table td {
      border: none;
      border-bottom: 1px solid #ddd;
      position: relative;
      padding-left: 50%;
    }

    .table td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }
  }
</style>

