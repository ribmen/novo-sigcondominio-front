<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-dark py-3">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <!-- Logo e título -->
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="Bootstrap Logo" width="30" height="24">
            <span class="fs-4 mx-2">SIGCONDOMÍNIO</span>
          </a>
          
          <!-- Navegação -->
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <router-link to="/" class="nav-link px-2 text-white">Página Inicial</router-link>
            <router-link to="/visitantes" class="nav-link px-2 text-white">Buscar no sistema</router-link>
            <li><a href="#" class="nav-link px-2 text-white">Sobre</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Contato</a></li>
          </ul>
          
          <!-- Botões de ação -->
          <div class="d-flex">
            <router-link to="/login"><button class="btn btn-outline-light me-2">Sair</button></router-link>
            <router-link to="/login"><button class="btn btn-primary">Registrar</button></router-link>
          </div>
        </div>
      </div>
    </header>
  
    <!-- Conteúdo principal -->
    <main class="container my-5">
      <h1 class=" mb-4">Bem-vindo, Moisés</h1>

      <div class="row">
        <!-- Coluna de Entradas de hoje -->
        <div class="display col-md-6 mb-4 d-flex">
          <div class="card flex-grow-1 me-4">
            <div class="card-header">
              <h2 class="card-title">Entradas de visitantes</h2>
            </div>
            <div class="card-body">
              <ListarVisitantesTesteComponent ref="listarVisitantesTesteComponent"/><br><br>
              <ListarPrestadorServicoComponent ref="listarPrestadorServicoComponent"/>
            </div>
          </div>
          <div class="button-container">
            <div class="text align-self-start">
              <router-link to="/adicionarVisitantes" class="btn btn-primary custom-button">Liberar entrada</router-link>
            </div>
  
            <div class="text align-self-start">
              <button class="btn btn-info custom-button" @click="listarVisitantes">Atualizar lista</button>
            </div>

            

          </div>
        </div>
      </div>
      <div class="adicionarVisitante">
        <AdicionarVisitanteTesteComponent/>
      </div>

      <!-- Botão para visitantes -->
      <div class="text-center">
        <router-link to="/visitantes" class="btn btn-primary">Ver Todos os Visitantes</router-link>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-body-tertiary text-center text-lg-start mt-auto py-3">
      <div class="container text-center">
        © 2024 Sigcondominio.com.br - Todos os direitos reservados
      </div>
    </footer>
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

.mb-4 {
  margin-left: 150px;
}

.display{
  width: 1000px
}
.card {
  border: 1px solid rgba(110, 110, 110, 0.125);
  width: 100%;
  height: 400px;
}

.custom-button {
  width: 150px;
  margin-bottom: 10px;
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
