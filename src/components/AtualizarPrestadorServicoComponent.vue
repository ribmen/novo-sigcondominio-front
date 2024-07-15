<template>
  <div>
    <h3>Atualizar prestador de serviço</h3>

    <form @submit.prevent="buscarPrestadorServicoPorId">
      <div class="row g-3">
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="prestadorServicoId" class="col-form-label">ID do prestador de serviço:</label>           
          </div>
          <div class="col-auto">
            <input type="text" id="prestadorServicoId" class="form-control" v-model="prestadorServicoId" required />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-secondary">Buscar</button>
          </div>
        </div>

<!--         <div class="col-12">
        </div> -->
      </div>
    </form><br>

    <div v-if="prestadorServico">
      <h5>Atualizar Dados</h5>

      <form @submit.prevent="atualizarPrestadorServico">
        <div class="row g-3">
          <div class="col-12">
            <label for="nome" class="col-form-label">Nome:</label>
            <input type="text" id="nome" class="form-control" v-model="prestadorServico.nome" required />
          </div>
          <div class="col-12">
            <label for="cpf" class="col-form-label">CPF:</label>
            <input type="text" id="cpf" class="form-control" v-model="prestadorServico.cpf" required />
          </div>
          <div class="col-12">
            <label for="servico" class="col-form-label">Serviço:</label>
            <input type="text" id="servico" class="form-control" v-model="prestadorServico.servico" required />
          </div>
          <div class="col-12">
            <label for="empresa" class="col-form-label">Empresa:</label>
            <input type="text" id="empresa" class="form-control" v-model="prestadorServico.empresa" required />
          </div>
          <div class="col-12">
            <label for="destino" class="col-form-label">Destino:</label>
            <input type="text" id="destino" class="form-control" v-model="prestadorServico.destino" required />
          </div>
          <div class="col-12">
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
  name: 'AtualizarPrestadorServicoComponent',
  data() {
    return {
      prestadorServicoId: '',
      prestadorServico: null,
    };
  },
  methods: {
    async buscarPrestadorServicoPorId() {
      try {
        const response = await axios.get(`http://localhost:8081/prestadorServico/${this.prestadorServicoId}`);
        if (response.status === 200) {
          this.prestadorServico = response.data;
        } else {
          alert('Prestador de serviço não encontrado');
          this.prestadorServico = null;
        }
      } catch (error) {
        console.error('Erro ao buscar prestador de serviço: ', error);
        alert('Erro ao buscar prestador de serviço');
        this.prestadorServico = null;
      }
    },
    async atualizarPrestadorServico() {
      try {
        const response = await axios.put(`http://localhost:8081/prestadorServico/${this.prestadorServicoId}`, this.prestadorServico);
        if (response.status === 200) {
          alert('Prestador de serviço atualizado com sucesso');
        } else {
          alert('Erro ao atualizar prestador de serviço');
        }
      } catch (error) {
        console.error('Erro ao atualizar prestador de serviço: ', error);
        alert('Erro ao atualizar prestador de serviço');
      }
    },
  },
};
</script>
