"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function classLogger(constructor) {
    console.log(constructor.name);
}
function getKeyDetails(t, k) {
    console.log(k, t);
}
let CustomMaths = class CustomMaths {
    value1;
    value2;
    // @getKeyDetails//can't use decorator above constructors
    constructor(x, y) {
        this.value1 = x;
        this.value2 = y;
    }
};
__decorate([
    getKeyDetails,
    __metadata("design:type", Number)
], CustomMaths.prototype, "value2", void 0);
CustomMaths = __decorate([
    classLogger
    // @getKeyDetails
    ,
    __metadata("design:paramtypes", [Number, Number])
], CustomMaths);
const obj38 = new CustomMaths(3, 4);
