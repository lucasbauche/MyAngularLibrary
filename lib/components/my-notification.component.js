var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, trigger, state, style, transition, keyframes, animate } from '@angular/core';
export var MyNotificationComponent = (function () {
    function MyNotificationComponent() {
        this.animationState = 'hidden';
    }
    MyNotificationComponent.prototype.ngOnInit = function () { };
    MyNotificationComponent.prototype.show = function (title, content) {
        this.title = title;
        this.content = content;
        this.animationState = 'display';
    };
    MyNotificationComponent = __decorate([
        Component({
            selector: 'my-notification',
            template: "\n\n      <div class=\"notification\" [@showNotification]=\"animationState\">\n      <div>{{title}}</div>\n      {{content}}\n      </div>\n    ",
            styles: ["\n      .notification{position:fixed;right:20px;top:20px;background:#ec3761;padding:20px;font-family:Arial;color:#fff}.notification>div{font-size:20px;font-weight:700;margin-bottom:10px}\n    "],
            animations: [
                trigger('showNotification', [
                    state('hidden', style({ transform: 'translateY(-150%)' })),
                    state('display', style({ transform: 'translateX(150%)' })),
                    transition('* => *', [
                        animate(3000, keyframes([
                            style({ opacity: 0, transform: 'translateY(-150%)', offset: 0 }),
                            style({ opacity: 0, transform: 'translateY(0%)', offset: .1 }),
                            style({ opacity: 1, transform: 'translateY(0%)', offset: 0.9 }),
                            style({ opacity: 1, transform: 'translateX(150%)', offset: 1 })
                        ]))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MyNotificationComponent);
    return MyNotificationComponent;
}());

//# sourceMappingURL=my-notification.component.js.map
