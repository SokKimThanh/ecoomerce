"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarouselHolderComponent = void 0;
var core_1 = require("@angular/core");
var CarouselHolderComponent = /** @class */ (function () {
    function CarouselHolderComponent() {
        this.mySlideImages = [
            { id: 1, url: 'assets/images/image1.jpg' },
            { id: 2, url: 'assets/images/image2.jpeg}' },
            { id: 3, url: 'assets/images/image3.jpg' }
        ];
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: true
        };
    }
    CarouselHolderComponent.prototype.ngOnInit = function () { };
    CarouselHolderComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel-holder',
            templateUrl: './carousel-holder.component.html',
            styleUrls: ['./carousel-holder.component.css']
        })
    ], CarouselHolderComponent);
    return CarouselHolderComponent;
}());
exports.CarouselHolderComponent = CarouselHolderComponent;
