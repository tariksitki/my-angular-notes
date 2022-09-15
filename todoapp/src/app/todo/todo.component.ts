import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {
    // component ilk calistiginda local storage dan verileri cekmek icin
    this.model.items = this.getItemsFromLocalStorage();
  }

  ngOnInit(): void {}

  // bu normal klasik name kullanimi idi. ama biz model olusturdugumuz icin model icinde name olusturduk. O nedenle buradaki name e ihtiyac kalmadi.
  // private name: string = 'Tarik'; // bu bilgiyi html de dynamic olarak kullaniriz.
  // // disaridan erisilmesin diye private yaptik ve sadece string deger girilebilmesini istedik. int girince hata
  // getName() {
  //   return this.name;
  // }

  items1 = ['item1', 'item2', 'item3', 'item4'];

  // bu normal kullanim sekliydi. Biz syntax hatasi yapmamak icin todoItem.ts dosyasinda class olusturduk. simdi buradaki degerleri bu class dan türetecegiz.
  // items2 : any[] = [
  //   {id : 1, description : "breakfast", action : "yes" },
  //   {id : 2, description : "dinner", action : "yes" },
  //   {id : 3, description : "launch", action : "no" },
  // ]

  // html de for loop kullanacagimiz icin burada array kullandik. Yani array icinde, her bir verimiz object seklinde. yani json formati oluyor.
  // class tanimlarken constructor icinde id tanimlamasi yapmadigimiz icin burada id kullanmadik:

  // items2: TodoItem[] = [
  //   new TodoItem('breakfast', "Yes"),
  //   new TodoItem('Sport', "Yes"),
  //   new TodoItem('Launch', "No"),
  // ];

  ///// interface tanimlamasi:
  // interface tanimlarken, id atamadigimiz icin burada sablonumuza aynen uymemiz gerekir. yani burada id atamasi yaparsak hata verir. django model gibi yani.
  // class tanimlamasi yaptiysak degerleri new ile tanimlariz burada.  interface kullandiysak ise, object notation u asagida oldugu gibi parantez icinde tanimlariz.

  // items2: TodoItem[] = [
  //   {description: 'breakfast', action: 'yes' },
  //   {description : "dinner", action : "yes" },
  //   {description : "launch", action : "no" },
  // ];

  /// class larimizin baska component lerden de erisilir olmasi icin, model.ts de bir model tanimlamasi yapiyoruz. model.ts bu component disinda olusturulur ki diger component lardan da erisilsin.

  model = new Model();
  getName() {
    return this.model.name; // yukarida tanimladigimiz name e ihtiyac kalmadi
  }

  // model tanimlamasi yaptik ama birde html de for loop ile kullandigimiz items lara ihtiyacimiz var. Bunun icin bir method kullniriz.
  // ekrandaki display all tusu tiklanmis ise hepsini göster, tiklanmamis ise sadece action i false olanlari göster:

  getItem() {
    if (this.displayAll) {
      return this.model.items;
    }
    // return this.model.items.filter((item) => item.action === false)
    return this.model.items.filter((item) => !item.action); // yani false ise
  }

  ///////  events:
  // sadece input ismini yazmamiz yetmez, birde type girmemiz gerekir.
  // addItem(txtItem : any) {
  //   console.log(txtItem);
  //   console.log(txtItem.value);
  // }

  // message diye bir degisken tanimlayacagiz, bunu html de ekrana yazacagiz ve button vasitasi ile bu mesaji degistirecegiz:
  // input vasitasi ile inputun valuesu  buraya gönderilir. buraya gelen deger message icine atilir. sonra html e gidilerek buradaki message yazdirilir.
  message = '';

  /// Burada, html den buraya direkt inputun valuesunu gönderiyoruz:
  // burada yakalarken value olarak yakalamak zorunda degiliz isim farkli olabilir.
  // Önemli: inputun value su alindiktan sonra inputun icini sifirlama react da oldugu gibi component de yapilmiyor. html de button tagi icinde yapilir

  // butona ait class i dinamic olarak input a veri girilmediginde disabled yapmak icin bunu kullaniyoruz.
  inputText: string = '';

  // two way binding yapmadan önce, html de butona click eklemistik ve bu click icinde addItem methodunu cagiriyorduk. Bu method icine de input un valuesunu koyup buraya gönderiyorduk. Burada karsilayip kullaniyorduk.Yani, bir todo ekleyecegimiz zaman, bu todo nun description ina bu value yu yaziyorduk yada html de bu value yu akranda göstermek icin, buradaki degisken ismini {{}} icine yazip kullaniyorduk. Ancak simdi, html de ngModel yani two way binding kullandik. Böyle olunca oradan buraya veri göndermeye ihtiyac kalmadi. Burada sadece inputText tanimladik ve bunu html de ki ngModel e bagladik. O 2 yönlü hareketli hale gelmis oldu.

  // addItem(value: string) {
  //   // input value su string gelir.
  //   // console.log(value);
  //   // console.log(value);
  //   // this.message = value;

  //   /// model de bulunan 3 tane object e object ekleme:
  //   // interface kullandigimiz icin, ayni formattda veri push etmek gerekir.
  //   // modelimiz de items liste oldugu icin push yaptik
  //   if (value) {
  //     this.model.items.push({ description: value, action: false });
  //   } else {
  //     alert('Please Enter a Value');
  //   }
  // }

  /// addItem methodu yeni hali. ngModel yani 2 way binding ile kullanim:
  addItem() {
    // input value su string gelir.
    // console.log(value);
    // console.log(value);
    // this.message = value;

    /// model de bulunan 3 tane object e object ekleme:
    // interface kullandigimiz icin, ayni formattda veri push etmek gerekir.
    // modelimiz de items liste oldugu icin push yaptik
    if (this.inputText !== '') {
      let data = { description: this.inputText, action: false };
      this.model.items.push(data);
      // local den bilgiyi cekme
      let items = this.getItemsFromLocalStorage();
      // yeni bilgiyi üzerine yazma
      items.push(data);
      // ve tekrar push etme:
      localStorage.setItem('items', JSON.stringify(items));
      // local storage da sadece string tipinde veri tutulabilir.
      this.inputText = ''; // eskiden input icini sifirlama islemi html de yapiliyordu
    } else {
      alert('Please Enter a Value');
    }
  }

  // local storage dan veri ceken func:
  // Bu func constructor da da calistirilir.
  getItemsFromLocalStorage() {
    let items: TodoItem[] = []; // todoitem diyerek tip atamasi yaptik.
    let value = localStorage.getItem('items');
    if (value != null) {
      items = JSON.parse(value);
    }
    return items; // Cok önemli. return demezsek, component icinde items görülmez
  }

  //// two way binding:
  displayAll: boolean = false;

  // keyup event i ile yaptigimiz islemi ngModel ile daha kolay yapmak:
  selam = 'selam';

  // tamamlanan todo larin sayisini html de yazacagiz.
  completedTodo() {
    return this.model.items.filter((item) => item.action).length; // yani true larin sayisi
  }

  // buttonumuzun class larini html de degil buradan yapiyoruz. Bunun icin bir method yaziyoruz. Burasi component sayfasi oldugu icin ve biz class kullandigimiz icin hepsinin basina this koymaliyiz.
  //  :  dan sonraki kisimlar true ise dolayisi ile sol tarafin karsiligi true oluyor

  getButtonClasses() {
    return {
      'bg-primary': this.inputText.length > 0,
      'btn-secondary': this.inputText.length == 0,
      disabled: this.inputText.length == 0,
    };
  }

  /// action i degistirme checkbox ina her bastigimizda, localstorage daki action da degismesi icin html de checkbox imiz da change kullandik. Bu change icine bir method yazdik. Burada bu methodu tanimliyoruz. parametre olarak aldigi item a da type atamasi yaptik. 

  ActionChangeMethod(item : TodoItem) {
    // console.log(item)
    let todos = this.getItemsFromLocalStorage(); // localden tüm verileri cekme
    localStorage.clear()  // localden verileri alip icini bosaltiyoruz.yeni göndercez
      // loaclden gelen veriler artik burada elimizde. local bosaldi.
    todos.forEach((todo) => {
      if (todo.description == item.description) { //üzerine tiklanan todo yakalama
        todo.action = item.action
      }
    })
      // elimizdeki todolarin arasindan üzerine tiklananin action i degistirildi. simdi tüm todolari yenilenmis hali ile yeniden local a push ediyoruz.
    localStorage.setItem("items", JSON.stringify(todos))
  }
}












// cli ile component ekledigimizde, default olarak;  OnInit i implement eder yani onInit in gerekliliklerini yerine getirir. Ihtiyacimiz olmadiginda silebiliriz. 

// angcomponent;  yeni bir component manuel olusturunca ana yapiyi kurar. snippet

// burada tanimlanan action gibi verileri, html dosyasinda yanlis yazdigimizda hicbir hataya sebebp olmaz. ancak ekranda verilerimizi göremeyiz. Bu nedenle bu tarz verileri kullanirken ya bir class model tanimlamasi yada interface kullanmamiz gerekir. 

// any[]  zaten default degerdir. yani herhangi birsey girilebilsin ve bu array olsun diyoruz. bunu yazdigimizda da action i html de hatali yazarsak hata vermez. Bu nedenle biz model tanimlamasi yapacagiz. 

