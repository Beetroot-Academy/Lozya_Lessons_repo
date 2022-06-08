//Min 1

class Product {
    constructor(name, ammount, price) {
        this.name = name,
            this.ammount = ammount,
            this.price = price,
            this.summ = price * ammount,
            this.isBuy = false;
    }
}

let tomato = new Product(`tomato`, 2, 20);
let cucumber = new Product(`cucumber`, 1, 4);
let feta = new Product(`feta`, 1, 40);
let mango = new Product(`mango`, 2, 70)

let shoppingList = [tomato, cucumber, feta, mango]

//Min 1.1

function alertShopList(arr) {
    function byField(field) {
        return (a) => a[field] === true ? -1 : 1;
    }

    arr.sort(byField(`isBuy`))
    console.log(`    The Buy List`);
    arr.map((obj) => {
        return console.log(`
        Product: ${obj.name},
        Ammount: ${obj.ammount},
        Price: ${obj.price} grn,
        Summary: ${obj.summ} grn,
        Is it buy: ${obj.isBuy};
        `)
    })
}

// Min 1.2
function buy(arr, product) {
    let index
    if (arr.includes(product)) {
        index = arr.indexOf(product);
        return arr[index].isBuy = true
    } else {
        console.log(`This prod is not found`);
    }
}

//Min 1.3

function alertNotBuyProds(arr) {
    let notBuyList = arr.filter((obj) => obj.isBuy === false)
    console.log(`   The not Buy List`);
    notBuyList.map((obj) => {
        return console.log(`
        Product: ${obj.name},
        Ammount: ${obj.ammount},
        Price: ${obj.price} grn,
        Summary: ${obj.summ} grn,
        Is it buy: ${obj.isBuy};
        `)
    })

}


//Norm 1
function deleteFromList(arr, product) {
    let index = arr.indexOf(product);
    let listWithoutItem = arr.slice();
    listWithoutItem.splice(index, 1);
    return listWithoutItem;

}
//Norm 2

function addToList(arr, product, ammount, price) {
    let search = arr.filter((obj) => obj.name == product)
    let newProduct;
    if (search.length === 0) {
        newProduct = new Product(`${product}`, ammount, price)
        arr.push(newProduct)
        return arr
    } else {
        arr.map((el) => {
            if (el.name === product) {
                el.ammount += ammount;
                el.summ = el.price * el.ammount;
                el.isBuy = false;
            }
            return
        })
        return arr
    }
}

let withoutTomato = deleteFromList(shoppingList, tomato)
buy(shoppingList, mango)
buy(shoppingList, feta)
buy(shoppingList, cucumber)
alertNotBuyProds(shoppingList)
console.log(withoutTomato);
addToList(shoppingList, `banana`, 4, 10);
alertShopList(shoppingList)
addToList(shoppingList, `cucumber`, 8, 20)
alertShopList(shoppingList)