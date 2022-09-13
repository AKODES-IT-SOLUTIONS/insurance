"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sign-up-screen_sign-up-screen_module_ts"],{

/***/ 4291:
/*!*****************************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpScreenPageRoutingModule": () => (/* binding */ SignUpScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sign_up_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-screen.page */ 6964);




const routes = [
    {
        path: '',
        component: _sign_up_screen_page__WEBPACK_IMPORTED_MODULE_0__.SignUpScreenPage
    }
];
let SignUpScreenPageRoutingModule = class SignUpScreenPageRoutingModule {
};
SignUpScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpScreenPageRoutingModule);



/***/ }),

/***/ 8067:
/*!*********************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpScreenPageModule": () => (/* binding */ SignUpScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sign_up_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-screen-routing.module */ 4291);
/* harmony import */ var _sign_up_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-screen.page */ 6964);







let SignUpScreenPageModule = class SignUpScreenPageModule {
};
SignUpScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_up_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpScreenPageRoutingModule
        ],
        declarations: [_sign_up_screen_page__WEBPACK_IMPORTED_MODULE_1__.SignUpScreenPage]
    })
], SignUpScreenPageModule);



/***/ }),

/***/ 6964:
/*!*******************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpScreenPage": () => (/* binding */ SignUpScreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sign_up_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-screen.page.html?ngResource */ 8882);
/* harmony import */ var _sign_up_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-screen.page.scss?ngResource */ 8491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








let SignUpScreenPage = class SignUpScreenPage {
    constructor(router, api, location) {
        this.router = router;
        this.api = api;
        this.location = location;
        this.uTitle = '';
        this.fName = '';
        this.lName = '';
        this.dob = '';
        this.mobNumber = '';
        this.uEmail = '';
        this.userPassword = '';
        this.cuserPassword = '';
        this.show = false;
        this.Title = 'Select Title';
        this.listarray = [{ Title: 'Mr' }, { Title: 'Mrs.' }];
        this.showPicker = false;
        // dateValue = format(new Date(), 'yyyy-MM-dd');
        this.dateValue = 'Date of birth';
        // formattedString = '';
        this.showPass = false;
        this.cshowPass = false;
        // this.setToday();
    }
    ngOnInit() {
        this.RegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
        });
        console.log(this.dateValue);
        // console.log(this.formattedString);
        this.RegisterForm.reset();
    }
    // setToday(){
    //   this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') ), ' MMM d, yyyy');
    // }
    togglePass() {
        this.showPass = !this.showPass;
    }
    confirmtogglePass() {
        this.cshowPass = !this.cshowPass;
    }
    dateChanged(value) {
        this.dateValue = value;
        console.log(this.dateValue);
        // this.formattedString = format(parseISO(value), ' MMM d, yyyy')
        this.showPicker = false;
    }
    openlist() {
        console.log('show value====', this.show);
        if (this.show == false) {
            this.show = true;
        }
        else {
            this.show = false;
        }
    }
    selectTitle(list) {
        this.uTitle = list.Title;
        this.show = false;
    }
    signUp() {
        // let myData = "myData={\r\n    \"email\": \""+this.userEmail+"\",\r\n    \"password\": \""+this.userPassword+"\",\r\n    \"method\": \"login\"\r\n}";
        let myData = "myData={\r\n    \"title\":\"" + this.uTitle + "\",\r\n    \"first_name\": \"" + this.fName + "\",\r\n    \"last_name\":\"" + this.lName + "\",\r\n    \"date_of_birth\":\"" + this.dateValue + "\",\r\n    \"mobile\":\"" + this.mobNumber + "\",\r\n    \"email\":\"" + this.uEmail + "\",\r\n    \"password\":\"" + this.userPassword + "\",\r\n    \"conf_password\":\"" + this.cuserPassword + "\",\r\n    \"method\": \"save_user\" \r\n}";
        if (this.dateValue == 'Date of birth') {
            this.api.presenttoast('Please select date of birth');
        }
        else if (this.userPassword != this.cuserPassword) {
            this.api.presenttoast('"Password" and "Confirm_password" not matched!');
        }
        else {
            this.api.insertData(myData).subscribe((res) => {
                console.log("res==", res);
                if (res.message === 'Email address already exist') {
                    console.log(res.message);
                    this.api.presenttoast(res.message);
                }
                else {
                    this.api.presenttoast(res.message);
                    this.router.navigate(['/sign-in-screen']);
                }
            }, (err) => {
                console.log('err==', err);
                this.api.presenttoast(err);
            });
        }
    }
    signInPage() {
        this.router.navigate(['/sign-in-screen']);
    }
    goBack() {
        this.location.back();
    }
};
SignUpScreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location }
];
SignUpScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sign-up-screen',
        template: _sign_up_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sign_up_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignUpScreenPage);



