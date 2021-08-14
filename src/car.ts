export class Car {
    production: number;
    private brand: string;
    private model: string;
    private speed: number;
    private isNew: boolean;

    public constructor(production: number, brand: string, model: string, speed: number, isNew = true) {
        this.production = production;
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }

    public getBrandModel() {
        console.log(this.getModel());
        return this.brand;
    }

    private getModel() {
        return this.model;
    }
}