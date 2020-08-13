export interface ICaisseTable {
    id: number;
    is_irsal : boolean;
    montant: number;
    v_li:number;
    v_lehou : number;
}

export interface ICaisseLine{
    id?:number,
    lemien : number;
    lesien : number;
    montant : number;
    commentaire?:string;
    day:number;
    month:number;
    year:number;
  }

export interface ICaisseTableLines{
    irsal : ICaisseLine;
    istikbal : ICaisseLine
}



export interface ICaisse {
    id: number;
    ennatij: number;
    sold_hier: number;
    eddouvouaat:number;
    sold : number;
}

/*

    const msg = {
      isral : irsal_lineOne ,
      istikbal : istikbal_lineTwo 
    }

 */