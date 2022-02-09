import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowMenu]'
})
export class ShowMenuDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    const targetEle = this.el.nativeElement.parentElement.lastChild;

    if (this.el.nativeElement.contains(event.target)) {
      targetEle.classList.contains('show')
        ? this.renderer.removeClass(targetEle, 'show')
        : this.renderer.addClass(targetEle, 'show');
    } else {
      this.renderer.removeClass(targetEle, 'show');
    }
  }

}
