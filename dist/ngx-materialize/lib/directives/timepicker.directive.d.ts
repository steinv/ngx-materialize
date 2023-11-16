import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TimepickerDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mTimepicker: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    timeChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimepickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TimepickerDirective, "[mTimepicker]", never, { "mTimepicker": "mTimepicker"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
