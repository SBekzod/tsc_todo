export class UsedCar {

    public static text: string = 'this is text';
    public id: number;

    public constructor(id: number) {
        this.id = id;
    }

    public getDetails(): number {
        return this.id;
    }

    public static getText(): string {
        return this.text;
    }

}

