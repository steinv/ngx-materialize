import { Directive, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class DropdownDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mDropdown);
                this.instances = M.Dropdown.init(this.element.nativeElement, this.options);
                this.mInstance.emit(this.instances);
            }, 0);
        }
    }
    ngOnDestroy() {
        if (this.instances) {
            this.instances.destroy();
        }
    }
}
DropdownDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: DropdownDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
DropdownDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: DropdownDirective, selector: "[mDropdown]", inputs: { mDropdown: "mDropdown" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: DropdownDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mDropdown]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mDropdown: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RlaW52L25neC1tYXRlcmlhbGl6ZS9zcmMvbGliL2RpcmVjdGl2ZXMvZHJvcGRvd24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pILE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQVFsRCxNQUFNLE9BQU8saUJBQWlCO0lBTTVCLFlBQ1UsT0FBbUIsRUFDRSxRQUFnQjtRQURyQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ0UsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQU5yQyxjQUFTLEdBQW1DLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekUsWUFBTyxHQUFvQixFQUFFLENBQUM7SUFPOUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OEdBMUJVLGlCQUFpQiw0Q0FRbEIsV0FBVztrR0FSVixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFIN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7OzBCQVNJLE1BQU07MkJBQUMsV0FBVzs0Q0FQWixTQUFTO3NCQUFqQixLQUFLO2dCQUNJLFNBQVM7c0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBQTEFURk9STV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7RHJvcGRvd25JbnN0YW5jZSwgRHJvcGRvd25PcHRpb25zfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IE06IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21Ecm9wZG93bl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBtRHJvcGRvd246IERyb3Bkb3duT3B0aW9ucztcclxuICBAT3V0cHV0KCkgbUluc3RhbmNlOiBFdmVudEVtaXR0ZXI8RHJvcGRvd25JbnN0YW5jZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgb3B0aW9uczogRHJvcGRvd25PcHRpb25zID0ge307XHJcbiAgaW5zdGFuY2VzOiBEcm9wZG93bkluc3RhbmNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm06IE9iamVjdFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMubURyb3Bkb3duKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IE0uRHJvcGRvd24uaW5pdCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLm1JbnN0YW5jZS5lbWl0KHRoaXMuaW5zdGFuY2VzKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlcykge1xyXG4gICAgICB0aGlzLmluc3RhbmNlcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==