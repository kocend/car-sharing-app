export abstract class Repository<T> {
    public items: T[] = [];

    public getAll():T[]{
        return this.items;
    }

    public add(item: T): void{
        this.items.push(item);
    }

    public deleteLastAddedElement():void{
        this.items.pop();
    }
}
