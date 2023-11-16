import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TapTargetDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mTapTarget: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TapTargetDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TapTargetDirective, "[mTapTarget]", never, { "mTapTarget": "mTapTarget"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
