import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {

  }
  ionViewDidLoad() {
    this.doAlert();
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'alert!',
      message: 'Track your application from here, and get updates!',
      buttons: ['Ok']
    });
    alert.present()
   }	
}
