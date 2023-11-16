import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SliderDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mSlider: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SliderDirective, "[mSlider]", never, { "mSlider": "mSlider"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
