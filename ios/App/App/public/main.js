(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'start-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_start-screen_start-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./start-screen/start-screen.module */ 6748)).then(m => m.StartScreenPageModule)
    },
    {
        path: 'sign-in-screen',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sign-in-screen_sign-in-screen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in-screen/sign-in-screen.module */ 174)).then(m => m.SignInScreenPageModule)
    },
    {
        path: 'home-page-screen-after-login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home-page-screen-after-login/home-page-screen-after-login.module */ 1669)).then(m => m.HomePageScreenAfterLoginPageModule)
    },
    {
        path: 'contactus',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contactus_contactus_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contactus/contactus.module */ 8037)).then(m => m.ContactusPageModule)
    },
    {
        path: 'mypolicies',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_mypolicies_mypolicies_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mypolicies/mypolicies.module */ 1796)).then(m => m.MypoliciesPageModule)
    },
    {
        path: 'explore-screen-before-login-expanded',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_explore-screen-before-login-expanded_explore-screen-before-login-expanded_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./explore-screen-before-login-expanded/explore-screen-before-login-expanded.module */ 3291)).then(m => m.ExploreScreenBeforeLoginExpandedPageModule)
    },
    {
        path: 'explore-screen-before-login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_explore-screen-before-login_explore-screen-before-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./explore-screen-before-login/explore-screen-before-login.module */ 1741)).then(m => m.ExploreScreenBeforeLoginPageModule)
    },
    {
        path: 'get-quote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_get-quote_get-quote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./get-quote/get-quote.module */ 682)).then(m => m.GetQuotePageModule)
    },
    {
        path: 'verify-policy-screen-cust',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_verify-policy-screen-cust_verify-policy-screen-cust_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verify-policy-screen-cust/verify-policy-screen-cust.module */ 7956)).then(m => m.VerifyPolicyScreenCustPageModule)
    },
    {
        path: 'renewals',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_renewals_renewals_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./renewals/renewals.module */ 2433)).then(m => m.RenewalsPageModule)
    },
    {
        path: 'makeaclaim',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_makeaclaim_makeaclaim_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./makeaclaim/makeaclaim.module */ 3268)).then(m => m.MakeaclaimPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardPageModule)
    },
    {
        path: 'make-a-claim',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_make-a-claim_make-a-claim_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./make-a-claim/make-a-claim.module */ 4147)).then(m => m.MakeAClaimPageModule)
    },
    {
        path: 'start-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_start-screen_start-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./start-screen/start-screen.module */ 6748)).then(m => m.StartScreenPageModule)
    },
    {
        path: 'sign-in-screen',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sign-in-screen_sign-in-screen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in-screen/sign-in-screen.module */ 174)).then(m => m.SignInScreenPageModule)
    },
    {
        path: 'home-page-screen-after-login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home-page-screen-after-login_home-page-screen-after-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home-page-screen-after-login/home-page-screen-after-login.module */ 1669)).then(m => m.HomePageScreenAfterLoginPageModule)
    },
    {
        path: 'contactus',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contactus_contactus_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contactus/contactus.module */ 8037)).then(m => m.ContactusPageModule)
    },
    {
        path: 'mypolicies',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_mypolicies_mypolicies_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mypolicies/mypolicies.module */ 1796)).then(m => m.MypoliciesPageModule)
    },
    {
        path: 'explore-screen-before-login-expanded',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_explore-screen-before-login-expanded_explore-screen-before-login-expanded_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./explore-screen-before-login-expanded/explore-screen-before-login-expanded.module */ 3291)).then(m => m.ExploreScreenBeforeLoginExpandedPageModule)
    },
    {
        path: 'explore-screen-before-login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_explore-screen-before-login_explore-screen-before-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./explore-screen-before-login/explore-screen-before-login.module */ 1741)).then(m => m.ExploreScreenBeforeLoginPageModule)
    },
    {
        path: 'get-quote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_get-quote_get-quote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./get-quote/get-quote.module */ 682)).then(m => m.GetQuotePageModule)
    },
    {
        path: 'quote1',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quote1_quote1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quote1/quote1.module */ 5035)).then(m => m.Quote1PageModule)
    },
    {
        path: 'verify-policy-screen-cust',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_verify-policy-screen-cust_verify-policy-screen-cust_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verify-policy-screen-cust/verify-policy-screen-cust.module */ 7956)).then(m => m.VerifyPolicyScreenCustPageModule)
    },
    {
        path: 'renewals',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_renewals_renewals_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./renewals/renewals.module */ 2433)).then(m => m.RenewalsPageModule)
    },
    {
        path: 'makeaclaim',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_makeaclaim_makeaclaim_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./makeaclaim/makeaclaim.module */ 3268)).then(m => m.MakeaclaimPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardPageModule)
    },
    {
        path: 'quote-popup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_quote-popup_quote-popup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./quote-popup/quote-popup.module */ 781)).then(m => m.QuotePopupPageModule)
    },
    {
        path: 'agentidpopup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_agentidpopup_agentidpopup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./agentidpopup/agentidpopup.module */ 2244)).then(m => m.AgentidpopupPageModule)
    },
    {
        path: 'agentloginscreen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_agentloginscreen_agentloginscreen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./agentloginscreen/agentloginscreen.module */ 1756)).then(m => m.AgentloginscreenPageModule)
    },
    {
        path: 'sign-up-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sign-up-screen_sign-up-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-up-screen/sign-up-screen.module */ 8067)).then(m => m.SignUpScreenPageModule)
    },
    {
        path: 'profile-update',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile-update_profile-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile-update/profile-update.module */ 969)).then(m => m.ProfileUpdatePageModule)
    },
    {
        path: 'car-insurance-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("src_app_car-insurance-details_car-insurance-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./car-insurance-details/car-insurance-details.module */ 829)).then(m => m.CarInsuranceDetailsPageModule)
    },
    {
        path: 'yourquote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_yourquote_yourquote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./yourquote/yourquote.module */ 7762)).then(m => m.YourquotePageModule)
    },
    {
        path: 'sub-products',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sub-products_sub-products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sub-products/sub-products.module */ 8565)).then(m => m.SubProductsPageModule)
    },
    {
        path: 'comprehensivequote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_comprehensivequote_comprehensivequote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./comprehensivequote/comprehensivequote.module */ 4366)).then(m => m.ComprehensivequotePageModule)
    },
    {
        path: 'thirdpartydetails',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_thirdpartydetails_thirdpartydetails_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./thirdpartydetails/thirdpartydetails.module */ 4829)).then(m => m.ThirdpartydetailsPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_payment_payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payment/payment.module */ 4068)).then(m => m.PaymentPageModule)
    },
    {
        path: 'payquote',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_payquote_payquote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payquote/payquote.module */ 2942)).then(m => m.PayquotePageModule)
    },
    {
        path: 'splash',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./splash/splash.module */ 9623)).then(m => m.SplashPageModule)
    },
    {
        path: 'splash1',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_splash1_splash1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./splash1/splash1.module */ 9014)).then(m => m.Splash1PageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/insurance-app.service */ 2111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);


