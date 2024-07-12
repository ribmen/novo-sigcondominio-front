<template>
  <!--   Coluna de Ações -->
     <div class="col-md-6 mb-4">
       <div class="card">
         <div class="card-header">
           <h2 class="card-title">Ações</h2>
         </div>
         <div class="card-body">
          <AdicionarVisitanteTesteComponent @visitante-adicionado="listarVisitantes"/>
           <br>
           <AtualizarVisitanteComponent/>
         </div>
       </div>
     </div>
</template>   

<script>
import ListarVisitantesTesteComponent from './ListarVisitantesTesteComponent.vue';
import AdicionarVisitanteTesteComponent from './AdicionarVisitanteTesteComponent.vue';
import AtualizarVisitanteComponent from './AtualizarVisitanteComponent.vue';
import axios from 'axios';

export default {
  name: 'TelaAdicionalComponent',
  components: {
    ListarVisitantesTesteComponent,
    AdicionarVisitanteTesteComponent,
    AtualizarVisitanteComponent
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
    }
  }
};
</script>

<style scoped>
  /* Estilos específicos para o componente */
  
  </style>
     