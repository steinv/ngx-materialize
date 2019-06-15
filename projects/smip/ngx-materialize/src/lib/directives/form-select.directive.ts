import {Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

declare const M: any;

@Directive({
  selector: '[mFormSelect]'
})
export class FormSelectDirective implements OnInit, OnDestroy {
  @Input() mFormSelect: object;
  @Output() mInstance = new EventEmitter();
  options = {};
  instances: any;

  constructor(
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platform: Object
  ) {
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

  ngOnDestroy(): void {
    if (this.instances) {
      this.instances.destroy();
    }
  }

  update() {
    this.instances.destroy();
    setTimeout(() => {
      this.instances = M.FormSelect.init(this.element.nativeElement, this.options);
    }, 0);
  }

}
