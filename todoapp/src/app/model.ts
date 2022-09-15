
    // tüm component lerden erisim saglanmasi icin bir model üretiyoruz. 
    // burada name ve items in bos olma ihtimaline karsi hata verir. bunu gidermek icin, ya strictnullcheck i false yapariz. yada constructor tanimlamasi yapariz.
    // bu class dan yeni bir nesne olustururken, parametre yerine degerler atamak zorunda degiliz. Bunun icin constructor icinde degerler önceden atanir. 

    // name icinde items icinde atamalar burada yapiliyor. Bu nedenle bunlara, tekrardan component icinde veri atamamiza gerek yok. 

    // Biz new Model dedigimizde constructor calisacak ve bizim burada verdigimiz degerler atanacak. component icinde yazdigimiz name e de ihtiyac kalmayacak. 

    // Buradaki model i baska baska component larda kullanabiliriz. Ancak her segerinde new Model dememiz gerekir. Bu durumda her bir new Model dedigimizde; yeni bir referans olusur, eski model üzerine yazmaz. Bunun önüne gecebilmek icin service kullanacagiz. 

import { TodoItem } from "./todoItem";

export class Model {
    name : string;
    items : TodoItem[];  // bunun liste olmasi önemli. interface den gelir.

    constructor() {
        this.name = 'Tarik';
        this.items = [
          { description: 'breakfast', action: true },
          { description: 'dinner', action: true },
          { description: 'launch', action: false },
        ];
    }
}

// Not: modelimizi, interface den olusturdugumuz icin, mesela action in veri type inda degisiklik yaparsak burada hata aliriz. Önce gidip interface de degisiklikk yapmamiz gerekir. ve component da veri girerken de bu type a uygun veri girmek gerekir. 


