<template>
  <div>
    <div>
      <h3>Excluir dados de visitante</h3>
      <form @submit.prevent="excluirVisitantePorCpf">
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
  name: 'DeleteVisitanteComponent',
  data() {
    return {
      cpfExcluir: ''
    }
  },
  methods: {
    async excluirVisitantePorCpf() {
      try {
        const response = await axios.delete(`http://localhost:8081/visitantes/${this.cpfExcluir}`);
        if(response.status === 204) {
          alert('Visitante excluído com sucesso!');
          this.cpfExcluir = '';  // Limpar o campo após a exclusão
        } else {
          alert('404 (Visitante não encontrado)');
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert('404 (Visitante não encontrado)');
        } else {
          console.error('Erro ao excluir visitante:', error);
          alert('Falha ao excluir visitante.');
        }
      }
    }
  }
};
</script>
