import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PushpinDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mPushpin: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PushpinDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PushpinDirective, "[mPushpin]", never, { "mPushpin": "mPushpin"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
