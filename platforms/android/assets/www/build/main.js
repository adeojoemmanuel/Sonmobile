webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(nav, auth, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.signup = __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */];
        this.registerCredentials = { email: '', password: '' };
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        //Api connections
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    Login.prototype.createAccount = function () {
        this.nav.push('Signup');
    };
    Login.prototype.loginn = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                _this.nav.setRoot('TabsPage');
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    Login.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    Login.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\son\SonMobile\src\pages\login\login.html"*/`<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-content" padding>\n\n  <ion-row class="logo-row">\n\n    <ion-col></ion-col>\n\n    <ion-col width-67>\n\n      <img src="../../assets/imgs/avatar.png"/>\n\n    </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row>\n\n  <div class="login-box">\n\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n            \n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n            \n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n\n          <button ion-button class="register-btn" type="submit" block clear [navPush]="signup">Create New Account</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n    </form>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\son\SonMobile\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */], {}, { animate: false });
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\xampp\htdocs\son\SonMobile\src\pages\welcome\welcome.html"*/`\n\n\n\n\n\n<ion-content class="login-content" padding id="welcome">\n\n	<section class="login-container">\n\n		<div class = "col button-row text-center">\n\n           <img src="assets/imgs/son.png" class="logo"/>\n\n        </div>\n\n        <!-- <div class = "col button-row text-center">\n\n           <img src="./img/facebook-button.png" />\n\n        </div>\n\n        <div class = "col button-row text-center">\n\n           <img src="./img/email-button.png" />\n\n        </div> -->\n\n\n\n		<h1> Welcome to Son </h1>\n\n		<div>Discover some intersting things</div>\n\n\n\n		<button ion-button block class="marginTop" (click)="signup()">Signup</button>\n\n		<button ion-button block color="lightprimary" (click)="login()">Login</button>\n\n	</section>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\son\SonMobile\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		279,
		2
	],
	"../pages/signup/signup.module": [
		280,
		1
	],
	"../pages/welcome/welcome.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, alerCtrl) {
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.doAlert();
    };
    AboutPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'alert!',
            message: 'Track your application from here, and get updates!',
            buttons: ['Ok']
        });
        alert.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\xampp\htdocs\son\SonMobile\src\pages\about\about.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/son.png" class="navbarLogo" />\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="cards-bg">\n\n	<ion-card>\n\n\n\n	  <ion-card-content>\n\n	   You Have Not Made Any Application...\n\n	  </ion-card-content>\n\n\n\n	</ion-card>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\son\SonMobile\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    ContactPage.prototype.logout = function () {
        //Api Token Logout 
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\xampp\htdocs\son\SonMobile\src\pages\contact\contact.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/son.png" class="navbarLogo" />\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>SETTINGS</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-left></ion-icon>\n\n      @emmanuel.adeojo@yahoo.com\n\n    </ion-item>\n\n    <ion-item>\n\n      <button ion-button color="primary" (click)="logout()">Logout</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\son\SonMobile\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    HomePage.prototype.logout = function () {
        //Api Token Logout 
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\son\SonMobile\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="assets/imgs/son.png" class="navbarLogo" />\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-sm-12 col-md-6>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            SECTION A\n\n          </ion-card-header>\n\n\n\n          <ion-card-content>\n\n            <p>PARTICULARS OF THE ESTABLISHMENT .</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-sm-12 col-md-6>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            SECTION B\n\n          </ion-card-header>\n\n\n\n          <ion-card-content>\n\n            <p>PRODUCT DESCRIPTION/LIABILITY .</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-sm-6 col-md-3>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            SECTION C\n\n          </ion-card-header>\n\n\n\n          <ion-card-content>\n\n            <p>PRODUCT CONFIRMATION .</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-sm-6 col-md-3>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            SECTION D \n\n          </ion-card-header>\n\n\n\n          <ion-card-content>\n\n            <p>PAYMENT CONFIRMATION.</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\son\SonMobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { HomePage } from '../pages/home/home';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\son\SonMobile\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\xampp\htdocs\son\SonMobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Signup = (function () {
    function Signup(nav, auth, alertCtrl, navParams) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '', busNum: '' };
    }
    Signup.prototype.signup = function () {
        //Api connections
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Signup.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    Signup.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\xampp\htdocs\son\SonMobile\src\pages\signup\signup.html"*/`<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content class="login-content" padding>\n\n  <div class="login-box">\n\n    \n\n    <form (ngSubmit)="signup()" #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Business Number" name="busNum" [(ngModel)]="registerCredentials.busNum" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n            \n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n    </form>\n\n  </div>\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\son\SonMobile\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var User = (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                var access = (credentials.password === "pass" && credentials.email === "email");
                _this.currentUser = new User('Simon', 'saimon@devdactic.com');
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthService.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            // At this point store the credentials to your backend!
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\son\SonMobile\src\pages\tabs\tabs.html"*/`<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Track" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="cog"></ion-tab>\n\n</ion-tabs>\n\n`/*ion-inline-end:"C:\xampp\htdocs\son\SonMobile\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map