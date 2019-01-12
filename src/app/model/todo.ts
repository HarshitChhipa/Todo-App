export class Todo {
    id: number;
    isCompleted = false;
    description: '';

    constructor(id, description, isCompleted) {
        this.description = description;
        this.isCompleted = isCompleted;
        this.id = id;
    }   
    
}
