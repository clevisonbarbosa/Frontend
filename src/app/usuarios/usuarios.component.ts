import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { UsuarioModel } from './usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  usuarios: Array<any> = new Array();

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.listarUsuarios();
  }

  atualizar(id: number) {
    this.usuarioService.atualizarUsuario(id, this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => {
      console.log('Erro ao atualizar o usuário', err);
    })
  }

  remover(id: number) {
    this.usuarioService.removerUsuario(id).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => {
      console.log('Erro ao atualizar o usuário', err);
    })
  }
  
  
  cadastrar(){
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe(usuario => {
      this.usuario = new UsuarioModel();
      this.listarUsuarios();
    }, err => {
      console.log('Erro ao cadastrar o usuário', err);
    })
  }
  
  listarUsuarios(){
    this.usuarioService.ListarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, err => {
      console.log('Error ao listar os usuários', err);
    })
  }

}



