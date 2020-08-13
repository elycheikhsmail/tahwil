import { ICaisseLine, ICaisseTableLines, ICaisseTable}  from './caisse.entities'

export const caisseTable:ICaisseTable[] = [
    {
        id:1,
        is_irsal:true,
        montant:30000,
        v_lehou:200,
        v_li:200,
    }
    ,
    {
        id:2,
        is_irsal:false,
        montant:40000,
        v_lehou:200,
        v_li:200,
    }
    ,
    {
        id:3,
        is_irsal:true,
        montant:30000,
        v_lehou:200,
        v_li:200,
    }
]

export const caisseDataIrsal:ICaisseLine = {
   lemien:40,
   lesien:40,
   montant:4000,
   commentaire:"",
   day:1,
   month:12,
   year:2020

}





export const caisseDataIstikbal:ICaisseLine= {
    lemien:40,
    lesien:40,
    montant:4000,
    commentaire:"",
   day:1,
   month:12,
   year:2020
 }

export const caisseDataTable:ICaisseTableLines= {
    irsal:caisseDataIrsal,
    istikbal:caisseDataIstikbal
}
