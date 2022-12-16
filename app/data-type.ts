export interface signUp{
    name:string,
    password:string,
    email:string,
    length:string
}
export interface login{
    email:string,
    password:string
}
export interface product{
    length: number
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number,
    quantity:undefined |number
}