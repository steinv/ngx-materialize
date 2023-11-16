import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CarouselDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mCarousel: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CarouselDirective, "[mCarousel]", never, { "mCarousel": "mCarousel"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
