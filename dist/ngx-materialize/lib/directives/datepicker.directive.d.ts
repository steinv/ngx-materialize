import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DatepickerDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mDatepicker: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    dateChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DatepickerDirective, "[mDatepicker]", never, { "mDatepicker": "mDatepicker"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
