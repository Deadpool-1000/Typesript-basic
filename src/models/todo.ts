class todo {
    id:string;
    name:string;
    constructor(todoName:string){
        this.name=todoName;
        this.id = new Date().toISOString();
    }
}

export default todo;