/* eslint-disable max-len */








let AppComponent = class AppComponent {
  constructor(navCtrl, menuCtrl, api, route, platform) {
    // if (localStorage.getItem('userid') != null) {
    //   this.route.navigate(['home-page-screen-after-login']);
    // } else {
    //   this.route.navigate(['sign-in-screen']);
    // }
    this.navCtrl = navCtrl;
    this.menuCtrl = menuCtrl;
    this.api = api;
    this.route = route;
    this.platform = platform;
    this.appPages = [{
      title: 'Home',
      url: '/home-page-screen-after-login',
      img: '/assets/images/home.svg',
      img1: '/assets/images/homeicon.svg',
      status: 'unchecked'
    }, // { title: 'Dashboard', url: 'dashboard', img: '/assets/images/icons/chart.svg', img1: '/assets/images/icons/dashboard.svg', status: 'unchecked' },
    {
      title: 'Get Quote',
      url: '/get-quote',
      img: '/assets/images/icons/quote.svg',
      img1: '/assets/images/icons/activequote.svg',
      status: 'unchecked'
    }, {
      title: 'My Policy',
      url: 'mypolicies',
      img: '/assets/images/icons/mypolicy.svg',
      img1: '/assets/images/icons/activemypolicy.svg',
      status: 'unchecked'
    }, {
      title: 'Verify Policy',
      url: 'verify-policy-screen-cust',
      img: '/assets/images/icons/policy.svg',
      img1: '/assets/images/icons/activepolicy.svg',
      status: 'unchecked'
    }, {
      title: 'Renewals',
      url: 'renewals',
      img: '/assets/images/icons/renewals.svg',
      img1: '/assets/images/icons/activerenewls.svg',
      status: 'unchecked'
    }, {
      title: 'Make a Claim',
      url: '/makeaclaim',
      img: '/assets/images/icons/claim.svg',
      img1: '/assets/images/icons/activeclaim.svg',
      status: 'unchecked'
    }];
    this.initializeApp();
  }

  initializeApp() {
    var _this = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.platform.ready().then(() => {
        setTimeout(() => {
          _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__.SplashScreen.hide();

          _this.route.navigate(['splash']);
        }, 4000);
      });
    })();
  }

  selected(p) {
    this.appPages.map(value => {
      value.status = 'unchecked';
    });
    console.log('stataus--', p.status);
    p.status = 'checked';
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  logout() {
    localStorage.removeItem('userid');
    localStorage.removeItem('token');
    console.log('userid==', localStorage.getItem('userid'));
    console.log('token==', localStorage.getItem('token'));
    this.api.presenttoast('You are successfully logged out!');
    let fp = localStorage.getItem('fingerprint');

    if (fp == 'false') {
      localStorage.removeItem('fingerprint');
    }

    this.menuCtrl.close();
    this.navCtrl.navigateRoot('sign-in-screen');
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
}, {
  type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_3__.InsuranceAppService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 3427);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        providers: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__.FingerprintAIO,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2111:
/*!***************************************************!*\
  !*** ./src/app/services/insurance-app.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsuranceAppService": () => (/* binding */ InsuranceAppService)
