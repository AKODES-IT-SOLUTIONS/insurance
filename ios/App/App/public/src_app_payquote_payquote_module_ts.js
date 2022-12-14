"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payquote_payquote_module_ts"],{

/***/ 4019:
/*!*****************************************************!*\
  !*** ./src/app/payquote/payquote-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayquotePageRoutingModule": () => (/* binding */ PayquotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payquote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payquote.page */ 2967);




const routes = [
    {
        path: '',
        component: _payquote_page__WEBPACK_IMPORTED_MODULE_0__.PayquotePage
    }
];
let PayquotePageRoutingModule = class PayquotePageRoutingModule {
};
PayquotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PayquotePageRoutingModule);



/***/ }),

/***/ 2942:
/*!*********************************************!*\
  !*** ./src/app/payquote/payquote.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayquotePageModule": () => (/* binding */ PayquotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payquote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payquote-routing.module */ 4019);
/* harmony import */ var _payquote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payquote.page */ 2967);







let PayquotePageModule = class PayquotePageModule {
};
PayquotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payquote_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayquotePageRoutingModule
        ],
        declarations: [_payquote_page__WEBPACK_IMPORTED_MODULE_1__.PayquotePage]
    })
], PayquotePageModule);



/***/ }),

/***/ 2967:
/*!*******************************************!*\
  !*** ./src/app/payquote/payquote.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayquotePage": () => (/* binding */ PayquotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payquote.page.html?ngResource */ 5235);
/* harmony import */ var _payquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payquote.page.scss?ngResource */ 424);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);






let PayquotePage = class PayquotePage {
    constructor(location, activatedRoute) {
        this.location = location;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        let pay = JSON.parse(this.activatedRoute.snapshot.params['payres']);
        console.log('pay response====', pay);
        this.amount = pay.amount;
        this.transaction_ref = pay.transaction_ref;
        this.policyId = pay.id;
    }
    goback() {
        this.location.back();
    }
};
PayquotePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
PayquotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-payquote',
        template: _payquote_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payquote_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PayquotePage);



/***/ }),

/***/ 424:
/*!********************************************************!*\
  !*** ./src/app/payquote/payquote.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n  font-family: Bliss Pro;\n  font-size: 20px;\n  color: #1A0F55;\n  font-weight: bold;\n}\n\n.wrapper {\n  width: 90%;\n  margin: 5% auto;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n.table-bordered {\n  border: 1px solid #b8b988;\n}\n\ntd {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border: 1px solid #b8b988;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXF1b3RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDRSx5QkFBQTtBQUVKOztBQUFBO0VBQ0UsV0FBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFLRiIsImZpbGUiOiJwYXlxdW90ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQmxpc3MgUHJvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFBMEY1NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiA1JSBhdXRvO1xyXG59XHJcbnRhYmxle1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG4udGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjk4ODtcclxufVxyXG50ZHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOTg4XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5235:
/*!********************************************************!*\
  !*** ./src/app/payquote/payquote.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border cheader\">\n  <ion-toolbar class=\"headBgGlobal\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"padding-left: 25px;\">\n        <ion-buttons>\n          <div style=\"width:100% ;\">\n            <img (click)=\"goback()\" src=\"assets/images/back-arrow.svg\" alt=\"sb-btn\">\n          </div>\n        </ion-buttons>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div class=\"title\">Payment Quote</div>\n      </ion-col>\n      <ion-col class=\"titleclass\" size=\"2\">\n      </ion-col>\n\n\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <div style=\"display:flex;align-items: center;\">\n      <img height=\"50px\" src=\"assets/images/access_point.png\">\n      <div style=\"margin-left:5%;font-size:35px;\">Thank You</div>\n    </div>\n    <p>Please make payments to any of the following bank accounts. Your transaction code is TP0813044857646; Kindly use\n      your transaction code as the payment reference. <br> <br>Your policy details will be sent to you once payment is\n      confirmed. Once payment is made, please send an email to enquiries@cornerstone.com.ng or call 07038764536</p>\n\n    <table class=\"table table-bordered watch\">\n\n      <tbody>\n        <tr>\n\n          <td> Amount to pay: <br><strong>??? {{amount}}</strong></td>\n\n\n\n        </tr>\n\n        <tr>\n\n          <td> Transaction Reference: <br><strong>{{transaction_ref}}</strong></td>\n\n\n\n        </tr>\n\n        <tr>\n\n          <td> Policy Id: <br><strong>{{policyId}}</strong></td>\n\n\n\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_payquote_payquote_module_ts.js.map