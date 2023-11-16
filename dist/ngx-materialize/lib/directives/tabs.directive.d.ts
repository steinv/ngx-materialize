import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TabsDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mTabs: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TabsDirective, "[mTabs]", never, { "mTabs": "mTabs"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
