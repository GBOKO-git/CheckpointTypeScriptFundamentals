// Définissez une interface nommée Véhicule avec les propriétés suivantes:

interface vehicule {
make: string;  // make de type string
model: string;  // model de type string
year: number;  //year de type number
start():void;    //méthodestart qui renvoie void et enregistre "Engine started" sur la console.
}

// Implémenter une classe nommée Voiture qui implémente l'interface Véhicule.

class Voiture implements vehicule{

    // initialise les propriétés make, model, et year.
    constructor(public make:string, public model:string, public year:number){}

    // Implémenter la méthode start pour enregistrer "Car engine started" sur la console.

    start(): void {
        console.log("Car engine started");
    }
}

// Créer une instance de la classe Car et l'initialiser avec quelques valeurs pour make, model, et year.
const myCar = new Voiture("kpandji", "4x4", 2025);
// Appellez la méthode start
myCar.start()
console.log(myCar)