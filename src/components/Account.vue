<template>
  <div>
    <center>
    <h1>Account</h1>
    </center>
    <table class="table table-bordered table-striped table-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>USER NAME</th>
          <th>TYPE</th>
          <th>BALANCE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts" :key="account.id">
          <td>{{ account.id }}</td>
          <td>{{ account.username }}</td>
          <td>{{ account.type }}</td>
          <td>{{ account.balance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  export default {
    setup() {
      const accounts = ref([]);

      onMounted(async () => {
        try {
          const response = await axios.get('account.json'); // Replace with the actual path
          accounts.value = response.data.accounts;
        } catch (error) {
          console.error('Error fetching accounts:', error);
        }
      });

      return {
        accounts,
      };
    },
  };
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
    background-color: #5d5c5c;
  }

  .table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .table-hover tbody tr:hover {
    background-color: #f5f5f5;
  }
</style>

