
export interface ICaisseExchangeSearsh { 
  no: string; 
  day:number;
  month:number;
  year:number;
  datetime:string
}

export interface ICaisseExchange extends ICaisseExchangeSearsh{ 
    montant: number;   
}

export interface ICaisseExchangeInDB extends ICaisseExchange{ 
  id:number;
  commentaire?:string;
}

export interface ICaisseToday { 
  eddouvouaat:number;
}

export interface ICaisseYames { 
  ressidYamiss:number;
}
