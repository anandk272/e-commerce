export interface Item{
    id:number,
    image:string,
    description:string,
    price:number,
    category:string,
    title:string,
    rating:{rate:number,count:number},
}
export interface CartItem{
    id:number,
    image:string,
    description:string,
    price:number,
    category:string,
    title:string,
    rating:{rate:number,count:number},
    count:number

}
