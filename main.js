(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Source\connorsmith-pf.github.io\connorsmith-pf.github.io\web\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/header.service */ "hErN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HeaderComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_3_button_1_Template_button_click_0_listener() { const headerButton_r2 = ctx.$implicit; return headerButton_r2.onClick; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headerButton_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", headerButton_r2.displayName, " ");
} }
function HeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_3_button_1_Template, 2, 1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.headerButtons);
} }
class HeaderComponent {
    constructor(headerService) {
        this.headerService = headerService;
        this.headerButtons = [];
    }
    ngOnInit() {
        this.headerButtons = this.headerService.HeaderButtons;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["pf-header"]], decls: 4, vars: 1, consts: [[1, "header-container"], [1, "header-container__logo-wrapper"], ["src", "assets/images/logo.jpg", "alt", "", 1, "header-container__logo-wrapper--logo"], ["class", "header-container__menu-items-wrapper", 4, "ngIf"], [1, "header-container__menu-items-wrapper"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerButtons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".header-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"logo menu-items\";\n  grid-template-columns: 16rem 1fr;\n  width: 100vw;\n  height: 6rem;\n}\n.header-container__logo-wrapper[_ngcontent-%COMP%] {\n  grid-area: logo;\n}\n.header-container__logo-wrapper--logo[_ngcontent-%COMP%] {\n  margin: 1rem;\n  width: 14rem;\n  height: 4rem;\n}\n.header-container__menu-items-wrapper[_ngcontent-%COMP%] {\n  grid-area: menu-items;\n  display: flex;\n}\n.header-container__menu-items-wrapper--menu-item[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7QUFDSjtBQUFJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRU47QUFFRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUk7RUFDRSx1QkFBQTtBQUFOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibG9nbyBtZW51LWl0ZW1zXCI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNnJlbSAxZnI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogNnJlbTtcclxuXHJcbiAgJl9fbG9nby13cmFwcGVyIHtcclxuICAgIGdyaWQtYXJlYTogbG9nbztcclxuICAgICYtLWxvZ28ge1xyXG4gICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgIHdpZHRoOiAxNHJlbTtcclxuICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbWVudS1pdGVtcy13cmFwcGVyIHtcclxuICAgIGdyaWQtYXJlYTogbWVudS1pdGVtcztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgJi0tbWVudS1pdGVtIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "9YgT":
/*!*********************************************!*\
  !*** ./src/app/services/theming.service.ts ***!
  \*********************************************/
/*! exports provided: ThemingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingService", function() { return ThemingService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/themes.enum */ "k8RL");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "oAJy");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ThemingService {
    constructor(ref) {
        this.ref = ref;
        this.selectedTheme$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.preferedTheme);
        this.useSystemTheme$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this.themeListenerEvent = (e) => {
            const turnOn = e.matches;
            this.setTheme(turnOn ? _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].DARK_MODE : _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].LIGHT_MODE);
            this.ref.tick();
        };
        localforage__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('use-system-theme', (err, value) => {
            this.setUseSystemTheme(value !== null && value !== void 0 ? value : true);
        });
    }
    toggleTheme() {
        if (this.useSystemTheme$.value) {
            return;
        }
        const currentTheme = this.selectedTheme$.value;
        this.setTheme(currentTheme === _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].DARK_MODE ? _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].LIGHT_MODE : _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].DARK_MODE);
    }
    toggleUseSystemTheme() {
        this.setUseSystemTheme(!this.useSystemTheme$.value);
    }
    get preferedTheme() {
        const darkMode = window.matchMedia && this.mediaQueryList.matches;
        return darkMode ? _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].DARK_MODE : _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].LIGHT_MODE;
    }
    get mediaQueryList() {
        if (!this._darkModeMedia) {
            this._darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');
        }
        return this._darkModeMedia;
    }
    setUseSystemTheme(shouldUse) {
        localforage__WEBPACK_IMPORTED_MODULE_2___default.a.setItem('use-system-theme', shouldUse);
        this.useSystemTheme$.next(shouldUse);
        if (shouldUse) {
            this.setTheme(this.preferedTheme);
            this.setupSystemThemeListener();
        }
        else {
            this.removeSystemThemeListener();
        }
    }
    setupSystemThemeListener() {
        console.log('Start Event Listener');
        this.mediaQueryList.addEventListener('change', this.themeListenerEvent);
    }
    removeSystemThemeListener() {
        console.log('Remove Event Listener');
        this.mediaQueryList.removeEventListener('change', this.themeListenerEvent);
    }
    setTheme(themeToSet) {
        localforage__WEBPACK_IMPORTED_MODULE_2___default.a.setItem('theme', themeToSet);
        this.selectedTheme$.next(themeToSet);
    }
}
ThemingService.ɵfac = function ThemingService_Factory(t) { return new (t || ThemingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"])); };
ThemingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ThemingService, factory: ThemingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "DFQn":
/*!***************************************************!*\
  !*** ./src/app/components/root/root.component.ts ***!
  \***************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_theming_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/theming.service */ "9YgT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class RootComponent {
    constructor(themingService) {
        this.themingService = themingService;
        this.cssClass = this.themingService.preferedTheme;
        this.title = 'pf';
    }
    ngOnInit() {
        this.themeSubscription = this.themingService.selectedTheme$.subscribe((themeToApply) => {
            this.cssClass = themeToApply;
        });
        this.useSystemThemeSubscription = this.themingService.useSystemTheme$.subscribe((useSystemTheme) => { });
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.themeSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe;
        (_b = this.useSystemThemeSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
RootComponent.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_theming_service__WEBPACK_IMPORTED_MODULE_1__["ThemingService"])); };
RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["pf-root"]], hostVars: 2, hostBindings: function RootComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);
    } }, decls: 13, vars: 0, consts: [[1, "mat-app-background"], ["mat-raised-button", "", 3, "click"], [1, "light-theme"], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"]], template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RootComponent_Template_button_click_1_listener() { return ctx.themingService.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Toggle Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RootComponent_Template_button_click_3_listener() { return ctx.themingService.toggleUseSystemTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Toggle Use System Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Main Theme: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb290LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "SPs5":
/*!************************************************!*\
  !*** ./src/app/components/root/root.module.ts ***!
  \************************************************/
/*! exports provided: RootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootModule", function() { return RootModule; });
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.component */ "DFQn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.module */ "WinS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class RootModule {
}
RootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RootModule });
RootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function RootModule_Factory(t) { return new (t || RootModule)(); }, imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RootModule, { declarations: [_root_component__WEBPACK_IMPORTED_MODULE_0__["RootComponent"]], imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"]] }); })();


/***/ }),

