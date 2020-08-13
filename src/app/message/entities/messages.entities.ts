export interface IMessage{
    no : string;
    destination:string;
    tel: number;
    montant: number;
    lemien:number;
    lesien : number;
    year: number;
    month: number
    day: number;
}

export interface IMessageForm{
    id?:number,
    no : string;
    destination?:string;
    tel?: number;
    montant?: number;
    lemien?:number;
    lesien? : number;
    year?: number;
    month?: number
    day?: number;
}

export interface IMessageSearsh {
  no : string;
  year: number;
  month: number
  day: number;
}

export interface IMessageInDB extends IMessage{
    id: number;
}

  
export interface IMessageSearshOne extends IMessageSearsh {
}
  
export interface IMessageSearshTwo extends IMessageSearsh{
    tel: number;
}
  
export interface IMessageSearshThree extends IMessageSearsh{
    montant: number;
} 
  
  