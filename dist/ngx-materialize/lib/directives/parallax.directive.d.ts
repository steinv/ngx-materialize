import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ParallaxDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mParallax: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParallaxDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ParallaxDirective, "[mParallax]", never, { "mParallax": "mParallax"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
