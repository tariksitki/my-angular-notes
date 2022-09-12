
// Bu dosyada; todo.component.ts dosyasi icinde kullandigimiz action gibi bilgilerin model atamasini yapacagiz. Sebebi ise; html dosyasina gittigimizde hatali yazim ile error a sebep olmamak. 


/// Önemli: Burada olusturdugumuz model icinde eger constructor tanimlamak istemiyorsak Bu durumda;  tsconfig.json dosyasi icinde "strictNullChecks": false kodunu yazmamiz gerekir. true yaparsak tanimlamak zorundayiz. 


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
    // Buradaki önemli Husus; td isimli degiskene atama yaparken, TodoItem() icinde herhangi bir property girmesek de calisir. Ve böylece td degiskenine yeni bir nesne atamasi yaptiktan sonra, bunun property lerine ulasip degisiklik yapabiliirz. 
    // asagidaki kodu calistirdigimizda hata aliriz. Bu hatayi ortadan kaldirmak icin; tsconfig.json dosyasindaki strict kismi false yapmamiz gerekir. 

// export class TodoItem {
//     description : string;
//     action : string;
// };

// const td = new TodoItem();

// td.description = "Lunch";
// td.action = "YES";



