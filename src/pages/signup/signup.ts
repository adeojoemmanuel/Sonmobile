import { Component } from '@angular/core';
import { NavController, AlertController,NavParams,  IonicPage } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service';
 
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  createSuccess = false;
  registerCredentials = { email: '', password: '', busNum: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, public navParams: NavParams) { }
 
  signup(){
  //Api connections
  this.nav.push(TabsPage);
  }


  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}