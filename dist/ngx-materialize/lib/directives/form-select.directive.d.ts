import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormSelectInstance, FormSelectOptions } from '../types';
import * as i0 from "@angular/core";
export declare class FormSelectDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mFormSelect: FormSelectOptions;
    mInstance: EventEmitter<FormSelectInstance>;
    options: FormSelectOptions;
    instances: FormSelectInstance;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormSelectDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormSelectDirective, "[mFormSelect]", never, { "mFormSelect": "mFormSelect"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
