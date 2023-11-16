import { Directive, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class AutocompleteDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mAutocomplete);
                this.instances = M.Autocomplete.init(this.element.nativeElement, this.options);
                this.mInstance.emit(this.instances);
            }, 0);
        }
    }
    ngOnDestroy() {
        if (this.instances) {
            this.instances.destroy();
        }
    }
    onAutocomplete() {
        this.element.nativeElement.dispatchEvent(new CustomEvent('input'));
    }
}
AutocompleteDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AutocompleteDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
AutocompleteDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: AutocompleteDirective, selector: "[mAutocomplete]", inputs: { mAutocomplete: "mAutocomplete" }, outputs: { mInstance: "mInstance" }, host: { listeners: { "change": "onAutocomplete()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: AutocompleteDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mAutocomplete]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mAutocomplete: [{
                type: Input
            }], mInstance: [{
                type: Output
            }], onAutocomplete: [{
                type: HostListener,
                args: ['change']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0ZWludi9uZ3gtbWF0ZXJpYWxpemUvc3JjL2xpYi9kaXJlY3RpdmVzL2F1dG9jb21wbGV0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQVFsRCxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQ1UsT0FBbUIsRUFDRSxRQUFnQjtRQURyQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ0UsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQU5yQyxjQUFTLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0UsWUFBTyxHQUF3QixFQUFFLENBQUM7SUFPbEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUV1QixjQUFjO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O2tIQTlCVSxxQkFBcUIsNENBUXRCLFdBQVc7c0dBUlYscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7OzBCQVNJLE1BQU07MkJBQUMsV0FBVzs0Q0FQWixhQUFhO3NCQUFyQixLQUFLO2dCQUNJLFNBQVM7c0JBQWxCLE1BQU07Z0JBMEJpQixjQUFjO3NCQUFyQyxZQUFZO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFBMQVRGT1JNX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtBdXRvY29tcGxldGVJbnN0YW5jZSwgQXV0b2NvbXBsZXRlT3B0aW9uc30gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBNOiBhbnk7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttQXV0b2NvbXBsZXRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBtQXV0b2NvbXBsZXRlOiBBdXRvY29tcGxldGVPcHRpb25zO1xyXG4gIEBPdXRwdXQoKSBtSW5zdGFuY2U6IEV2ZW50RW1pdHRlcjxBdXRvY29tcGxldGVJbnN0YW5jZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgb3B0aW9uczogQXV0b2NvbXBsZXRlT3B0aW9ucyA9IHt9O1xyXG4gIGluc3RhbmNlczogQXV0b2NvbXBsZXRlSW5zdGFuY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybTogT2JqZWN0XHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgdGhpcy5tQXV0b2NvbXBsZXRlKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IE0uQXV0b2NvbXBsZXRlLmluaXQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tSW5zdGFuY2UuZW1pdCh0aGlzLmluc3RhbmNlcyk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZXMpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJykgb25BdXRvY29tcGxldGUoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW5wdXQnKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==