<template>
  <v-table
    class="custom-bg"
    height="300px"
    fixed-header
  >

    <thead>
      <tr>
        <th class="text-left nome">
          Nome
        </th>
        <th class="text-middle">
          CPF
        </th>
        <th class="text-left">
          Servico
        </th>
        <th class="text-left">
          Empresa
        </th>
        <th class="text-left">
          Destino
        </th>
        <th class="text-left dataHora">
          Data e Hora
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="prestador in prestadorServico.slice().reverse()"
        :key="prestador.id"
      >
        <td class="nome">{{ prestador.nome }}</td>
        <td>{{ prestador.cpf }}</td>
        <td>{{ prestador.servico }}</td>
        <td>{{ prestador.empresa }}</td>
        <td>{{ prestador.destino }}</td>
        <td>{{ prestador.dataHoraCreateUpdate }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'ListarPrestadorServicoComponent',
    data () {
      return {
        prestadorServico: []
      };
    },
    methods: {
    async listarPrestadorServico() {
      try {
        const response = await axios.get('http://localhost:8081/prestadorServico');
        this.prestadorServico = response.data;
      } catch (error) {
        console.error('Erro ao listar prestadores de serviço:', error);
        alert('Falha ao listar prestadores de serviço.');
      }
    }
  },
  mounted() {
    this.listarPrestadorServico();
  },
};
    
</script>

<style>

.custom-bg {
  background-color:  rgb(220, 220, 220);
}

.nome {
  width: 300px;
}

.dataHora {
  width: 150px;
}


</style>