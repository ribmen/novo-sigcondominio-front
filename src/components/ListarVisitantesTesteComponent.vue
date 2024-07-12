<template>
  <v-table
    class="custom-bg"
    height="300px"
    fixed-header
  >

    <thead>
      <tr>
        <th class="text-left">
          Nome
        </th>
        <th class="text-middle">
          CPF
        </th>
        <th class="text-left">
          Destino
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="visitante in visitantes"
        :key="visitante.id"
      >
        <td class="name-column">{{ visitante.nome }}</td>
        <td>{{ visitante.cpf }}</td>
        <td>{{ visitante.destino }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'ListarVisitantesTesteComponent',
    data () {
      return {
        visitantes: []
      };
    },
    methods: {
    async listarVisitantes() {
      try {
        const response = await axios.get('http://localhost:8081/visitantes');
        this.visitantes = response.data;
      } catch (error) {
        console.error('Erro ao listar visitantes:', error);
        alert('Falha ao listar visitantes.');
      }
    }
  },
  mounted() {
    this.listarVisitantes();
  },
};
    
</script>

<style>

.custom-bg {
  background-color:  rgb(220, 220, 220);
}


.name-column {
  width: 400px;
}

</style>