import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const rotasApp: Routes = [
  {path: '', component: ListagemComponent},
  {path: 'cadastro', component: CadastroComponent}
];

export const roteamento = RouterModule.forRoot(rotasApp);
