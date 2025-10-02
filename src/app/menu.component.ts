import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [RouterLink]
})
export class MenuComponent {
  menuItems = [
    { label: 'Inicio', route: '/' },
    { label: 'Rutas', route: '/rutas' },
    { label: 'Perfil', route: '/perfil' }
  ];

  user = {
    name: 'Usuario',
    avatar: 'https://ui-avatars.com/api/?name=Usuario'
  };

  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    // Aquí iría la lógica real de logout
    alert('Sesión cerrada');
    this.showDropdown = false;
  }
}
