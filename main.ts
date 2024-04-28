//advance returning arrow functions
let address = (city : string, area: string) :string => {
   
    return city +", "+ area
}
let response : string = address("seoul","Gangdong-gu") //arguments
console.log(response);  //output seoul, Gangdong-gu

