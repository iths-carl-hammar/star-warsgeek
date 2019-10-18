function foo(){  // function skapas och läggs åt sidan 
    let x = 100
    let y = x * 100 // local scoop 
    return x + y
}

function bar(){
    let asdf = "pmds"
    let omg = ""
    for(let char of asdf){
        omg += char // block scoop  char finns bara i loopen . 
    }
    return omg
}

function baz(){
    let a = foo()
    let b = bar()
    return a + b
}

baz() // globel scoop.