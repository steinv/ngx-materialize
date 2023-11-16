import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MaterialboxDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mMaterialbox: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialboxDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MaterialboxDirective, "[mMaterialbox]", never, { "mMaterialbox": "mMaterialbox"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
