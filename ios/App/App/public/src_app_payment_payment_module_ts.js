"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payment_payment_module_ts"],{

/***/ 3509:
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 684);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ 4068:
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 3509);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 684);







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage]
    })
], PaymentPageModule);



/***/ }),

/***/ 684:
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page.html?ngResource */ 7916);
/* harmony import */ var _payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss?ngResource */ 9529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/insurance-app.service */ 2111);








let PaymentPage = class PaymentPage {
    constructor(location, router, api, navCtrl) {
        this.location = location;
        this.router = router;
        this.api = api;
        this.navCtrl = navCtrl;
        this.value = localStorage.getItem('subProName');
        this.chooosebank = '';
        this.othermethod = false;
        this.payemntmethod = '';
    }
    ngOnInit() {
        this.quoteItems = JSON.parse(localStorage.getItem('quoteItems'));
    }
    buyOnlineQuote() {
        this.router.navigate(['/car-insurance-details']);
    }
    getAnewQuote() {
        this.router.navigate(['/home-page-screen-after-login']);
    }
    goback() {
        this.location.back();
    }
    selectmethod(val) {
        console.log('value grt====', val);
        this.payemntmethod = val;
        if (val == 'other') {
            this.othermethod = true;
        }
        else {
            this.othermethod = false;
        }
    }
    onItemChange(ev) {
        console.log(" Value is : ", ev);
        this.chooosebank = ev;
    }
    proceed() {
        if (this.payemntmethod == '') {
            this.api.presenttoast('Choose one payment method');
        }
        else {
            if (this.payemntmethod == 'WebPAY') {
                this.paymentoption = 1;
                this.paymentapi(this.paymentoption);
            }
            else {
                if (this.payemntmethod == 'other') {
                    this.paymentoption = 2;
                    if (this.chooosebank == '') {
                        this.api.presenttoast('Choose atleast one bank');
                    }
                    else {
                        this.paymentapi(this.paymentoption);
                    }
                }
            }
        }
    }
    paymentapi(paymentoption) {
        let datasend = "myData={\"product_id\":" + localStorage.getItem('subProId') + ",\"quote_id\":" + localStorage.getItem('quote_id') + ",\"payment_option\":" + paymentoption + ",\"verify_token\":\"" + localStorage.getItem('token') + "\",\"method\":\"payment_method_select\"}";
        this.api.insertData(datasend).subscribe((res) => {
            console.log('payemt response', res);
            if (paymentoption == 2) {
                this.navCtrl.navigateForward(['payquote', {
                        payres: JSON.stringify(res.transaction)
                    }]);
            }
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_insurance_app_service__WEBPACK_IMPORTED_MODULE_2__.InsuranceAppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-payment',
        template: _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentPage);



/***/ }),

/***/ 9529:
/*!******************************************************!*\
  !*** ./src/app/payment/payment.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.box {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.box-success {\n  border-color: #d6e9c6;\n  margin-top: 5%;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n  font-size: 12px;\n  font-family: Bliss Pro;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n}\n\n.table-responsive {\n  width: 100%;\n  margin-bottom: 15px;\n  overflow-y: hidden;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  border: 1px solid #ddd;\n}\n\n.table-responsive .table-bordered {\n  border: 0;\n}\n\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #b8b988;\n}\n\n.table > tbody > tr > td {\n  padding: 6px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.btndiv {\n  width: 90%;\n  margin: 5% auto;\n}\n\n.btn {\n  color: #fff;\n  --background: #A8B400;\n  --border: 1px solid #A8B400;\n  width: 100%;\n  font-size: 14px;\n  --border-radius: 12px;\n  height: 40px;\n}\n\n.btn1 {\n  color: white;\n  --background: #1A206D;\n  --border: 1px solid #1A206D;\n  font-size: 14px;\n  width: 100%;\n  --border-radius: 12px;\n  margin-top: 5%;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUVBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFNBQUE7QUFBRjs7QUFHQTs7RUFFRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUYiLCJmaWxlIjoicGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYigwIDAgMCAvIDUlKTtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiKDAgMCAwIC8gNSUpXHJcbn1cclxuXHJcbi5ib3gtc3VjY2VzcyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ucGFuZWwtYm9keSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBCbGlzcyBQcm87XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIC50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQsXHJcbi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcclxufVxyXG5cclxuLnRhYmxlPnRib2R5PnRyPnRkIHtcclxuICBwYWRkaW5nOjZweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uYnRuZGl2IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogNSUgYXV0bztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjQThCNDAwO1xyXG4gIC0tYm9yZGVyOiAxcHggc29saWQgI0E4QjQwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmJ0bjEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtLWJhY2tncm91bmQ6ICMxQTIwNkQ7XHJcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMUEyMDZEO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7916:
/*!******************************************************!*\
  !*** ./src/app/payment/payment.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<!-- eslint-disable @angular-eslint/template/eqeqeq -->\r\n<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\r\n  <ion-toolbar class=\"headBgGlobal\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\r\n        <ion-buttons>\r\n          <div style=\"width:100% ;\">\r\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\r\n          </div>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <div class=\"title\">Make a Payment</div>\r\n      </ion-col>\r\n      <ion-col class=\"titleclass\" size=\"2\">\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"wrapper\">\r\n    <div style=\"display:flex;align-items: center;\r\n    justify-content: space-around;\">\r\n      <img height=\"50px\" src=\"assets/images/access_point.png\">\r\n      <h1 style=\"margin: 0px;\r\n      font-size: 22px;\r\n      margin-left: 6px;\">Select your payment Option.(Amount : ??? {{quoteItems[quoteItems.length - 1].value}} ) </h1>\r\n    </div>\r\n\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n        <tr>\r\n\r\n          <td width=\"10\">\r\n\r\n            <input type=\"radio\" value=\"WEBpay\" name=\"payment-option\" class=\"payment-option-other\"\r\n              (click)=\"selectmethod('WebPAY')\">\r\n\r\n          </td>\r\n\r\n          <td><strong>WebPAY </strong><br><img height=\"100px;\"\r\n              src=\"https://cornerstone.com.ng/devtest/assets/img/cards.png\">\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n\r\n\r\n    <table class=\"table\">\r\n\r\n      <tbody>\r\n\r\n        <tr>\r\n\r\n          <td width=\"10\">\r\n\r\n            <input type=\"radio\" name=\"payment-option\" value=\"deposit\" id=\"payment-option-bank\"\r\n              (click)=\"selectmethod('other')\">\r\n\r\n          </td>\r\n\r\n          <td><strong>Bank Transfer in any of the following banks </strong><br><span class=\"h6\"> Pay using internet\r\n              banking or directly at any of this banks</span><br>\r\n\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n\r\n    </table>\r\n\r\n    <table class=\"table\" id=\"bank_list\" *ngIf=\"othermethod==true\">\r\n\r\n\r\n      <tbody>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"1\" id=\"FCMB\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/1.png\">\r\n          </td>\r\n\r\n          <td style=\"width: 50%;\">\r\n\r\n            <!-- <label for=\"bank\" id=\"1\">FCMB - 0135145093</label> -->\r\n\r\n            <label>Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0135145093\"\r\n              style=\"height:30px;width:200px\">\r\n\r\n          </td>\r\n\r\n\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"2\" id=\"StanbicIBTC\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/2.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <!-- <label for=\"bank\" id=\"2\">StanbicIBTC - 0008384202</label> -->\r\n\r\n            <label>Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0008384202\"\r\n              style=\"height:30px;width:200px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"StanbicIBTC\" class=\"StanbicIBTC\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"3\" id=\"GTBank\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/3.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <!-- <label for=\"bank\" id=\"3\">GTBank - 0108908618</label> -->\r\n\r\n            <label>Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  0108908618\"\r\n              style=\"height:30px;width:200px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"GTBank\" class=\"GTBank\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"4\" id=\"FirstBank\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/4.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <!-- <label for=\"bank\" id=\"4\">First Bank -2024120096</label> -->\r\n\r\n            <label>Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"  2024120096\"\r\n              style=\"height:29px;width:200px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"FirstBank\" class=\"FirstBank\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n\r\n          <td>\r\n\r\n            <input type=\"radio\" value=\"6\" id=\"UnionBankGeneral\" name=\"banklist\" class=\"allbank\"\r\n              (change)=\"onItemChange($event.target.value)\">\r\n\r\n          </td>\r\n\r\n          <td><img height=\"50\" src=\"https://cornerstone.com.ng/devtest/assets/img/banks/6.png\">\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <!-- <label for=\"bank\" id=\"6\">Union Bank (General) - 0040038431</label> -->\r\n\r\n            <label>Account Number:</label>\r\n\r\n\r\n\r\n            <input type=\"text\" readonly=\"readonly\" name=\"bank_name\" value=\"    0040038431\"\r\n              style=\"height:30px;width:200px;margin-top: 1px\">\r\n\r\n          </td>\r\n\r\n          <td>\r\n\r\n            <table id=\"UnionBankGeneral\" class=\"UnionBankGeneral\">\r\n\r\n              <tbody></tbody>\r\n            </table>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n      </tbody>\r\n\r\n\r\n    </table>\r\n\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <div class=\"btndiv\">\r\n    <ion-button class=\"btn\" (click)=\"proceed()\"> Proceed</ion-button>\r\n  </div>\r\n\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_payment_payment_module_ts.js.map