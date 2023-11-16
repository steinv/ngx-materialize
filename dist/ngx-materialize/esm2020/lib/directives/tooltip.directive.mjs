import { Directive, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class TooltipDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mTooltip);
                this.instances = M.Tooltip.init(this.element.nativeElement, this.options);
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
TooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: TooltipDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
TooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: TooltipDirective, selector: "[mTooltip]", inputs: { mTooltip: "mTooltip" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mTooltip]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mTooltip: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdGVpbnYvbmd4LW1hdGVyaWFsaXplL3NyYy9saWIvZGlyZWN0aXZlcy90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFPbEQsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQixZQUNVLE9BQW1CLEVBQ0UsUUFBZ0I7UUFEckMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNFLGFBQVEsR0FBUixRQUFRLENBQVE7UUFOckMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQU9iLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7OzZHQTFCVSxnQkFBZ0IsNENBUWpCLFdBQVc7aUdBUlYsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzswQkFTSSxNQUFNOzJCQUFDLFdBQVc7NENBUFosUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxTQUFTO3NCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUExBVEZPUk1fSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuZGVjbGFyZSBjb25zdCBNOiBhbnk7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttVG9vbHRpcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG1Ub29sdGlwOiBvYmplY3Q7XHJcbiAgQE91dHB1dCgpIG1JbnN0YW5jZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBvcHRpb25zID0ge307XHJcbiAgaW5zdGFuY2VzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybTogT2JqZWN0XHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgdGhpcy5tVG9vbHRpcCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSBNLlRvb2x0aXAuaW5pdCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLm1JbnN0YW5jZS5lbWl0KHRoaXMuaW5zdGFuY2VzKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluc3RhbmNlcykge1xyXG4gICAgICB0aGlzLmluc3RhbmNlcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==