import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CollapsibleDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mCollapsible: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CollapsibleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CollapsibleDirective, "[mCollapsible]", never, { "mCollapsible": "mCollapsible"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
