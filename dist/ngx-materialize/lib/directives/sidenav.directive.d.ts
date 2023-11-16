import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SidenavDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mSidenav: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SidenavDirective, "[mSidenav]", never, { "mSidenav": "mSidenav"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
