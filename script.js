const Inventory_Data = {
    mask:{
        price:20,
        quentity:999
    },

    sanitizer:{
        price:1000,
        quentity:500
    },

    paracetamol:{
        price:50,
        quentity:900
    }


}

const Quentity_Mask = 10;
const Quentity_Sanitizer = 65;
const Quentity_Paracetamol = 20;

const Total_Mask = Inventory_Data ["mask"] ["price"] *Quentity_Mask;
const Total_Sanitizer = Inventory_Data ["sanitizer"] ["price"] *Quentity_Sanitizer;
const Total_Paracetamol= Inventory_Data ["paracetamol"] ["price"] *Quentity_Mask;


 const Ramesh_Bought =  Total_Mask +Total_Sanitizer + Total_Paracetamol;

console.log(Ramesh_Bought);