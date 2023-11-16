import { Directive, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class MaterialboxDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mMaterialbox);
                this.instances = M.Materialbox.init(this.element.nativeElement, this.options);
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
MaterialboxDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MaterialboxDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
MaterialboxDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: MaterialboxDirective, selector: "[mMaterialbox]", inputs: { mMaterialbox: "mMaterialbox" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: MaterialboxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mMaterialbox]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mMaterialbox: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWxib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RlaW52L25neC1tYXRlcmlhbGl6ZS9zcmMvbGliL2RpcmVjdGl2ZXMvbWF0ZXJpYWxib3guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pILE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQU9sRCxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CLFlBQ1UsT0FBbUIsRUFDRSxRQUFnQjtRQURyQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ0UsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQU5yQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6QyxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBT2IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7aUhBMUJVLG9CQUFvQiw0Q0FRckIsV0FBVztxR0FSVixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7MEJBU0ksTUFBTTsyQkFBQyxXQUFXOzRDQVBaLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0ksU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFBMQVRGT1JNX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmRlY2xhcmUgY29uc3QgTTogYW55O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbU1hdGVyaWFsYm94XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsYm94RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG1NYXRlcmlhbGJveDogb2JqZWN0O1xyXG4gIEBPdXRwdXQoKSBtSW5zdGFuY2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgb3B0aW9ucyA9IHt9O1xyXG4gIGluc3RhbmNlczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm06IE9iamVjdFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMubU1hdGVyaWFsYm94KTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IE0uTWF0ZXJpYWxib3guaW5pdCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLm1JbnN0YW5jZS5lbWl0KHRoaXMuaW5zdGFuY2VzKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlcykge1xyXG4gICAgICB0aGlzLmluc3RhbmNlcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=