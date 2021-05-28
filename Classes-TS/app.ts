class Department{
    name: string;

    constructor(n:string) {
        this.name = n;
    }

    getName(){
        return 'The department name :' + this.name;
    }
}

const accounting = new Department('Accounting');

console.log(accounting);

console.log(accounting.getName());