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

`track` : Sert à optimiser le rendu, en indiquant à angular comment suivre les éléments de la collection. (si un élément de la liste est modifié, pas besoin de redessiner tous les éléments)

`@let` : permet de déclarer des variables

---

# Angular - Nouveau control flow 🔀

- `ngIf`, etc... deprecated depuis v20, prévue pour être supprimée en v22
- 👉 Avantages :
  - Syntaxe beaucoup plus claire et lisible.
  - Pas besoin de ng-template ni de ng-container.
  - Syntaxe proche de ce qu’on connaît déjà en JavaScript (if, for).

---

# Angular signals 🚦

- Arrivée en Angular 16

> Un signal est un conteneur autour d'une valeur qui avertit les consommateurs intéressés lorsque cette valeur change. Les signaux peuvent contenir n'importe quelle valeur, des données primitives aux structures de données complexes.

- But : Gestion plus fine des changements 👉 ne plus utiliser `zone.js` (cf. `provideZonelessChangeDetection`)


```typescript
const count = signal(0);
```

```html
<div>{{ count() }}</div>
```

---

### Computed signals

Permet d'avoir des valeurs dérivées de signals

```typescript
const count = signal(0);
const doubleCount = computed(() => count() * 2);
```

<br>

### Effect

```typescript
effect(() => {
  console.log('Nouvelle valeur du compteur :', this.count());
});
```

---

# Signalification

- `input`
- `output`
- `model`
- `viewChild`
...
- `forms` (experimental in v21, stable in v22)


---
# Angular signals 🚦

- Etat réactif simple & natif.
- Gérer du state
- Observables toujours utiles : events, asynchrone
