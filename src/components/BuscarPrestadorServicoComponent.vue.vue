<template>

  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><h3 class="search">Buscar prestador de serviço por CPF</h3></a>
    <form @submit.prevent="buscarPrestadorServicoPorCpf" class="form-inline d-flex searchAsWell">
      <input class="form-control mr-sm-2" type="search" id="cpfBuscar" v-model="cpfBuscar" required placeholder="Insira aqui o CPF" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
    </form>
  </nav>

  <div v-if="prestadorServico">
    <br>
    <h2>Dados: </h2>
    <p>Nome: {{ prestadorServico.nome }}</p>
    <p>CPF: {{ prestadorServico.cpf }}</p>
    <p>Serviço: {{ prestadorServico.servico }}</p>
    <p>Empresa: {{ prestadorServico.empresa }}</p>
    <p>Destino: {{ prestadorServico.destino }}</p>
    <br>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BuscarPrestadorServicoComponent',
  data() {
    return {
      cpfBuscar: '',
      prestadorServico: null,
    }
  },

  methods: {
    async buscarPrestadorServicoPorCpf() {
      try {
        const response = await axios.get(`http://localhost:8081/prestadorServico/cpf/${this.cpfBuscar}`);

        if (response.status === 200) {
          this.prestadorServico = response.data;
          alert('Prestador de serviço encontrado.');
        } else {
          alert('404 (Prestador de serviço não encontrado)');
          this.prestadorServico = null;
        }
      } catch (error) {
        console.error('Erro ao buscar prestador de serviço: ', error);
        alert('Falha ao buscar prestador de serviço.');
        this.prestadorServico = null;
      }
    }
  }
};
</script>

<style>
  .form-inline .form-control {
    width: auto;
    flex: 1;
  }

  .search {
    margin-left: 30px;
  }
  .searchAsWell {
    margin-right: 30px;
  }
</style>