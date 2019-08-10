export abstract class Repository<T> {
    public items: T[] = [];

    public getAll():T[]{
        return this.items;
    }

    public add(item: T): void{
        this.items.push(item);
    }

    public delete(item: T): void{
        //TODO body of this function
    }

    public deleteLastAddedElement():void{
        this.items.pop();
    }
}