/* harmony export */ });
/* harmony import */ var D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);






let InsuranceAppService = class InsuranceAppService {
  constructor(toastctrl, http, loadingController) {
    this.toastctrl = toastctrl;
    this.http = http;
    this.loadingController = loadingController;
    this.url = 'https://www.cornerstone.com.ng/devtest/webservice';
  }

  insertData(myData) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      // "Content-Type": "application/json",
      // "Accept": "application/json"
      "Content-Type": "application/x-www-form-urlencoded"
    });
    return this.http.post(this.url, myData, {
      headers: header
    });
  }

  insertFormData(Data) {
    let header;
    header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": "corci_session=a%3A5%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%229067b6add23324d21220d8f7d5c649c0%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A12%3A%2239.40.231.23%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A21%3A%22PostmanRuntime%2F7.29.0%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1656587499%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3B%7D87fb653bf23ba596c9ade5a76135fe0a7557093d"
    });
    return this.http.post(this.url, Data, {
      headers: header
    });
  }

  wpGetData(action, token) {
    let header;

    if (token) {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        "Authorization": "Bearer " + token
      });
      header.append("Access-Control-Allow-Origin", "*");
      header.append("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT,OPTIONS");
    } else {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
      header.append("Access-Control-Allow-Origin", "*");
      header.append("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT,OPTIONS");
    }

    return this.http.post(`${this.url}/${action}`, {
      headers: header
    });
  }

  getData(action, token) {
    let header;

    if (token) {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        "auth-key": token
      });
      header.append("Access-Control-Allow-Origin", "*");
      header.append("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT,OPTIONS");
    } else {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
      header.append("Access-Control-Allow-Origin", "*");
      header.append("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT,OPTIONS");
    }

    return this.http.get(`${this.url}/${action}`, {
      headers: header
    });
  }

  get(url, token) {
    console.log('token in api ervice====', token);
    let headers;
    headers = new Headers();
    headers.append("Authorization", "Bearer 39109f7df56e1CORNERStone9e685066bb852");
    return this.http.get(url, {
      headers: headers
    });
  } // waGetData(action,token) {
  //   let header;
  //   // if (token) {
  //   //   console.log('token=',token)
  //   //   header = new HttpHeaders({
  //   //     "Authorization": "Bearer "+token,
  //   //   });
  //   //   console.log('jeadwre=',header)
  //   //   header.append("Access-Control-Allow-Origin", "*");
  //   //   header.append(
  //   //     "Access-Control-Allow-Methods",
  //   //     "POST, GET, DELETE, PUT,OPTIONS"
  //   //   );
  //   // } else {
  //   //   header = new HttpHeaders();
  //   //   header.append("Access-Control-Allow-Origin", "*");
  //   //   header.append(
  //   //     "Access-Control-Allow-Methods",
  //   //     "POST, GET, DELETE, PUT,OPTIONS"
  //   //   );
  //   // }
  //   return this.http.post(`${this.url}/${action}`, {
  //     headers: {
  //       "Authorization": "Bearer "+'53|4GA1yxNOLagRRhMYG48FrtG6CnVlon74H5cjMmo9',
  //       "Cookie": "XSRF-TOKEN=eyJpdiI6IjIyeHh0Zm1OSnF0ZFdGMmU4MnBpbHc9PSIsInZhbHVlIjoieTZ4RjVxZjhWZTVRUjh3bUdGRzZBYkhwNTRkODk5SElsWW93bWR1QXFlbHpSaDlTSWhxeXlETzlEQURxZ1pmNTdCWXZIM09JK29rUS9TQk9FU0ZheWlXajVLYk83K3BObldGQVZ2UFV4TVBhRVhYdHpkMFBnUzBldkNhTWpaNjciLCJtYWMiOiI0OWYwMDMwNmU3MjJmMGY3YWUwYjcxOTlkNjM0ZTZhODRhZmYwMGU4NDYwZGE3OGRlOGEyODcyYWRhMTRiYTk0IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Ik1ROUVsalZXcm55WnFNV2Y5Rkd4TFE9PSIsInZhbHVlIjoieG16Y0tnTEN1SmFPUjFxUTBxbUVuMDc5bUNPaysrbXpVc1VuUjA5QjFIMG1aM1FqQkY5WStPY3N5L2RkY0N3bHlVaWcvcS9TbFdqUUR2TFJsaU9PaUsvUHlHdzU5ZUo4S24rT1RxaFJiOW5sdHR5NDFkT3NCTmF0eVlwZmFsTUgiLCJtYWMiOiI1OTRiNjAzYWFhY2U0ZDI5ODVjNGVmMDFjZjMzMzk0YWZhZGRjODFkOGYxZTgzZmM0MGI5YTA0ODhlZWUyNDliIiwidGFnIjoiIn0%3D",
  //       "Content-Type": "application/json"
  //     }
  //   });
  // }


  getCaptcha(token) {
    let header;

    if (token) {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        "auth-key": token
      });
      header.append("Access-Control-Allow-Origin", "*");
      header.append("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT,OPTIONS");
    } else {
      header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({// "content-type":"text/html"
      });
      header.append("Access-Control-Allow-Origin", "*");
      header.append("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT,OPTIONS");
    }

    return this.http.get(`${this.url}`, {
      headers: header
    });
  }

  presenttoast(message) {
    this.toastctrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    }).then(res => res.present());
  }

  showLoader(content) {
    var _this = this;

    return (0,D_najam_insurance_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      }).then(res => {
        res.present();
      });
    })();
  }

  hideLoader() {
    this.loadingController.dismiss().then(res => {
      console.log('Loading dismissed!', res);
    }).catch(error => {
      console.log('error', error);
    });
  }

};

