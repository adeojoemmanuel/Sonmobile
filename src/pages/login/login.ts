import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Signup } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  signup = Signup;
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){
    //Api connections
    this.nav.push(TabsPage);
  }
 
 
  createAccount() {
    this.nav.push('Signup');
  }
 
  public loginn() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.setRoot('TabsPage');
      } else {
       this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
     });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
