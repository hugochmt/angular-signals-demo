import { Component, signal, computed, effect, inject } from '@angular/core';
import { User } from './user.interface';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [FormsModule],
  template: `
    <div class="search-container">
      <input
        type="text"
        [ngModel]="searchQuery()"
        (ngModelChange)="searchQuery.set($event)"
        placeholder="Rechercher un utilisateur..."
      />
    </div>

    <div class="users-container">
      @if (filteredUsers().length > 0) { @for (user of filteredUsers(); track user.id) {
      <div class="user-card">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
        <span class="role-badge">{{ user.role }}</span>
      </div>
      } } @else {
      <p>Aucun utilisateur trouvé</p>
      }
    </div>

    <div class="stats">Nombre d'administrateurs: {{ adminCount() }}</div>
  `,
})
export class UserListComponent {
  private userService = inject(UserService);

  // Signal principal contenant notre liste d'utilisateurs
  private users = signal<User[]>([]);

  // Signal pour la recherche
  searchQuery = signal('');

  // Signal calculé pour filtrer les utilisateurs
  filteredUsers = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.users().filter(
      (user) => user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
    );
  });

  // Signal calculé pour compter les administrateurs
  adminCount = computed(() => {
    return this.users().filter((user) => user.role === 'admin').length;
  });

  constructor() {
    this.userService.getUsers().subscribe((users) => this.users.set(users));
  }
}
