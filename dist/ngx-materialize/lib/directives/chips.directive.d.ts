import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ChipsDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mChips: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChipsDirective, "[mChips]", never, { "mChips": "mChips"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