/***/ }),

/***/ 8491:
/*!********************************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  width: 85%;\n  margin: 0% auto;\n}\n\np.cont-p1 {\n  font-size: 22px;\n  font-weight: 500;\n  color: #A8B400;\n  margin: 0px;\n}\n\n.input {\n  height: 48px;\n  margin: 15px auto 0px;\n  border-radius: 12px;\n  background: #E8E8E7;\n  color: black;\n  --placeholder-color:#5D5D5D;\n  --placeholder-font-weight:500;\n  --placeholder-font-size:16px;\n  --padding-end: 15px;\n  --padding-start: 2px;\n}\n\nion-input {\n  --ion-font-family: Bliss Pro;\n}\n\n.dropbox1 {\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.innerbox {\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n}\n\n.boxinput {\n  height: 48px;\n  border-radius: 12px;\n  color: black;\n  --placeholder-color: #5D5D5D;\n  --placeholder-font-weight: 500;\n  --placeholder-font-size: 16px;\n  --padding-end: 15px;\n  --padding-start: 2px;\n}\n\n.dropbox {\n  margin: 4% 0%;\n  background: #E8E8E7;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n\n.innerdropbox {\n  padding-right: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.euro-text {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n}\n\n.euro-text1 {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 0px 0px 10px 20px;\n}\n\n.ion-txt {\n  font-family: Bliss Pro;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n\n.item-picker {\n  border-color: white;\n  border-radius: 12px;\n  background: #E8E8E7;\n}\n\n.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 0px !important;\n  padding-inline-end: var(--padding-end);\n}\n\nimg.plchldr-css {\n  margin: 10px 10px 10px 15px;\n}\n\n.email {\n  margin: 15px 0px 15px 20px;\n}\n\n.fields {\n  margin: 5% auto 0%;\n}\n\n.inputdiv {\n  display: flex;\n  border-radius: 12px;\n  align-items: center;\n  background: #E8E8E7;\n  height: 48px;\n}\n\n.pinput {\n  padding-left: 7px;\n  width: 100%;\n  padding-right: 13px;\n}\n\n.ph-css {\n  --placeholder-color: #656565;\n  --placeholder-font-weight: 400;\n  --placeholder-font-size: 14px;\n  color: black;\n  --padding-start:5px;\n}\n\n.btn {\n  width: 85%;\n  height: 48px;\n  --border-radius: 12px;\n  font-size: 20px;\n  font-family: Bliss Pro;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\np.last-para {\n  width: 85%;\n  margin: 10px auto 0px;\n  text-align: center;\n  line-height: normal;\n  padding-bottom: 20px;\n}\n\nspan.span-start {\n  color: #1A0F55;\n  font-size: 16px;\n  font-weight: 400;\n}\n\nspan.span-end {\n  font-size: 16px;\n  font-weight: 500;\n  color: #A8B400;\n}\n\n.validation {\n  width: 100%;\n  margin: 5px auto 5px;\n  display: flex;\n  align-items: center;\n}\n\n.alertIcon {\n  width: 13px;\n}\n\n.error-msg {\n  margin-left: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  font-family: \"Rubik\", sans-serif;\n  color: #d93025;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUVBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUVBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDRSw0QkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNFLG9CQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkU7RUFFRSxrQkFBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsMEJBQUE7QUFDSjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBR0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQUZGOztBQUlBO0VBQ0UsMkJBQUE7QUFERjs7QUFHQTtFQUNJLDBCQUFBO0FBQUo7O0FBR0E7RUFFSSxrQkFBQTtBQURKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFRTtFQUVFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBRUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBRUUsV0FBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUFLRiIsImZpbGUiOiJzaWduLXVwLXNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46MCUgYXV0bztcclxufVxyXG5wLmNvbnQtcDEge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjQThCNDAwO1xyXG4gICAgbWFyZ2luOjBweDtcclxufVxyXG4uaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOjE1cHggYXV0byAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0U4RThFNztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IzVENUQ1RDtcclxuICAgIC8vIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTpcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6MTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDJweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuLmRyb3Bib3gxe1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI0U4RThFNztcclxuXHJcbn1cclxuLmlubmVyYm94e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG59XHJcbi5ib3hpbnB1dHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVENUQ1RDtcclxuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMnB4O1xyXG59XHJcbi5kcm9wYm94e1xyXG4gICAgbWFyZ2luOiA0JSAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG5cclxuICB9XHJcbiAgLmlubmVyZHJvcGJveHtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDJweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAyLjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICB9XHJcbiAgLmV1cm8tdGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICB9XHJcbiAgLmV1cm8tdGV4dDF7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDIwcHg7XHJcblxyXG4gIH1cclxuLmlvbi10eHR7XHJcbiAgZm9udC1mYW1pbHk6IEJsaXNzIFBybztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjpibGFjaztcclxuICB9XHJcbi5pdGVtLXBpY2tlcntcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICAvLyBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNFOEU4RTc7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAwcHggMTZweCAwcHg7XHJcblxyXG59XHJcblxyXG4uaXRlbS1uYXRpdmUge1xyXG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy1lbmQpO1xyXG59XHJcbmltZy5wbGNobGRyLWNzcyB7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxNXB4O1xyXG59XHJcbi5lbWFpbHtcclxuICAgIG1hcmdpbjogMTVweCAwcHggMTVweCAyMHB4O1xyXG59XHJcbi8vbmFqYW0gcGFzc3dvcmQgaW5wdXQgY3NzLy8vXHJcbi5maWVsZHN7XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDAlO1xyXG4gIH1cclxuICAuaW5wdXRkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU3O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuICAucGlucHV0XHJcbiAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgfVxyXG4gIC5waC1jc3N7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNjU2NTY1O1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6NXB4O1xyXG4gIH1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxucC5sYXN0LXBhcmEge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbnNwYW4uc3Bhbi1zdGFydCB7XHJcbiAgICBjb2xvcjogIzFBMEY1NTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuc3Bhbi5zcGFuLWVuZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNBOEI0MDA7XHJcbn1cclxuLnZhbGlkYXRpb257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1cHggYXV0byA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hbGVydEljb257XHJcblxyXG4gIHdpZHRoOiAxM3B4O1xyXG59XHJcbi5lcnJvci1tc2d7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogI2Q5MzAyNTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 8882:
/*!********************************************************************!*\
  !*** ./src/app/sign-up-screen/sign-up-screen.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div style=\"width: 85%;\r\n  margin: 15px auto 0px;\">\r\n    <div style=\"width: 100%;\">\r\n      <img (click)=\"goBack()\" src=\"assets/images/back-arrow.svg\" alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n\r\n    <div class=\"title-para\" style=\"text-align: center;\">\r\n      <p class=\"cont-p1\">Hi there <br> <span>Create an account to get started</span></p>\r\n    </div>\r\n    <form [formGroup]=\"RegisterForm\">\r\n      <div class=\"dropbox1\">\r\n        <div class=\"innerbox\">\r\n          <ion-input type=\"text\" formControlName=\"title\" [(ngModel)]=\"uTitle\" class=\"boxinput\" placeholder=\"Title\"\r\n            (click)=\"openlist()\"><img class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\"></ion-input>\r\n          <div class=\"imgdiv\" (click)=\"openlist()\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/down-arrow.svg\" *ngIf=\"show==false\">\r\n            <img style=\"height: 11px; width: 11px;\" src=\"assets/images/yuparrow.svg\" *ngIf=\"show==true\">\r\n          </div>\r\n\r\n        </div>\r\n        <div *ngIf=\"show==true\">\r\n          <div *ngFor=\"let list of listarray\" (click)=\"selectTitle(list)\">\r\n            <div class=\"euro-text1\">{{list.Title}}</div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('title').hasError('required') && RegisterForm.get('title').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your title</span>\r\n      </div>\r\n\r\n      <ion-input type=\"text\" formControlName=\"fname\" [(ngModel)]=\"fName\" class=\"input\" placeholder=\"First Name\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\"></ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('fname').hasError('required') && RegisterForm.get('fname').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your first name</span>\r\n      </div>\r\n\r\n      <ion-input type=\"text\" formControlName=\"lname\" [(ngModel)]=\"lName\" class=\"input\" placeholder=\"Last Name\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/ava-icon.svg\" alt=\"\"></ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('lname').hasError('required') && RegisterForm.get('lname').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your last name</span>\r\n      </div>\r\n\r\n      <div class=\"item-picker\" style=\"margin: 15px auto 0px; --background: #E8E8E7; height: 48px; padding: 13px 15px;\"\r\n        (click)=\"showPicker = !showPicker\">\r\n        <div style=\"display: flex; align-items:center\">\r\n          <img class=\"cal-css\" src=\"assets/images/icons/calendar.svg\" alt=\"\">\r\n          <ion-text class=\"ion-txt\" style=\"margin-left: 14px\">{{ dateValue }}</ion-text>\r\n        </div>\r\n\r\n      </div>\r\n      <ion-datetime class=\"item-picker\" style=\"margin:10px auto 0px; color: black;\" presentation=\"date\"\r\n        *ngIf=\"showPicker\" #datetime [value]=\"dateValue\" size=\"cover\" (ionChange)=\"dateChanged(datetime.value)\"\r\n        showDefaultButtons=\"true\" (ionCancel)=\"showPicker=false\"></ion-datetime>\r\n\r\n      <ion-input formControlName=\"number\" [(ngModel)]=\"mobNumber\" type=\"tel\" class=\"input\" placeholder=\"Phone\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/phone.svg\" alt=\"\"></ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('number').hasError('required') && RegisterForm.get('number').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your mobile number</span>\r\n      </div>\r\n\r\n      <ion-input formControlName=\"email\" [(ngModel)]=\"uEmail\" type=\"email\" class=\"input\" placeholder=\"Email\"><img\r\n          class=\"plchldr-css\" src=\"assets/images/icons/email.svg\" alt=\"\">\r\n      </ion-input>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('email').hasError('required') && RegisterForm.get('email').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your email</span>\r\n      </div>\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('email').hasError('pattern') && RegisterForm.get('email').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">This is invalid format</span>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div>\r\n            <img style=\"margin:15px 10px 13px 15px;\" src=\"assets/images/pw-lock.svg\">\r\n          </div>\r\n          <div class=\"pinput\">\r\n            <ion-input class=\"ph-css\" formControlName=\"password\" [(ngModel)]=\"userPassword\" placeholder=\"Password\"\r\n              type=\"{{showPass ? 'text':'password' }}\"></ion-input>\r\n          </div>\r\n          <div class=\"icondiv\" style=\"margin-top: 4px;\">\r\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n            <ion-icon style=\"color:black ; margin-right: 15px;\" name=\"eye\" *ngIf=\"!showPass\" (click)=\"togglePass()\">\r\n            </ion-icon>\r\n            <ion-icon style=\"color:black ; margin-right: 15px;\" name=\"eye-off\" *ngIf=\"showPass\" (click)=\"togglePass()\">\r\n            </ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('password').hasError('required') && RegisterForm.get('password').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Enter your password</span>\r\n      </div>\r\n\r\n      <div class=\"fields\">\r\n        <div class=\"inputdiv\">\r\n          <div>\r\n            <img style=\"margin:15px 10px 13px 15px;\" src=\"assets/images/pw-lock.svg\">\r\n          </div>\r\n          <div class=\"pinput\">\r\n            <ion-input class=\"ph-css\" formControlName=\"cpassword\" [(ngModel)]=\"cuserPassword\"\r\n              placeholder=\"Confirm Password\" type=\"{{cshowPass ? 'text':'password' }}\"></ion-input>\r\n          </div>\r\n          <div class=\"icondiv\" style=\"margin-top: 4px;\">\r\n            <!-- <img src=\"assets/imgs/icons/eye.svg\"> -->\r\n            <ion-icon style=\"color:black ; margin-right: 15px;\" name=\"eye\" *ngIf=\"!cshowPass\"\r\n              (click)=\"confirmtogglePass()\"></ion-icon>\r\n            <ion-icon style=\"color:black ; margin-right: 15px;\" name=\"eye-off\" *ngIf=\"cshowPass\"\r\n              (click)=\"confirmtogglePass()\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"validation\"\r\n        *ngIf=\"RegisterForm.get('cpassword').hasError('required') && RegisterForm.get('cpassword').touched\">\r\n        <img src=\"assets/images/alert-icon.png\" class=\"alertIcon\">\r\n        <span class=\"error-msg\">Confirm your password</span>\r\n      </div>\r\n\r\n      <div style=\"text-align:center ; padding-bottom: 5px; margin: 20px auto 0px;\">\r\n        <ion-button class=\"btn\" [disabled]=\"RegisterForm.invalid\" (click)=\"signUp()\" style=\"--background: #A8B400;\">\r\n          Register</ion-button>\r\n\r\n      </div>\r\n\r\n    </form>\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div style=\"width: 85%; margin: 20px auto 0px;\">\r\n    <p class=\"last-para\"><span class=\"span-start\">Already have an account? </span> <span (click)=\"signInPage()\"\r\n        class=\"span-end\">Sign In</span> </p>\r\n  </div>\r\n\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-up-screen_sign-up-screen_module_ts.js.map