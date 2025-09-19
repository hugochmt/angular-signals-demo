---
marp: true
---

<style scoped>section { align-content: center; }</style>

# Nouveautés Angular - Control flow & signals

---

<style>section { align-content: start; }</style>

# Angular - Nouveau control flow 🔀

- Stable depuis Angular 18
- `@if`, `@else-if` and `@else`
- `@for`
- `@switch`

---

# Version avec `*ngIf`

```html
<div *ngIf="isLoggedIn; else notLoggedIn">
  <h3>Utilisateurs connectés :</h3>
  <ul>
    <li *ngFor="let user of users; trackBy: trackById">{{ user.name }}</li>
  </ul>
</div>

<ng-template #notLoggedIn>
  <p>Veuillez vous connecter pour voir la liste.</p>
</ng-template>
```

---

# Nouveau control-flow

```html
@if (isLoggedIn) {
<h3>Utilisateurs connectés :</h3>
<ul>
  @for (user of users; track user.id) {
  <li>{{ user.name }}</li>
  }
</ul>
} @else {
<p>Veuillez vous connecter pour voir la liste.</p>
}
```

---

# `@for`

```html
@for (user of users; track user.id) {
<div>{{ user.name }} ({{ user.email }})</div>
} @empty {
<p>Aucun utilisateur trouvé</p>
}
```

Variables disponibles : `$count` `$index` `$first` `$last` `$even` `$odd`

`track` : Sert à optimiser le rendu, en indiquant à angular comment suivre les éléments de la collection.- (si un élément de la liste est modifier, pas besoin de redessiner tous les éléments)

---

# `@let`

---

# Angular - Nouveau control flow 🔀

- `ngIf`, etc... deprecated depuis v20, prévue pour être supprimée en v22
- 👉 Avantages :
  - Syntaxe beaucoup plus claire et lisible.
  - Pas besoin de ng-template ni de ng-container.
  - Syntaxe proche de ce qu’on connaît déjà en JavaScript (if, for).

---

---

# Angular signals 🚦

---
