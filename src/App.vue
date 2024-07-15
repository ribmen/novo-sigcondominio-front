<template>
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
            <li><a href="https://wa.me/5584987072404" target="_blank" class="nav-link px-2 text-white">Contato</a></li>
          </ul>
          
          <!-- Botões de ação -->
          <div class="d-flex">
            <router-link to="/login"><button class="btn btn-outline-light me-2">Sair</button></router-link>
            <router-link to="/login"><button class="btn btn-primary">Registrar</button></router-link>
          </div>
        </div>
      </div>
    </header>
  <v-app>
    <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            subtitle="moisesaugusto2@dominio.com"
            title="Moisés Augusto"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="Contatos" href="https://wa.me/5584987072404" target="_blank" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Denunciar" href="https://wa.me/5584987072404" target="_blank" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Outras ações" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 200vh"><router-view/></v-main>
    </v-layout>
  </v-card>
  <footer class="bg-body-tertiary text-center text-lg-start mt-auto py-3">
      <div class="container text-center">
        © 2024 Sigcondominio.com.br - Todos os direitos reservados
      </div>
    </footer>
</v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style scoped>

/* Adicione qualquer estilo necessário aqui */
</style>


