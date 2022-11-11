class laptop {
    constructor(name,ram,cpu){
        this.name = name
        this.ram = ram
        this.cpu = cpu
    }
}

var l1 = new laptop("DELL","4GB","I3");
var l2 = new laptop("HP","6GB","I7");
var l3 = new laptop("Sony","8GB","I9");
var a = [l1,l2,l3];
for(i=0; i<=2; i++){
    console.log(i+") \nBrand: "+a[i].name+"\nRam: "+a[i].ram+"\nCPU: "+a[i].cpu)
}