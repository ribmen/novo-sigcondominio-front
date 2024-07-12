import { createRouter, createWebHistory } from 'vue-router';
import TelaInicial from '../components/TelaInicial.vue';
import TelaLogin from '../components/TelaLogin.vue';
import TelaVisitantes from '../components/TelaVisitantes.vue';
import AdicionarVisitanteTesteComponent from '@/components/AdicionarVisitanteTesteComponent.vue';
import TelaCadastroComponent from '@/components/TelaCadastroComponent.vue';

const routes = [
  { path: '/login', component: TelaLogin },
  { path: '/', component: TelaInicial },
  { path: '/visitantes', component: TelaVisitantes },
  { path: '/adicionarVisitantes', component: AdicionarVisitanteTesteComponent},
  { path: '/cadastro', component: TelaCadastroComponent}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
