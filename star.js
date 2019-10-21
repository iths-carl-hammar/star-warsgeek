


async function getSpaceship(url){
    let response = await fetch("https://swapi.co/api/starships/12/")
    let body = await response.json(url)
    return body.model
}


async function getPlanet(url){
    let response = await fetch(url) // End points 
    let body = await response.json(url) 
    return body.name // använd dot för = body.name för vad du vill ha
}


async function getData(url){
    // fetch and wait for to finish
    url = 'https://swapi.co/api/people/'
    let response = await fetch( url )
    
    
    
    // convert and wait for data to be convert to json.
    let responseBody = await response.json()
    // return the array of users
    
    return responseBody.results
}

async function render(){
    // call and wait for getData()
    let list = await getData()
    
    // store the <ul> tag
    let ul = document.querySelector("ul")
    
    
    // store the <li> class"spicese"> tag
    let itemPrototype = document.querySelector("li.species") // min display none lista
    // itearte over each user
    for(let item of list){
        
        // Copy the prototype and remove the prototye class
        let newItem = itemPrototype.cloneNode(true)
        
        newItem.classList.remove("species")
        newItem.setAttribute("planet",item.homeworld) // länken som vissas url på sidan
        
        newItem.addEventListener("click",async function(){
            document.body.querySelector(".text").innerText = item.homeworld;
            let list1 = await getPlanet( item.homeworld)
            document.body.querySelector(".h1").innerText = list1 ;
            let list2 = await getSpaceship(item.starships)
            document.body.querySelector(".h2").innerText = list2 ;
            
            
            
        })
        let p = newItem.querySelector("p")
        p.innerText = item.name
        
        ul.append(newItem)
        
        // change
        
        
        
    }
    
};


render();



// h1.append(newItem
//let input = document.querySelector(".text");
//input.addEventListener("click", function(){
//  document.body.querySelector(".planets").textContent +=  input +"hello man ";
// p.innerText = item 
// let section = document.querySelector("section")
//   section.appendChild(planets)
//   let  planets = document.createElement("h1")
//let h1 = name.querySelector("h1")
// h1.append(name)
// h1.innerText = homeworld.item