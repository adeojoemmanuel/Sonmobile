import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  App } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  logout(){
    //Api Token Logout 
    const root = this.app.getRootNav();
    root.popToRoot();
  }
  
}
