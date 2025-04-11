// Définissez une interface nommée Véhicule avec les propriétés suivantes:
// Implémenter une classe nommée Voiture qui implémente l'interface Véhicule.
var Voiture = /** @class */ (function () {
    // initialise les propriétés make, model, et year.
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implémenter la méthode start pour enregistrer "Car engine started" sur la console.
    Voiture.prototype.start = function () {
        console.log("Car engine started");
    };
    return Voiture;
}());
var myCar = new Voiture("kpandji", "4x4", 2025);
myCar.start();
console.log(myCar);