/***/ "WinS":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "2MiI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/root/root.component */ "DFQn");
/* harmony import */ var _components_root_root_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/root/root.module */ "SPs5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_root_root_component__WEBPACK_IMPORTED_MODULE_2__["RootComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _components_root_root_module__WEBPACK_IMPORTED_MODULE_3__["RootModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _components_root_root_module__WEBPACK_IMPORTED_MODULE_3__["RootModule"]] }); })();


/***/ }),

/***/ "hErN":
/*!********************************************!*\
  !*** ./src/app/services/header.service.ts ***!
  \********************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderService {
    constructor() { }
    get HeaderButtons() {
        const homeButton = {
            id: 'home',
            name: 'home',
            displayName: 'Home',
        };
        const aboutMeButton = {
            id: 'aboutMe',
            name: 'aboutMe',
            displayName: 'About Me',
        };
        const repositoryChildButtons = [
            {
                id: 'contacts-ngrx',
                name: 'contacts-ngrx',
                displayName: 'Contacts - NGRX',
            },
            {
                id: 'restaurant-menu-observable-store',
                name: 'restaurant-menu-observable-store',
                displayName: 'Restaurant Menu - Observable Store',
            },
            {
                id: 'shopping-cart-ngxs',
                name: 'shopping-cart-ngxs',
                displayName: 'Shopping Cart - NGXS',
            },
        ];
        const repositoriesButton = {
            id: 'repositories',
            name: 'repositories',
            displayName: 'Repositories',
            childButtons: repositoryChildButtons,
        };
        return [homeButton, aboutMeButton, repositoriesButton];
    }
}
HeaderService.ɵfac = function HeaderService_Factory(t) { return new (t || HeaderService)(); };
HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderService, factory: HeaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "k8RL":
/*!**************************************!*\
  !*** ./src/app/enums/themes.enum.ts ***!
  \**************************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
var Theme;
(function (Theme) {
    Theme["DARK_MODE"] = "dark-theme";
    Theme["LIGHT_MODE"] = "light-theme";
})(Theme || (Theme = {}));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map