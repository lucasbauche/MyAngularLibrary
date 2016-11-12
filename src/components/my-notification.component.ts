import { Component, OnInit, 
  trigger,
  state,
  style,
  transition, keyframes,
  animate } from '@angular/core';

@Component({
    selector: 'my-notification',
    templateUrl: './my-notification.component.html',
    styleUrls: ['my-notification.component.css'],
    animations: [
        trigger('showNotification', [
        state('hidden',   style({transform: 'translateY(-150%)'})),
        state('display',   style({transform: 'translateX(150%)'})),
        transition('* => *', [
            animate(3000, keyframes([
                style({opacity: 0, transform: 'translateY(-150%)',  offset: 0}),
                style({opacity: 0, transform: 'translateY(0%)',  offset: .1}),
                style({opacity: 1, transform: 'translateY(0%)',  offset: 0.9}),
                style({opacity: 1, transform: 'translateX(150%)',  offset: 1})
                ]))
            ])
        ])
    ]
})

export class MyNotificationComponent implements OnInit {
    constructor() { }

    title: string;
    content: string;
    animationState: string = 'hidden';
    ngOnInit() { }

    show(title: string, content: string){
        this.title = title;
        this.content = content;

        this.animationState = 'display'

    }
}