"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var generic_component_1 = require("./generic/generic.component");
var router_1 = require("@angular/router");
var welcome_component_1 = require("./welcome/welcome.component");
var gallery_module_1 = require("./gallery/gallery.module");
var forms_1 = require("@angular/forms");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var animations_1 = require("@angular/platform-browser/animations");
var carousel_holder_component_1 = require("./carousel-holder/carousel-holder.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                generic_component_1.GenericComponent,
                welcome_component_1.WelcomeComponent,
                carousel_holder_component_1.CarouselHolderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'generic', component: generic_component_1.GenericComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ]),
                gallery_module_1.GalleryModule,
                ngx_owl_carousel_o_1.CarouselModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
