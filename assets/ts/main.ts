// let URLapi = "./starter/abbigliamento.json";


// document.addEventListener("DOMContentLoaded", () =>{
// function presa () {
//     let esp1 = fetch (URLapi)
//     console.log(esp1)
// }
// presa()
// })


// class abbigliamenti {
//     private id:number;
//     private codprod:number;
//     public collezione?:string;
//     public capo?:string;
//     protected modello?:number;
//     public quantità?:number;
//     public colore?:string;
//     protected prezzoivaesclusa?:number;
//     protected prezzoivainclusa?:number;
//     protected disponibile?:string;
//     protected saldo?:number;
//     constructor(id :number , codprod:number,collezione:string,capo?:string,modello?:number,quantità?:number,colore?:string,prezzoivaesclusa?:number,prezzoivainclusa?:number,disponibile?:string,saldo?:number,){
//         this.id = id;
//         this.codprod = codprod;
//         this.collezione = collezione;
//         this.capo = capo;
//         this.modello = modello;
//         this.quantità = quantità;
//         this.colore = colore;
//         this.prezzoivaesclusa = prezzoivaesclusa;
//         this.prezzoivainclusa = prezzoivainclusa;
//         this.disponibile = disponibile;
//         this.saldo = saldo;
//         }
//     getsaldocapo(){
//        let scontoFinale = ((this.prezzoivainclusa * 60) /100)
//        return scontoFinale
//     };
//     getAcquistocapo(){
//         let prezzoFinale = this.prezzoivainclusa - scontoFinale
//         return prezzoFinale
//     };
// }


// interpretazione del professore:
// ci sono due modi per scrivere la stessa cosa conviene questa 
class abbigliamento {
    // id:number;                 
    // codprod:number;
    // collezione:string;
    // capo:string;
    // modello:number;
    // quantità:number;
    // colore:string;
    // prezzoivaesclusa:number;
    // prezzoivainclusa:number;
    // disponibile:string;
    // saldo:number;
    constructor(
        public id :number , 
        public codprod:number,
        public collezione:string,
        public capo:string,
        public modello:number,
        public quantità:number,
        public colore:string,
        public prezzoivaesclusa:number,
        public prezzoivainclusa:number,
        public disponibile:string,
        public saldo:number,){
    this.id = id;
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantità = quantità;
    this.colore = colore;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.prezzoivainclusa = prezzoivainclusa;
    this.disponibile = disponibile;
    this.saldo = saldo;
    }
    getsaldocapo():number{
        return this.prezzoivainclusa * this.saldo / 100
    }
    getacquistocapo():number{
        return this.prezzoivainclusa - this.getsaldocapo()
    }
}

let capiabbigliamento: abbigliamento[] = [];

fetch('./starter/abbigliamento.json')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.error(err))

function getCapi (dati:any[]){
    dati.forEach(ele =>{
        let {
            id,                 
            codprod,
            collezione,
            capo,
            modello,
            quantità,
            colore,
            prezzoivaesclusa,
            prezzoivainclusa,
            disponibile,
            saldo,
        } = ele;
        capiabbigliamento.push(
            new abbigliamento(
                id,                 
            codprod,
            collezione,
            capo,
            modello,
            quantità,
            colore,
            prezzoivaesclusa,
            prezzoivainclusa,
            disponibile,
            saldo,
            ))
    })
    displaycapi(capiabbigliamento)
}

function displaycapi(arr: abbigliamento[]){
    console.log(arr)
}