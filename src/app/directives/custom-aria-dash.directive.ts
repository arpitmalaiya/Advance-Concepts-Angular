import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomAriaDash]'
})
export class CustomAriaDashDirective implements OnInit,AfterViewInit{

  @Input() appCustomAriaForDash :string = '';

  constructor(
    private viewContainer: ViewContainerRef,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

 

  ngOnInit(){
  }
  ngAfterViewInit() {            
    const customAria = this.appCustomAriaForDash || 'no value'
    const originalValue = this.el.nativeElement.textContent;
    console.log(originalValue);
    if (originalValue == 'mdash') {
      this.renderer.setProperty(this.el.nativeElement, 'textContent', '');

      const span1 = this.renderer.createElement('span');
      const span2 = this.renderer.createElement('span');

      this.renderer.setProperty(span1, 'textContent', customAria);
      this.renderer.setAttribute(span1, 'class', 'visually-hidden');

      this.renderer.setProperty(span2, 'textContent', originalValue);
      // this.renderer.setProperty(span2, 'aria-hidden', true);
      this.renderer.setAttribute(span2,'aria-hidden','true')

      this.renderer.appendChild(this.el.nativeElement, span1);
      this.renderer.appendChild(this.el.nativeElement, span2);
    } else {
    }
  }


}
