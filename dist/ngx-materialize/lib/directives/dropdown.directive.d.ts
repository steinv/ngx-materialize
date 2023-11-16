import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { DropdownInstance, DropdownOptions } from '../types';
import * as i0 from "@angular/core";
export declare class DropdownDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mDropdown: DropdownOptions;
    mInstance: EventEmitter<DropdownInstance>;
    options: DropdownOptions;
    instances: DropdownInstance;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DropdownDirective, "[mDropdown]", never, { "mDropdown": "mDropdown"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