InsuranceAppService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
}];

InsuranceAppService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], InsuranceAppService);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background:#1A206D;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n  --background: transparent;\n  color: #FFFFFF;\n}\n\nion-menu.md ion-item.selected {\n  --background: #FFFFFF;\n  width: 153px;\n  border-radius: 8px;\n  color: #1A206D;\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  border-radius: 4px;\n  --background: transparent;\n  color: #FFFFFF;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --background: #FFFFFF !important;\n  width: 160px !important;\n  border-radius: 8px !important;\n  color: #1A206D !important;\n}\n\nion-menu::part(container) {\n  border-top-right-radius: 45px;\n  border-bottom-right-radius: 45px;\n}\n\n.imgdiv img {\n  border: 2px solid #A8B400;\n  border-radius: 50px;\n  padding: 3px;\n}\n\n.title {\n  margin-left: 4%;\n  font-family: \"Bliss Pro\";\n}\n\n.text1 {\n  font-size: 18px;\n  color: #A8B400;\n  margin-left: 20%;\n  width: 100%;\n}\n\n.stext {\n  color: #FFFFFF;\n  font-weight: 400;\n  font-size: 16px;\n  width: 100%;\n}\n\n.fc {\n  background: #1A206D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkRBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBRUUscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSwrQkFBQTtBQUxGOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLHNCQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSwrQkFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBUUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FBTkY7O0FBU0E7RUFFRSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQVBGOztBQVVBO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtBQVBGOztBQVNFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFOSjs7QUFRRTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtBQUxKOztBQU9FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFKSjs7QUFPRztFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSkw7O0FBT0c7RUFDQyxtQkFBQTtBQUpKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbiAgLS1iYWNrZ3JvdW5kOiMxQTIwNkQ7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC8vIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxuICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgd2lkdGg6IDE1M3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjb2xvcjogIzFBMjA2RDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBjb2xvcjogIzYxNmU3ZTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjNzM4NDlhO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG59XHJcblxyXG5pb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLy8gLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMUEyMDZEICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0NXB4O1xyXG4gIH1cclxuICAuaW1nZGl2IGltZ3tcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNBOEI0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gIH1cclxuICAudGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICBmb250LWZhbWlseTogJ0JsaXNzIFBybyc7XHJcbiAgfVxyXG4gIC50ZXh0MXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgIC5zdGV4dHtcclxuICAgICBjb2xvcjojRkZGRkZGO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuXHJcbiAgIC5mY3tcclxuICAgIGJhY2tncm91bmQ6IzFBMjA2RDtcclxuICAgfVxyXG4iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-header style=\"background-color:#1A206D !important;\">\r\n        <div style=\"width: 80%; margin: 17% auto 10px;\">\r\n          <div style=\"width: 100%;\">\r\n            <img (click)=\"closeMenu()\" src=\"assets/images/icons/backwhite-arrow.svg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n\r\n      </ion-header>\r\n      <ion-content style=\"--background: #1A206D !important;\">\r\n        <!-- <div style=\"text-align:center;\">\r\n          <img src=\"assets/images/logo1.svg\">\r\n        </div> -->\r\n        <div style=\"display: flex;flex-direction: row;align-items: center; width: 80%;\r\n          margin:2% auto\">\r\n          <div class=\"imgdiv\">\r\n            <img src=\"assets/images/icons/userimg.svg\">\r\n          </div>\r\n          <div class=\"textdiv\">\r\n            <div class=\"text1\">Kola Adekoya</div>\r\n          </div>\r\n        </div>\r\n        <div style=\"width:90%;margin:0% auto;\">\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\r\n              routerLinkActive=\"selected\" class=\"ion-no-padding\" (click)=\"selected(p)\">\r\n              <img class=\"sidemenu-icons\" *ngIf=\"p.status=='checked'\" src=\"{{p.img1}}\">\r\n              <img class=\"sidemenu-icons\" *ngIf=\"p.status=='unchecked'\" src=\"{{p.img}}\">\r\n              <ion-label class=\"title\">{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </div>\r\n\r\n\r\n      </ion-content>\r\n      <ion-footer class=\"ion-no-border fc\" no-border style=\"background-color:#1A206D !important;\">\r\n        <div style=\"display: flex;\r\n        width: 100%;\r\n        margin-bottom: 10%;\r\n        margin-left: 10%;\" (click)=\"logout()\">\r\n          <div class=\"bottom\">\r\n            <img src=\"assets/images/icons/logout.svg\">\r\n          </div>\r\n          <div class=\"stext\">\r\n            <span style=\"padding-left:4% ;\">logout</span>\r\n          </div>\r\n        </div>\r\n\r\n      </ion-footer>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map