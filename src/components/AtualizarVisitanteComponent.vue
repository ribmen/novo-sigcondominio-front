<template>
  <div>
    <h3>Atualizar Visitante</h3>

    <form @submit.prevent="buscarVisitantePorId">
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="visitanteId" class="col-form-label">ID do visitante: </label>
          </div>
          <div class="col-auto">
            <input type="text" id="visitanteId" class="form-control" v-model="visitanteId" required />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-secondary">Buscar</button>
          </div>
        </div>
      </form><br>

    <div v-if="visitante">
      <h5>Atualizar Dados</h5>

      <form @submit.prevent="atualizarVisitante">
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="nome" class="col-form-label">Nome: </label>
          </div>
          <div class="col-auto">
            <input type="text" id="nome" class="form-control" v-model="visitante.nome" required />
          </div>
          <div class="col-auto">
            <label for="cpf" class="col-form-label">CPF: </label>
          </div>
          <div class="col-auto">
            <input type="text" id="cpf" class="form-control" v-model="visitante.cpf" required />
          </div>

          <div>
            <button type="submit" class="btn btn-secondary">Atualizar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AtualizarVisitanteComponent',
  data() {
    return {
      visitanteId: '',
      visitante: null,
    };
  },
  methods: {
    async buscarVisitantePorId() {
      try {
        const response = await axios.get(`http://localhost:8081/visitantes/${this.visitanteId}`);
        if (response.status === 200) {
          this.visitante = response.data;
        } else {
          alert('Visitante não encontrado');
          this.visitante = null;
        }
      } catch (error) {
        console.error('Erro ao buscar visitante: ', error);
        alert('Erro ao buscar visitante');
        this.visitante = null;
      }
    },
    async atualizarVisitante() {
      try {
        const response = await axios.put(`http://localhost:8081/visitantes/${this.visitanteId}`, this.visitante);
        if (response.status === 200) {
          alert('Visitante atualizado com sucesso');
        } else {
          alert('Erro ao atualizar visitante');
        }
      } catch (error) {
        console.error('Erro ao atualizar visitante: ', error);
        alert('Erro ao atualizar visitante');
      }
    },
  },
};
</script>
