import { Directive, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class CarouselDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mCarousel);
                this.instances = M.Carousel.init(this.element.nativeElement, this.options);
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
CarouselDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: CarouselDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
CarouselDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: CarouselDirective, selector: "[mCarousel]", inputs: { mCarousel: "mCarousel" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: CarouselDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mCarousel]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mCarousel: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RlaW52L25neC1tYXRlcmlhbGl6ZS9zcmMvbGliL2RpcmVjdGl2ZXMvY2Fyb3VzZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pILE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQU9sRCxNQUFNLE9BQU8saUJBQWlCO0lBTTVCLFlBQ1UsT0FBbUIsRUFDRSxRQUFnQjtRQURyQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ0UsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQU5yQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6QyxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBT2IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OEdBMUJVLGlCQUFpQiw0Q0FRbEIsV0FBVztrR0FSVixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFIN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7OzBCQVNJLE1BQU07MkJBQUMsV0FBVzs0Q0FQWixTQUFTO3NCQUFqQixLQUFLO2dCQUNJLFNBQVM7c0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBQTEFURk9STV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5kZWNsYXJlIGNvbnN0IE06IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW21DYXJvdXNlbF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBtQ2Fyb3VzZWw6IG9iamVjdDtcclxuICBAT3V0cHV0KCkgbUluc3RhbmNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIG9wdGlvbnMgPSB7fTtcclxuICBpbnN0YW5jZXM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtOiBPYmplY3RcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB0aGlzLm1DYXJvdXNlbCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSBNLkNhcm91c2VsLmluaXQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tSW5zdGFuY2UuZW1pdCh0aGlzLmluc3RhbmNlcyk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZXMpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=