function foo(){  // function skapas och läggs åt sidan 
    let x = 100
    let y = x * 100 // local scoop 
    return x + y
}

function bar(){
    let asdf = "kalle";
    
    let omg ={
        name: "kalle",
        makecake: ()=>{
            this.cake += 'banan'
            return this
        }
    }
 omg.makecake()
    
    for(let char of asdf){
        omg += char // block scoop  char finns bara i loopen . 
        
    }
    return omg
    
};


function baz(){
    let a = foo()
    let b = bar()
    return a + b
};

let word = function(){
    let shade = document.querySelector("hello");
    let li = document.createElement("li");
    li.classList.replace("ul.li");
    li.addEventListener("click", ()=>{
        let 
         li.append()
    })
    
}

function zombie (name){
    this.name = name; 
    this.reanimated = Date.now();

    this.eatBrean = function(){
        return `${this.name} is hungry for brain`;
    }

}
const obj = new zombie('kalle');
console.log(obj.eatBrean());  // this key word obj.

