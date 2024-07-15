<template>
  <!--   Coluna de Ações -->
     <div class="background-main">
       <div class="card">
         <div class="card-header">
           <h2 class="card-title">Liberar entrada</h2>
         </div>


        <div class="form-check topForm">
          <h3>Possui cadastro?</h3>
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="selectedOption" value="true">
          <label class="form-check-label" for="flexRadioDefault1">
            Sim
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="selectedOption" value="false">
          <label class="form-check-label" for="flexRadioDefault2">
            Não
          </label>
        </div>

        <div v-if="selectedOption === 'true'">
          <h3></h3>
          <BuscarVisitanteComponent/>
          <br>
          <button class="btn btn-primary" @click="ocultarFormulario">Fechar</button>
        </div>
        <div v-if="selectedOption === 'false'">
          <h3></h3>
          <AdicionarVisitanteTesteComponent @visitante-adicionado="listarVisitantes"/>
          <br>
          <button class="btn btn-primary" @click="ocultarFormulario">Fechar</button>
        </div> 

       </div>
     </div>
</template>   

<script>
import BuscarVisitanteComponent from './BuscarVisitanteComponent.vue'
import AdicionarVisitanteTesteComponent from './AdicionarVisitanteTesteComponent.vue';
import axios from 'axios';

export default {
  name: 'TelaAdicionalComponent',
  data() {
    return {
      selectedOption: null,
    };
  },
  components: {
    AdicionarVisitanteTesteComponent,
    BuscarVisitanteComponent
  }, 
  methods: {
    async listarVisitantes() {
      try {
        const response = await axios.get('http://localhost:8081/visitantes')
        this.$refs.ListarVisitantesComponent.visitantes = response.data;
      }
      catch (error) {
        console.error('Erro ao atualizar lista de visitantes: ', error);
        alert('Falha ao atualizar lista de visitantes.');
      }
    },
    ocultarFormulario() {
        this.selectedOption = null;
    }
  }
};
</script>

<style scoped>
  /* Estilos específicos para o componente */
  .background-main {
    margin-left: 200px;
  }
  
  .card {
    padding-left: 80px;
    height: 100vh;
  }

  .topForm {
    padding-top: 50px;
  }
  
  </style>
     