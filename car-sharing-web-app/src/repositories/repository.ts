
export abstract class Repository<T> {
    public items: T[] = [];

    public getAll():T[]{
        return this.items;
    }

    public add(item: T): void{
        this.items.push(item);
    }

    public update(oldItem: T, newItem: T): void{
        let index = this.items.indexOf(oldItem);
        this.items.fill(newItem,index,index+1);
    }

    public delete(item: T): void{
        let index = this.items.indexOf(item);
        this.items.splice(index,1);
    }

    public deleteLastAddedElement():void{
        this.items.pop();
    }
}
