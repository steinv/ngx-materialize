import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ModalDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mModal: object;
    mInstance: EventEmitter<any>;
    options: {};
    instances: any;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalDirective, "[mModal]", never, { "mModal": "mModal"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
