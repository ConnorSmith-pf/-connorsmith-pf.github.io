(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Qnx":
/*!*******************************************************!*\
  !*** ./src/app/directives/subscriptions.directive.ts ***!
  \*******************************************************/
/*! exports provided: SubscriptionsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsDirective", function() { return SubscriptionsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SubscriptionsDirective {
    constructor() {
        this.subscriptions = [];
    }
    ngOnDestroy() {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
}
SubscriptionsDirective.ɵfac = function SubscriptionsDirective_Factory(t) { return new (t || SubscriptionsDirective)(); };
SubscriptionsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SubscriptionsDirective, selectors: [["", "pfSubscriptions", ""]] });


/***/ }),

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
/* harmony import */ var src_app_directives_subscriptions_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/directives/subscriptions.directive */ "+Qnx");
/* harmony import */ var src_app_enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/themes.enum */ "k8RL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_theming_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/theming.service */ "9YgT");
/* harmony import */ var src_app_services_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/header.service */ "hErN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");







function HeaderComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_3_button_1_Template_button_click_0_listener() { const headerButton_r2 = ctx.$implicit; return headerButton_r2.onClick; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headerButton_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](headerButton_r2.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", headerButton_r2.displayName, " ");
} }
function HeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderComponent_div_3_button_1_Template, 2, 3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.headerButtons);
} }
class HeaderComponent extends src_app_directives_subscriptions_directive__WEBPACK_IMPORTED_MODULE_0__["SubscriptionsDirective"] {
    constructor(themingService, headerService) {
        super();
        this.themingService = themingService;
        this.headerService = headerService;
        this.headerButtons = [];
    }
    ngOnInit() {
        this.headerButtons = this.headerService.HeaderButtons;
        this.subscriptions.push(this.themingService.selectedTheme$.subscribe((selectedTheme) => {
            this.darkThemeSelected = selectedTheme === src_app_enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].darkMode;
        }));
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_theming_service__WEBPACK_IMPORTED_MODULE_3__["ThemingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["pf-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 8, consts: [[1, "header-container"], [1, "header-container__logo-wrapper"], ["src", "assets/images/logo.jpg", "alt", "", 1, "header-container__logo-wrapper--logo"], ["class", "header-container__menu-items--left", 4, "ngIf"], [1, "header-container__menu-items--right"], [3, "disabled", "checked", "change"], [3, "checked", "change"], [1, "header-container__menu-items--left"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-slide-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HeaderComponent_Template_mat_slide_toggle_change_5_listener() { return ctx.themingService.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Dark Theme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-slide-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HeaderComponent_Template_mat_slide_toggle_change_8_listener() { return ctx.themingService.toggleUseSystemTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Use System Theme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.headerButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, ctx.themingService.useSystemTheme$))("checked", ctx.darkThemeSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, ctx.themingService.useSystemTheme$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "96cC":
/*!**********************************************************************!*\
  !*** ./src/app/components/left-side-panel/left-side-panel.module.ts ***!
  \**********************************************************************/
/*! exports provided: LeftSidePanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidePanelModule", function() { return LeftSidePanelModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _left_side_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./left-side-panel.component */ "h86S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class LeftSidePanelModule {
}
LeftSidePanelModule.ɵfac = function LeftSidePanelModule_Factory(t) { return new (t || LeftSidePanelModule)(); };
LeftSidePanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LeftSidePanelModule });
LeftSidePanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LeftSidePanelModule, { declarations: [_left_side_panel_component__WEBPACK_IMPORTED_MODULE_2__["LeftSidePanelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], exports: [_left_side_panel_component__WEBPACK_IMPORTED_MODULE_2__["LeftSidePanelComponent"]] }); })();


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
            this.setTheme(turnOn ? _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].darkMode : _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].lightMode);
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
        this.setTheme(currentTheme === _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].darkMode ? _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].lightMode : _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].darkMode);
    }
    toggleUseSystemTheme() {
        this.setUseSystemTheme(!this.useSystemTheme$.value);
    }
    get preferedTheme() {
        const darkMode = window.matchMedia && this.mediaQueryList.matches;
        return darkMode ? _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].darkMode : _enums_themes_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].lightMode;
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
    production: false,
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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "2MiI");
/* harmony import */ var _left_side_panel_left_side_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../left-side-panel/left-side-panel.component */ "h86S");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





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
    } }, decls: 5, vars: 0, consts: [[1, "container"], [1, "container__header"], [1, "container__left-side-panel"], [1, "container__content"]], template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "pf-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pf-left-side-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _left_side_panel_left_side_panel_component__WEBPACK_IMPORTED_MODULE_3__["LeftSidePanelComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb290LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["pf-main"]], decls: 1, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "main");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _left_side_panel_left_side_panel_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../left-side-panel/left-side-panel.module */ "96cC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class RootModule {
}
RootModule.ɵfac = function RootModule_Factory(t) { return new (t || RootModule)(); };
RootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RootModule });
RootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"], _left_side_panel_left_side_panel_module__WEBPACK_IMPORTED_MODULE_3__["LeftSidePanelModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RootModule, { declarations: [_root_component__WEBPACK_IMPORTED_MODULE_0__["RootComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"], _left_side_panel_left_side_panel_module__WEBPACK_IMPORTED_MODULE_3__["LeftSidePanelModule"]] }); })();


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
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();


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
/* harmony import */ var _modules_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/router.module */ "r2Tv");
/* harmony import */ var _directives_subscriptions_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/subscriptions.directive */ "+Qnx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_root_root_component__WEBPACK_IMPORTED_MODULE_2__["RootComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[_modules_router_module__WEBPACK_IMPORTED_MODULE_4__["AppRouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _components_root_root_module__WEBPACK_IMPORTED_MODULE_3__["RootModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_directives_subscriptions_directive__WEBPACK_IMPORTED_MODULE_5__["SubscriptionsDirective"]], imports: [_modules_router_module__WEBPACK_IMPORTED_MODULE_4__["AppRouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _components_root_root_module__WEBPACK_IMPORTED_MODULE_3__["RootModule"]] }); })();


/***/ }),

/***/ "h86S":
/*!*************************************************************************!*\
  !*** ./src/app/components/left-side-panel/left-side-panel.component.ts ***!
  \*************************************************************************/
/*! exports provided: LeftSidePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidePanelComponent", function() { return LeftSidePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function LeftSidePanelComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LeftSidePanelComponent {
    constructor() {
        this.buttons = [];
    }
    ngOnInit() {
        this.buttons = [
            {
                id: 'test',
                displayName: 'test',
                name: 'test'
            },
            {
                id: 'test',
                displayName: 'test',
                name: 'test'
            }
        ];
    }
}
LeftSidePanelComponent.ɵfac = function LeftSidePanelComponent_Factory(t) { return new (t || LeftSidePanelComponent)(); };
LeftSidePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftSidePanelComponent, selectors: [["pf-left-side-panel"]], decls: 1, vars: 1, consts: [["class", "left-side-panel-container", 4, "ngIf"], [1, "left-side-panel-container"], [1, "btn", "btn-side-panel", "btn-primary"], [1, "btn", "btn-side-panel", "btn-accent"], [1, "btn", "btn-side-panel", "btn-warning"]], template: function LeftSidePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeftSidePanelComponent_nav_0_Template, 7, 0, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWZ0LXNpZGUtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"] });


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
            class: 'btn btn-primary btn-header'
        };
        const aboutMeButton = {
            id: 'aboutMe',
            name: 'aboutMe',
            displayName: 'About Me',
            class: 'btn btn-accent btn-header'
        };
        const repositoriesButton = {
            id: 'repositories',
            name: 'repositories',
            displayName: 'Repositories',
            class: 'btn btn-warning btn-header',
            childButtons: [],
        };
        repositoriesButton.childButtons.push(...[
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
        ]);
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
    Theme["darkMode"] = "dark-theme";
    Theme["lightMode"] = "light-theme";
})(Theme || (Theme = {}));


/***/ }),

/***/ "r2Tv":
/*!******************************************!*\
  !*** ./src/app/modules/router.module.ts ***!
  \******************************************/
/*! exports provided: AppRouterModule, getRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoutes", function() { return getRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/main.component */ "IURz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppRouterModule {
}
AppRouterModule.ɵfac = function AppRouterModule_Factory(t) { return new (t || AppRouterModule)(); };
AppRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRouterModule });
AppRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(getRoutes())], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRouterModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function getRoutes() {
    return [
        { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] },
        { path: '**', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] }
    ];
}


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
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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