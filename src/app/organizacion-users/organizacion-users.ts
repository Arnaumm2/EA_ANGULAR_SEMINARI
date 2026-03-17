import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../models/usuario.model';
import { Organizacion } from '../models/organizacion.model';

@Component({
  selector: 'app-organizacion-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organizacion-users.html'
})
export class OrganizacionUsersComponent {

  @Input() organizacion!: Organizacion;
  @Input() usuariosDisponibles: Usuario[] = [];

  agregarUsuario(user: Usuario) {
    if (!this.organizacion.users) {
      this.organizacion.users = [];
    }

    this.organizacion.users.push(user);
  }

  eliminarUsuario(user: Usuario) {
    this.organizacion.users =
      this.organizacion.users?.filter(u => u._id !== user._id);
  }

}