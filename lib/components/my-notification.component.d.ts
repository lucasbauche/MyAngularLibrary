import { OnInit } from '@angular/core';
export declare class MyNotificationComponent implements OnInit {
    constructor();
    title: string;
    content: string;
    animationState: string;
    ngOnInit(): void;
    show(title: string, content: string): void;
}
