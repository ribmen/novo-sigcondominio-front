<template>
  <div id="app">

    <!-- Conteúdo principal -->
    <main class="container my-5">
      <h1 class=" mb-4">Bem-vindo, Moisés</h1>

      <div class="row">
        <!-- Coluna de Entradas de hoje -->
        
        <div class="display col-md-6 mb-4 d-flex">
          <div class="display col-md-6 mb-4">
            <div class="card flex-grow-1 me-4">
              <div class="card-header">
                <h2 class="card-title">Entradas de visitante</h2>
              </div>
              <div class="card-body">
                <ListarVisitantesTesteComponent ref="listarVisitantesTesteComponent"/>
              </div>
            </div><br>
            <div class="card me-4">
              <div class="card-header">
                <h2 class="card-title">Entradas de prestador de serviço</h2>
              </div>
              <div class="card-body">
                <ListarPrestadorServicoComponent ref="listarPrestadorServicoComponent"/>
              </div>
            </div>
            <div class="button-container">
            </div>
            
                
            
          </div>
          <div class="text align-self-start">
          <router-link to="/adicionarVisitantes" class="btn btn-primary custom-button">Liberar entrada</router-link>
          <div class="text align-self-start">
            <button class="btn btn-info custom-button" @click="listarAmbos">Atualizar listas</button>
          </div>
        </div>

        </div>
      </div>
      <div class="adicionarVisitante">
        <AdicionarVisitanteTesteComponent/>
      </div>

      <!-- Botão para visitantes -->
      <div class="text-center">
        <router-link to="/visitantes" class="btn btn-primary">Gerenciamento de entradas</router-link>
      </div>
    </main>
  </div>
</template>

<script>
//import ListarVisitantesComponent from './ListarVisitantesComponent.vue';
import ListarVisitantesTesteComponent from './ListarVisitantesTesteComponent.vue';
import ListarPrestadorServicoComponent from './ListarPrestadorServicoComponent.vue'
import AdicionarVisitanteTesteComponent from './AdicionarVisitanteTesteComponent.vue';
import axios from 'axios';

export default {
  name: 'TelaInicial',
  components: {
    ListarVisitantesTesteComponent,
    ListarPrestadorServicoComponent,
    AdicionarVisitanteTesteComponent
  }, 
  methods: {
    async listarVisitantes() {
      try {
        const response = await axios.get('http://localhost:8081/visitantes')
        this.$refs.listarVisitantesTesteComponent.visitantes = response.data;
        console.log('200 OK')
      }
      catch (error) {
        console.error('Erro ao atualizar lista de visitantes: ', error);
        alert('Falha ao atualizar lista de visitantes.');
      }

    },
    async listarPrestadorServico() {
      try {
        const response = await axios.get('http://localhost:8081/prestadorServico')
        this.$refs.listarPrestadorServicoComponent.prestadorServico = response.data;
      }
      catch (error) {
        console.error('Erro ao atualizar lista de visitantes: ', error);
        alert('Falha ao atualizar lista de visitantes.');
      }
    },
    
    async listarAmbos() {
      try {
        await this.listarVisitantes();
        await this.listarPrestadorServico();
      } catch (error) {
        console.error('Erro ao atualizar listas: ', error);
      }
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para o componente */
#app {
  display: flex;
  flex-direction: column;
  min-height: 200vh;
}

/* .mb-4 {
  margin-left: 150px;
} */
.my-5{
  margin-left: 187px;
}
.display{
  width: 900px
}
.card {
  border: 1px solid rgba(110, 110, 110, 0.125);
  width: 100%;
  height: 400px;
}

.custom-button {
  width: 150px;
  margin-bottom: 10px;
  margin-left: 20px;
}


.adicionarVisitante {
  margin-top: 400px;
  margin-left: 150px;
}
.card-header {
  background-color: rgb(52, 58, 64); /* Cor de fundo do cabeçalho da carta */
  color: white; /* Cor do texto no cabeçalho da carta */
}

.card-body {
  background-color: rgb(220, 220, 220);
}

.card-title {
  margin-bottom: 0; /* Remove margem inferior do título da carta */
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
