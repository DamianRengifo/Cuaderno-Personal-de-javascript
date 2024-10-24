const data = [
    {
        marca: "Tesla",
        modelo: "Model S Plaid",
        año: 2022,
        color: "negro",
        precio: 129990,
        características: ["Autonomía de 390 millas", "Aceleración de 0 a 60 mph en 1.99 segundos"]
    },
    {
        marca: "Porsche",
        modelo: "Taycan Turbo S",
        año: 2023,
        color: "gris",
        precio: 185000,
        características: ["Autonomía de 200 millas", "Aceleración de 0 a 60 mph en 2.6 segundos"]
    },
    {
        marca: "Ferrari",
        modelo: "SF90 Stradale",
        año: 2022,
        color: "rojo",
        precio: 625000,
        características: ["Potencia total de 986 caballos de fuerza", "Aceleración de 0 a 60 mph en 2.5 segundos"]
    }
];

function getData(){
    return new Promise((resolve, reject) => {
        if (data.length == 0){
            reject(new Error("Los datos estan vacios"))
        }
        
        setTimeout(() => {
            resolve(data);
        }, 4000);
    })
}

getData()
    .then((response) => console.log(response))
    .catch((err) => console.log(err.message));