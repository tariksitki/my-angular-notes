import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '#app-root',
  // selector: '.app-root',
  selector: 'app',
  // templateUrl: './app.component.html',
  // template url kullanmak zorunda degiliz. template deki tüm kodlari burada yazabiliriz.
  template: `
    <h1>app component html page</h1>
    <h2>{{ title }}</h2>
    <h2>{{ getTitle() }}</h2>
    <h2>{{ todoProperty.description }}</h2>
    <h2>{{ todoProperty.action }}</h2>
    <p>{{ lands }}</p>
    <p>{{ lands[0] }}</p>
  `,

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // bu da asagidaki kod ile aynidir.
  // public title = 'title of our component';
  title = 'title of our component';

  // private title = 'title of our component';

  // method tanimlayarak template de veri kullanimi
  getTitle() {
    return this.title;
  }

  // class a ait property tanimlama; (todoProperty üstüne mouse ile gelince property oldugunu söyler)
  //   todoProperty : any = {
  //     description : "Frühstück",
  //     action : true
  //   }
  // }
  todoProperty = {
    description: 'Frühstück',
    action: true,
  };

  // property farkli formatlarda olabilir:
  lands = ['Deutschland', 'England', 'USA'];
}

// component icerikleri dict formatinda yazilir.

// class imiz üzerinde bir component decorator ü kullanilir. Bunun sebebi:
// component imiz ile bu component a ait selector, templateUrl ve styleUrls lerin birbiri ile iliskilerinin kurulmasidir.

// Biz projemizi olusturdugumuzda, otomatik olarak component e title atanir. Ve typescript de bir class icerisinde tanimlanan bir deger public olarak isaretlenir. Bu nedenle biz title gibi bu verileri direkt olarak component imizin html inde kullanabiliyoruz.
//  {{ title }}  seklinde.

// eger private olursa; bu durumda sadece söz konusu o class icinden erisim saglanabilir. yani component a ait html dosyasindan erisim saglanamaz.

// yani typescript de default public tir.
