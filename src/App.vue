<template>
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
          <v-list-item prepend-icon="mdi-folder" title="Contatos" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Denunciar" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Outras ações" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100%"><router-view/></v-main>
    </v-layout>
  </v-card>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
/* Adicione qualquer estilo necessário aqui */
</style>


