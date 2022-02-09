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
    // console.log(this.appCustomAriaForDash);
  }
  ngAfterViewInit() {    
    console.log(this.appCustomAriaForDash);
    
    const customAria = this.appCustomAriaForDash || 'no value'
    const originalValue = this.el.nativeElement.innerText;
    console.log(originalValue);
    if (originalValue == 'mdash') {
      this.renderer.setProperty(this.el.nativeElement, 'innerText', '');

      const span1 = this.renderer.createElement('span');
      const span2 = this.renderer.createElement('span');

      this.renderer.setProperty(span1, 'innerText', customAria);
      this.renderer.setAttribute(span1, 'class', 'visually-hidden');

      this.renderer.setProperty(span2, 'innerText', originalValue);
      // this.renderer.setProperty(span2, 'aria-hidden', true);
      this.renderer.setAttribute(span2,'aria-hidden','true')

      this.renderer.appendChild(this.el.nativeElement, span1);
      this.renderer.appendChild(this.el.nativeElement, span2);
    } else {
    }
  }


}
