class Mkulima{
    constructor(product,vendors,farm){
        this.product=[];
        this.vendors=[];
        this.farm=[];
    }
        
}
class addFarm extends Mkulima{
    constructor(farmId,farmName,farmerName,phone,address){
        super(farmId,farmName,farmerName,phone,address);
        console.log(this.farm.push(farmId,farmName,farmerName,phone,address))
    
    }
}

var farm= new addFarm(6432,"Solio","Yahya","0723467893",3570)
console.log(farm)


let Farm={
    farmId:66738,
    farmName:"Shamba",
    farmerName:"Imali",
    phone:"0115626974",
    address:345679,

    set Farm(updateFarm){
        return this.farm=updateFarm
    
    }
};
 console.log(Farm)

 let farms={
     farmId:25673,
     farmName:"shamba",
     farmerName:"Hamdi",
     phone:"0789765324",
     address:5324,
     get getfarm(){
         return this.farmId
     }
 };
 console.log(farms.getFarm)
    class addProduct extends Mkulima{
    constructor(productId,name,price){
     super(productId,name,price)
    console.log(this.product.push(productId,name,price))

  }
 }
let product2=new addProduct(80,"Rice",2500.25)
console.log(product2)

let product4=new addProduct(40,"Avocado",1500.00)
console.log(product4)



let products={
productId:22,
name:"lentils",
price:870,
set products(updateproducts){
return this.product=updateproducts
    }
}
console.log(products)
let product={
    productId:50,
    name:"Njahi",
    price:550,
    get getproducts(){
        return this.productId
    

console.log(products.getproduct)

function productList(){

    var Imani=" "
    return(Imani);

}
let items=["bread",150,pencils,30,"greens",70,"cereals",100];{
    console.log(items)
    let result=productList(Items);
    console.log(results)

    

}  
}
}

 