import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

      ///  BrowserModule ve NgModule, default olarak geliyor. FormsModule u ise biz,  html de NgModel i kullanmak icin import ettik. two way binding icin. 
@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [TodoComponent],
})
export class AppModule {}
