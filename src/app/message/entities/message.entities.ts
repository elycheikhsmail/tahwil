export interface IMessage  {
  no : string;
  destination:number;
  tel: number;
  montant: number;
  lemien:number;
  lesien : number;
  year: number;
  month: number
  day: number;
}

export interface IMessageInDB extends IMessage {
  id: number; 
}

export interface MessageSearshOneSchema  {
  no : string; 
  datetime:string;
}

export interface IMessageSearshOne extends MessageSearshOneSchema {
 
}

export interface IMessageSearchByPhone extends MessageSearshOneSchema {
  tel: number;
}


export interface IMessageSearchByMontant extends MessageSearshOneSchema  {
  montant: number;
}  
