import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TooltipDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mTooltip: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TooltipDirective, "[mTooltip]", never, { "mTooltip": "mTooltip"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
