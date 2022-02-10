import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appShowMenu]',
})
export class ShowMenuDirective implements OnInit {
  removedCircleChild: any;
  circleEleParent: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.circleEleParent = this.el.nativeElement.children[0].children[0];
    this.removedCircleChild = this.circleEleParent.children[3];
    this.removeLastCircleChild();
  }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    const targetEle = this.el.nativeElement.parentElement.lastChild;

    if (this.el.nativeElement.contains(event.target)) {
      if (targetEle.classList.contains('show')) {
        this.renderer.removeClass(targetEle, 'show');
        this.removeLastCircleChild();
      } else {
        this.renderer.addClass(targetEle, 'show');
        this.renderer.appendChild(
          this.circleEleParent,
          this.removedCircleChild
        );
      }
    } else {
      this.renderer.removeClass(targetEle, 'show');
      this.removeLastCircleChild();
    }
  }

  removeLastCircleChild() {
    this.circleEleParent.children.length === 4
      ? this.renderer.removeChild(
          this.circleEleParent,
          this.circleEleParent.children[3]
        )
      : null;
  }
}
