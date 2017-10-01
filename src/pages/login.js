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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var login_service_1 = require("../services/login.service");
//import {LoginService} from '../../services/login.service'
var LoginComponent = (function () {
    function LoginComponent(router, location, loginService) {
        this.router = router;
        this.location = location;
        this.loginService = loginService;
        this.autoLogin = false;
        this.blocksubmit = false;
        this.showerror = true;
        this.msgs = [];
    }
    LoginComponent.prototype.show = function () {
        this.msgs.push({ severity: 'error', summary: '用户名或密码错误', detail: '' });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.blocksubmit = true;
        this.loginService.login({ username: this.userName, password: this.passWord, autoLogin: this.autoLogin }).then(function (res) {
            if (res) {
                _this.showerror = false;
                _this.userID = res;
                _this.blocksubmit = false;
                setTimeout(function () {
                    _this.location.replaceState('/');
                    _this.router.navigate(['projectList'], { queryParams: { ticket: res } });
                }, 500);
            }
            else {
                _this.blocksubmit = false;
                _this.show();
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-page',
            templateUrl: './login.html',
            styleUrls: ['./login.css'],
        }),
        __metadata("design:paramtypes", [router_1.Router, common_1.Location, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map