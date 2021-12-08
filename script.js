const array1 = ["alma", "körte", "banán"];
const array2 = ["barack", "szilva", "szőlő"];

//függvény aminek átadok tömböt + stringet

function addValueToEndOfArray (arr, val) {
    arr.push(val);
    return arr;
}

//console.log(addValueToEndOfArray(array1, "dió"));
//console.log(array1);

function addValueToEndOfNewArray (arr, val) {
    //const newArray = [...arr];
    //newArray.push(val);
    //const newArray = {...arr}; //atalakitja stringé
    //return newArray;
    return [...arr,val];
}

//console.log(addValueToEndOfNewArray(array2, "dió"));
//console.log(array2);

function addNewArray(arr1,arr2) {
    /*for (const item of array2) {
        arr1.push(item);
    }
    return arr1;
*/
//    return [...arr1,...arr2];
    return arr1.concat(arr2);
}
console.log(addNewArray(array1,array2));
console.log(array1);

// copy értelmezés/gyakorlás
/* 
let a = 1;
let b = a;
a = 2;

a = 2;
b = 3;

//console.log("a:",a," b: ",b);

let c = {
    key:1,
    key2:{
        subkey: 2
    }
};

let e = {key:1};
let g = c.key2;

//let d = c;
//c.key = 2;
//d.key = 3;

//console.log("c: ",c,"d :",d);
//console.log({}==={});
console.log(e===c);
console.log("alma" === "alma");

//let f = {...c}; //üres objectum tartalmat bemasolja, csak a tartalmat.  Nem jön letre az obj. belül egy obj. 

//spread és object.assign SHALLOW COPY, az obj nem copyzza

//let f = Object.assign({}, c);

let convertCobjectToString = JSON.stringify(c);

let f = JSON.parse(convertCobjectToString);
c.key = 2;
c.key2.subkey = 5;
f.key = 3;
f.key2.subkey = 6;
g.subkey = 8;
console.log("c: ",c,"f: ",f, "g: ", g);
// OBJ.assign és spread a beágyazott objektumok (más területen vannak)
*/



//Filter
const array3 = [{
    name: "Garfield",
    type: "cat"
    },
    {
    name: "Frakk",
    type: "dog"
    }
];
function filterTheCat (creatures) {
    /*
    const result =[];
    for (const creature of creatures) {
        if (creature.type=== "cat") {
            creature.note = "this is an amaazing cat";
            result.push(creature);
    
        }
    }
    return result;
*/

    const result = creatures.filter(creature => {
        if (creature.type === "cat") {
            //const newCreature = JSON.parse(JSON.stringify(creature));
            //newCreature["note"]="This is an amazing cat";
            //console.log(newCreature);
            return creature;
        }
    });
    //console.log(result);
    result[0].note="this is my amazing cat";
    return result;
}

console.log(filterTheCat(array3));
console.log(array3);
