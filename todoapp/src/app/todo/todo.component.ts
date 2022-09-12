import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private name : string = "Tarik";  // bu bilgiyi html de dynamic olarak kullaniriz. 
                            // disaridan erisilmesin diye private yaptik ve sadece string deger girilebilmesini istedik. int girince hata
  getName () {
    return this.name;
  }

  items1 = ["item1", "item2", "item3", "item4"];  

  items2 : any[] = [
    {id : 1, description : "breakfast", action : "yes" },
    {id : 2, description : "dinner", action : "yes" },
    {id : 3, description : "launch", action : "no" },
  ]

}


// cli ile component ekledigimizde, default olarak;  OnInit i implement eder yani onInit in gerekliliklerini yerine getirir. Ihtiyacimiz olmadiginda silebiliriz. 

// angcomponent;  yeni bir component manuel olusturunca ana yapiyi kurar. snippet

// burada tanimlanan action gibi verileri, html dosyasinda yanlis yazdigimizda hicbir hataya sebebp olmaz. ancak ekranda verilerimizi göremeyiz. Bu nedenle bu tarz verileri kullanirken ya bir class model tanimlamasi yada interface kullanmamiz gerekir. 

// any[]  zaten default degerdir. yani herhangi birsey girilebilsin ve bu array olsun diyoruz. bunu yazdigimizda da action i html de hatali yazarsak hata vermez. Bu nedenle biz model tanimlamasi yapacagiz. 

