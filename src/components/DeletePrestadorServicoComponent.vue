<template>
  <div>
    <div>
      <h3>Excluir dados de prestador de serviço</h3>
      <form @submit.prevent="excluirPrestadorServicoPorCpf">
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="cpfExcluir" class="col-form-label">Excluir por CPF: </label>
          </div>
          <div class="col-auto">
            <input type="text" id="cpfExcluir" class="form-control" v-model="cpfExcluir" required />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-danger">Excluir</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DeletePrestadorServicoComponent',
  data() {
    return {
      cpfExcluir: ''
    }
  },
  methods: {
    async excluirPrestadorServicoPorCpf() {
      try {
        const response = await axios.delete(`http://localhost:8081/prestadorServico/${this.cpfExcluir}`);
        if(response.status === 204) {
          alert('Prestador de serviço excluído com sucesso!');
          this.cpfExcluir = '';  // Limpar o campo após a exclusão
        } else {
          alert('404 (Prestador de serviço não encontrado)');
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert('404 (Prestador de serviço não encontrado)');
        } else {
          console.error('Erro ao excluir prestador de serviço:', error);
          alert('Falha ao excluir prestador de serviço.');
        }
      }
    }
  }
};
</script>
