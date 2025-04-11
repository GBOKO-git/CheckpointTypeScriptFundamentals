
# 🚗 Projet TypeScript : Interface Véhicule et Classe Voiture

Ce projet est un exemple simple en TypeScript qui démontre l'utilisation d'une **interface**, d'une **classe** qui l'implémente, ainsi que la **compilation TypeScript → JavaScript**.

---

## ✅ Objectif

Créer une interface `Véhicule`, l’implémenter via une classe `Voiture`, instancier un objet de cette classe, et tester son comportement.

---

## 📁 Structure

```bash
mon-projet-typescript/
├── app.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧾 Instructions

### 1. Définir l’interface `Véhicule`

- `make`: `string`
- `model`: `string`
- `year`: `number`
- Méthode `start()` : retourne `void` et affiche `"Engine started"` dans la console.

### 2. Implémenter la classe `Voiture`

- Constructeur pour initialiser `make`, `model`, `year`.
- Implémenter la méthode `start()` pour afficher : `"Car engine started"`.

### 3. Créer une instance de la classe `Voiture`

Exemple :

```ts
const myCar = new Voiture("Toyota", "Corolla", 2020);
myCar.start(); // Affiche "Car engine started";
console.log(myCar)
```

---

## 🧑‍💻 Compilation & Exécution

### Étapes

1. **Compiler le TypeScript** :

```bash
npx tsc
```

2. **Exécuter le JavaScript généré** :

```bash
node index.js
```

---

## 📌 Exemple de code (index.ts)

```ts
interface Véhicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Voiture implements Véhicule {
  constructor(public make: string, public model: string, public year: number) {}

  start(): void {
    console.log("Car engine started");
  }
}

const maVoiture = new Voiture("Toyota", "Corolla", 2020);
maVoiture.start();
```

---

## 🚀 Résultat attendu

Lors de l'exécution, vous devez voir :

```
Car engine started
```

---

## 🧹 Astuce

Utilisez la commande suivante pour recompiler automatiquement en cas de modifications :

```bash
npx tsc --watch
```

---

## 📦 Installation des dépendances

Si ce n'est pas encore fait :

```bash
npm install typescript --save-dev
npx tsc --init
```

---
