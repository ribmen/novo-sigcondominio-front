<template>
    <h2 class="bold">Cadastro</h2><br>

    <div class="form-check">
      <h3>Novo acesso</h3>
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="selectedOption" value="visitante">
      <label class="form-check-label" for="flexRadioDefault1">
        Visitante
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="selectedOption" value="prestadorServico">
      <label class="form-check-label" for="flexRadioDefault2">
        Prestador de serviço
      </label>
    </div>
    
    <div v-if="selectedOption === 'visitante'">
      <form @submit.prevent="adicionarVisitante">
        <div class="input-group">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Nome</label><br>
            <input type="text" id="nome" v-model="novoVisitante.nome" class="form-control" placeholder="Insira o nome aqui" required><br>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">CPF</label><br>
            <input type="text" id="cpf" v-model="novoVisitante.cpf"  v-directive="cpfMask" required class="form-control" placeholder="Insira aqui o CPF"><br>
          </div>
        </div>
        <div class="form-group col-md-6">
            <label for="inputEmail4">Destino</label><br>
            <input type="text" id="destino" v-model="novoVisitante.destino" class="form-control" placeholder="Modelo: APTO. 0000X" required><br>
        </div>
        
        <button type="submit" class="btn btn-primary">Cadastrar</button><br><br>
      </form>     
      <button class="btn btn-primary" @click="ocultarFormulario">Fechar</button>
    </div>

    

    <div v-if="selectedOption === 'prestadorServico'">
      <form @submit.prevent="adicionarPrestadorServico">
        <div class="input-group">
          <div class="form-group col-md-6">
            <label for="nome">Nome</label><br>
            <input type="text" id="nome" v-model="novoPrestadorServico.nome" class="form-control" placeholder="Insira o nome aqui" required><br>
          </div>
          <div class="form-group col-md-6">
            <label for="cpf">CPF</label><br>
            <input type="text" id="cpf" v-model="novoPrestadorServico.cpf" class="form-control" placeholder="Insira aqui o CPF" required><br>
          </div>
        </div>
        <div class="input-group">
          <div class="form-group col-md-6">
            <label for="servico">Serviço</label><br>
            <input type="text" id="servico" v-model="novoPrestadorServico.servico" class="form-control" placeholder="" required><br>
          </div>
          <div class="form-group col-md-6">
            <label for="empresa">Empresa (opcional)</label><br>
            <input type="text" id="empresa" v-model="novoPrestadorServico.empresa" class="form-control" placeholder="Caso não possua vínculo, 'Não se aplica'" required><br>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="destino">Destino</label><br>
            <input type="text" id="destino" v-model="novoPrestadorServico.destino" class="form-control" placeholder="Modelo: APTO. 0000X" required><br>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Cadastrar</button><br><br>
      </form>
      <button class="btn btn-primary" @click="ocultarFormulario">Fechar</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdicionarVisitanteTesteComponent',
  data() {
    return {
      selectedOption: null,
      novoVisitante: {
        nome: '',
        cpf: '',
        destino: ''
      },
      novoPrestadorServico: {
        nome: '',
        cpf: '',
        servico: '',
        empresa: '',
        destino: ''
      }
    };
  },
  methods: {
    async adicionarVisitante() {
      try {
        const response = await axios.post('http://localhost:8081/visitantes', this.novoVisitante);
        if (response.status === 201) {
          alert('Visitante adicionado com sucesso!');
          this.novoVisitante.nome = '';
          this.novoVisitante.cpf = '';
          this.novoVisitante.destino = '';

          // Chamar a função listarVisitantes() do componente pai (TelaInicialComponent)
          //this.$emit('visitante-adicionado');
        }
      } catch (error) {
        console.error('Erro ao adicionar visitante:', error);
        alert('Falha ao adicionar visitante.');
      }
    },
    async adicionarPrestadorServico() {
      try {
        const response = await axios.post('http://localhost:8081/prestadorServico', this.novoPrestadorServico);
        if (response.status === 201) {
          alert('Prestador de serviço adicionado com sucesso!');
          this.novoVisitante.nome = '';
          this.novoVisitante.cpf = '';
          this.novoVisitante.servico = '';
          this.novoVisitante.empresa = '';
          this.novoVisitante.destino = '';

          // Chamar a função listarVisitantes() do componente pai (TelaInicialComponent)
          //this.$emit('visitante-adicionado');
        }
      } catch (error) {
        console.error('Erro ao adicionar prestador de serviço:', error);
        alert('Falha ao adicionar prestador de serviço.');
      }
    },
    ocultarFormulario() {
      this.selectedOption = null;
    }
  }
};
</script>

<style>
/* Adicione seu CSS aqui, se necessário */
</style>

