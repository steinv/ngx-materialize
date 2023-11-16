import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ScrollSpyDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mScrollSpy: object;
    mInstance: EventEmitter<any>;
    options: {
        getActiveElement: (id: any) => string;
    };
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollSpyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ScrollSpyDirective, "[mScrollSpy]", never, { "mScrollSpy": "mScrollSpy"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
