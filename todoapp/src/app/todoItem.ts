
// Bu dosyada; todo.component.ts dosyasi icinde kullandigimiz action gibi bilgilerin model atamasini yapacagiz. Sebebi ise; html dosyasina gittigimizde hatali yazim ile yani syntax hatasi ile error a sebep olmamak. 


/// Önemli: Burada olusturdugumuz model icinde eger constructor tanimlamak istemiyorsak Bu durumda;  tsconfig.json dosyasi icinde "strictNullChecks": false kodunu yazmamiz gerekir. true yaparsak tanimlamak zorundayiz. 

// const td = new TodoItem("breakfast", "yes");   bu sekilde yeni bir nesne olustururken parantez icinde property girmek istersek, bu durumda constructor atamasi yapmak zorundayiz. 


    /// 1. Yöntem: constructor tanimlayarak;
    // Burada önemli olan husus su;   td degiskenine atama yaparken; TodoItem() icinde gerekli bilgilerin girilmis olmasi gerekir. 

// export class TodoItem {
//     description : string;
//     action : string;

//     constructor(description : string, action : string) {
//         this.description = description,
//         this.action = action;
//     }
// };

// const td = new TodoItem("breakfast", "yes");






    /// 2. Yöntem:  tanimlamadan;
    // Buradaki önemli Husus; td isimli degiskene atama yaparken, TodoItem() icinde herhangi bir property girmesek de calisir. Ve böylece td degiskenine yeni bir nesne atamasi yaptiktan sonra, bunun property lerine ulasip degisiklik yapabiliriz. 
    // asagidaki kodu calistirdigimizda hata aliriz. Cünkü typeScript bu kullanima izin vermez. Bu hatayi ortadan kaldirmak icin; tsconfig.json dosyasindaki strict kismi false yapmamiz gerekir. Bu ayar eger True ise bu durumda constructor atamasi yapmak zorundayiz. constructor atamasi yapinca da, yeni nesne olustururken, parantez icinde deger atamasi yapmak zorundayiz. 

// export class TodoItem {
//     description : string;
//     action : string;
// };

// const td = new TodoItem();

// td.description = "Lunch";
// td.action = "YES";







        ////  3. Yöntem:  1. Yöntemin kisaltmis halidir. 1. Yöntemde; constructor tanimlamasi yapmadan önce property tanimlamasi yapmistik. Burada ise buna ihtiyac kalmayacak. Direkt olarak herseyi constructor icinde tanimlayacagiz. Ancak burada public yada privat tanimlamasi yapmak zorundayiz. Eger public olarak atama yaparsak, nesne tanimladiktan sonra td.action diyerek property lerine ulasabiliriz. private olursa ulasamayiz. html sayfasinda ulasmak istedigimiz verilerde public olmalidir. 


// export class TodoItem {
//   constructor(public description: string, public action: string) {
//     this.description = description,
//     this.action = action;
//   }
// }

// const td = new TodoItem("Sport", "Yes");
// td.action = "SportSport"; // private de bu ulasma mümkün olmaz.
// td.description = "No";






        ////////// 4. Yöntem: class yerine interface kullanmak. interface de constructor olmaz cünkü burada nesne üretmiyoruz. sadece olusturmak istedigimiz object lerin bir semasini burada olusturuyoruz. Bu sema icinde bizim istedigimiz bilgiler bulunur. Burada public gibi bir erisim belirteci de tanimlamiyoruz. sadece sema tanimlanir. interface tanimlamasinda; component sayfasinda kullanirken, constructor da oldugu gibi kullanilmaz. bunun yerine; burada sablonda tanimladigimiz degerleri orada isimleri ile yazmamiz gerekir. Yani buradaki kullanim; biraz django daki model yapisina benzer. 


export interface TodoItem {
  description: string;
  action: boolean;
}