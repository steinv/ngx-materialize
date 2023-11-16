import * as i0 from '@angular/core';
import { EventEmitter, PLATFORM_ID, Directive, Inject, Input, Output, HostListener, NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

class TooltipDirective {
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

class TabsDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mTabs);
                this.instances = M.Tabs.init(this.element.nativeElement, this.options);
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
TabsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: TabsDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
TabsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: TabsDirective, selector: "[mTabs]", inputs: { mTabs: "mTabs" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: TabsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mTabs]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mTabs: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

class CarouselDirective {
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

class CollapsibleDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mCollapsible);
                this.instances = M.Collapsible.init(this.element.nativeElement, this.options);
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
CollapsibleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: CollapsibleDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
CollapsibleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: CollapsibleDirective, selector: "[mCollapsible]", inputs: { mCollapsible: "mCollapsible" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: CollapsibleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mCollapsible]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mCollapsible: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

class DatepickerDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mDatepicker);
                this.instances = M.Datepicker.init(this.element.nativeElement, this.options);
                this.mInstance.emit(this.instances);
            }, 0);
        }
    }
    ngOnDestroy() {
        if (this.instances) {
            this.instances.destroy();
        }
    }
    dateChanges() {
        this.element.nativeElement.dispatchEvent(new CustomEvent('input'));
    }
}
DatepickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: DatepickerDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
DatepickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: DatepickerDirective, selector: "[mDatepicker]", inputs: { mDatepicker: "mDatepicker" }, outputs: { mInstance: "mInstance" }, host: { listeners: { "change": "dateChanges()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: DatepickerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mDatepicker]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mDatepicker: [{
                type: Input
            }], mInstance: [{
                type: Output
            }], dateChanges: [{
                type: HostListener,
                args: ['change']
            }] } });

class DropdownDirective {
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

class FormSelectDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mFormSelect);
                this.instances = M.FormSelect.init(this.element.nativeElement, this.options);
                this.instances.update = this.update.bind(this);
                this.mInstance.emit(this.instances);
            }, 0);
        }
    }
    ngOnDestroy() {
        if (this.instances) {
            this.instances.destroy();
        }
    }
    update() {
        if (this.instances) {
            setTimeout(() => {
                this.instances = M.FormSelect.init(this.element.nativeElement, this.options);
            }, 0);
        }
    }
}
FormSelectDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: FormSelectDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
FormSelectDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: FormSelectDirective, selector: "[mFormSelect]", inputs: { mFormSelect: "mFormSelect" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: FormSelectDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mFormSelect]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mFormSelect: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

class ModalDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mModal);
                this.instances = M.Modal.init(this.element.nativeElement, this.options);
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
ModalDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: ModalDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
ModalDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: ModalDirective, selector: "[mModal]", inputs: { mModal: "mModal" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: ModalDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mModal]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mModal: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

class SidenavDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mSidenav);
                this.instances = M.Sidenav.init(this.element.nativeElement, this.options);
                this.mInstance.emit(this.instances);
            }, 0);
        }
    }
    ngOnDestroy() {
        if (this.instances) {
            this.instances.close();
            this.instances.destroy();
        }
    }
}
SidenavDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: SidenavDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
SidenavDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: SidenavDirective, selector: "[mSidenav]", inputs: { mSidenav: "mSidenav" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: SidenavDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mSidenav]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mSidenav: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

class TapTargetDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mTapTarget);
                this.instances = M.TapTarget.init(this.element.nativeElement, this.options);
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
TapTargetDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: TapTargetDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
TapTargetDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: TapTargetDirective, selector: "[mTapTarget]", inputs: { mTapTarget: "mTapTarget" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: TapTargetDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mTapTarget]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mTapTarget: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

class MaterialboxDirective {
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

class SliderDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mSlider);
                this.instances = M.Slider.init(this.element.nativeElement, this.options);
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
SliderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: SliderDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
SliderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: SliderDirective, selector: "[mSlider]", inputs: { mSlider: "mSlider" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: SliderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mSlider]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mSlider: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

class ScrollSpyDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {
            'getActiveElement': (id) => 'a[href$="#' + id + '"]'
        };
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mScrollSpy);
                this.instances = M.ScrollSpy.init(this.element.nativeElement, this.options);
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
ScrollSpyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: ScrollSpyDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
ScrollSpyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: ScrollSpyDirective, selector: "[mScrollSpy]", inputs: { mScrollSpy: "mScrollSpy" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: ScrollSpyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mScrollSpy]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mScrollSpy: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

class AutocompleteDirective {
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

class ChipsDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mChips);
                this.instances = M.Chips.init(this.element.nativeElement, this.options);
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
ChipsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: ChipsDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
ChipsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: ChipsDirective, selector: "[mChips]", inputs: { mChips: "mChips" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: ChipsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mChips]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mChips: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

class TimepickerDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mTimepicker);
                this.instances = M.Timepicker.init(this.element.nativeElement, this.options);
                this.mInstance.emit(this.instances);
            }, 0);
        }
    }
    ngOnDestroy() {
        if (this.instances) {
            this.instances.destroy();
        }
    }
    timeChanges() {
        this.element.nativeElement.dispatchEvent(new CustomEvent('input'));
    }
}
TimepickerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: TimepickerDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
TimepickerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: TimepickerDirective, selector: "[mTimepicker]", inputs: { mTimepicker: "mTimepicker" }, outputs: { mInstance: "mInstance" }, host: { listeners: { "change": "timeChanges()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: TimepickerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mTimepicker]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mTimepicker: [{
                type: Input
            }], mInstance: [{
                type: Output
            }], timeChanges: [{
                type: HostListener,
                args: ['change']
            }] } });

class ParallaxDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mParallax);
                this.instances = M.Parallax.init(this.element.nativeElement, this.options);
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
ParallaxDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: ParallaxDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
ParallaxDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: ParallaxDirective, selector: "[mParallax]", inputs: { mParallax: "mParallax" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: ParallaxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mParallax]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mParallax: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

class PushpinDirective {
    constructor(element, platform) {
        this.element = element;
        this.platform = platform;
        this.mInstance = new EventEmitter();
        this.options = {};
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platform)) {
            setTimeout(() => {
                Object.assign(this.options, this.mPushpin);
                this.instances = M.Pushpin.init(this.element.nativeElement, this.options);
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
PushpinDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: PushpinDirective, deps: [{ token: i0.ElementRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Directive });
PushpinDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.4", type: PushpinDirective, selector: "[mPushpin]", inputs: { mPushpin: "mPushpin" }, outputs: { mInstance: "mInstance" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: PushpinDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[mPushpin]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { mPushpin: [{
                type: Input
            }], mInstance: [{
                type: Output
            }] } });

const M_MODULES = [
    TooltipDirective,
    TabsDirective,
    CarouselDirective,
    CollapsibleDirective,
    DatepickerDirective,
    DropdownDirective,
    FormSelectDirective,
    ModalDirective,
    SidenavDirective,
    TapTargetDirective,
    MaterialboxDirective,
    SliderDirective,
    ScrollSpyDirective,
    AutocompleteDirective,
    ChipsDirective,
    TimepickerDirective,
    ParallaxDirective,
    PushpinDirective
];
class NgxMaterialize {
}
NgxMaterialize.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxMaterialize, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxMaterialize.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: NgxMaterialize, declarations: [TooltipDirective,
        TabsDirective,
        CarouselDirective,
        CollapsibleDirective,
        DatepickerDirective,
        DropdownDirective,
        FormSelectDirective,
        ModalDirective,
        SidenavDirective,
        TapTargetDirective,
        MaterialboxDirective,
        SliderDirective,
        ScrollSpyDirective,
        AutocompleteDirective,
        ChipsDirective,
        TimepickerDirective,
        ParallaxDirective,
        PushpinDirective], exports: [TooltipDirective,
        TabsDirective,
        CarouselDirective,
        CollapsibleDirective,
        DatepickerDirective,
        DropdownDirective,
        FormSelectDirective,
        ModalDirective,
        SidenavDirective,
        TapTargetDirective,
        MaterialboxDirective,
        SliderDirective,
        ScrollSpyDirective,
        AutocompleteDirective,
        ChipsDirective,
        TimepickerDirective,
        ParallaxDirective,
        PushpinDirective] });
NgxMaterialize.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxMaterialize });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: NgxMaterialize, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: M_MODULES,
                    exports: M_MODULES
                }]
        }] });

function toast(args) {
    M.toast(args);
}
function updateTextFields() {
    setTimeout(() => M.updateTextFields(), 100);
}
function textareaAutoResize(...args) {
    setTimeout(() => M.textareaAutoResize(...args), 100);
}

/**
 * Generated bundle index. Do not edit.
 */

export { AutocompleteDirective, CarouselDirective, ChipsDirective, CollapsibleDirective, DatepickerDirective, DropdownDirective, FormSelectDirective, MaterialboxDirective, ModalDirective, NgxMaterialize, ParallaxDirective, PushpinDirective, ScrollSpyDirective, SidenavDirective, SliderDirective, TabsDirective, TapTargetDirective, TimepickerDirective, TooltipDirective, textareaAutoResize, toast, updateTextFields };
//# sourceMappingURL=steinv-ngx-materialize.mjs.map
//# sourceMappingURL=steinv-ngx-materialize.mjs.map
