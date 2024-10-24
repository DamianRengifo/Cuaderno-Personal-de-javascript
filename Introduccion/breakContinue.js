const nombres = ["Damian", "Sergio", "Angel", "Miguel", "Daza", "Super Boy"]

for(let i = 0; i < nombres.length; i++){
    
    if(nombres[i][0] == 'A'){
        console.log(nombres[i] + " Empieza por la letra A");
        break
    } 
    console.log(nombres[i]);
}

for (let i = 0; i < nombres.length; i++) {
    if(nombres[i] == "Daza"){
        continue
    }

    console.log(nombres[i]);
}