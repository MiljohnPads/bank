<template>
    <div>
      <center>
      <h1>Transaction</h1>
      </center>
      <table>
        <thead>
           <tr>
            <th>ID</th>
            <th>INITIAL DEPOSIT</th>
            <th>TYPE</th>
            <th>DATE</th>
            <th>SOURCE</th>
           </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
                <td>{{ transaction.id }}</td>
                <td>{{ transaction.initial_deposit }}</td>
                <td>{{ transaction.type }}</td>
                <td>{{ transaction.datetime }}</td>
                <td>{{ transaction.source }}</td>
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
      const transactions = ref([]);

      onMounted(async () => {
        try {
          const response = await axios.get('transaction.json'); // Replace with the actual path
          transactions.value = response.data.transactions;
        } catch (error) {
          console.error('Error fetching transactions:', error);
        }
      });

      return {
        transactions,
      };
    },
  };
</script>
  
<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #5d5c5c;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }
</style>
