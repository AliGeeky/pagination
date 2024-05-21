import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {

  constructor(private elementref : ElementRef , private renderer : Renderer2) {
    //this.elementref.nativeElement.style.backgroundcolor = 'red';
    this.renderer.setStyle(this.elementref.nativeElement,'background-color' , 'red');
    //console.log("its test");
   }

}
