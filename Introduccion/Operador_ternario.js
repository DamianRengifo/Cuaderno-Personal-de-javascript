const boleto = 'vip'

// if (boleto == "vip"){
//     codigoAcceso = 'VIP-3214'
// } else{
//     codigoAcceso = 'REGULAR-3287432'
// }

const codigoAcceso = (boleto == 'vip') ? "VIP-312653" : "REGULAR-34241";
console.log(codigoAcceso)

// (boleto == 'vip') ? console.log("VIP-312653") : console.log("REGULAR-34241")