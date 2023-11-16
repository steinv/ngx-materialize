import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { AutocompleteInstance, AutocompleteOptions } from '../types';
import * as i0 from "@angular/core";
export declare class AutocompleteDirective implements OnInit, OnDestroy {
    private element;
    private platform;
    mAutocomplete: AutocompleteOptions;
    mInstance: EventEmitter<AutocompleteInstance>;
    options: AutocompleteOptions;
    instances: AutocompleteInstance;
    constructor(element: ElementRef, platform: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onAutocomplete(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutocompleteDirective, "[mAutocomplete]", never, { "mAutocomplete": "mAutocomplete"; }, { "mInstance": "mInstance"; }, never, never, false, never>;
}
