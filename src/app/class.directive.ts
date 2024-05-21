import { Directive,ElementRef,Renderer2,HostBinding,HostListener ,input, Input} from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {
  //@HostBinding('style.backgroundColor') backgroundColor : string ='transparent';
  @Input()set backgroundColor(color : string){
    this.elementref.nativeElement.style.backgroundColor=color;
  }
  constructor(private elementref : ElementRef , private renderer : Renderer2) {
    //this.elementref.nativeElement.style.backgroundcolor = 'red';
    //this.renderer.setStyle(this.elementref.nativeElement,'background-color' , 'red');
    //console.log("its test");


   }
  @HostListener('mouseenter') inmouseover(){
    //this.renderer.setStyle(this.elementref.nativeElement,'background-color' , 'yellow');
    //this.backgroundColor ='yellow';
  }
  @HostListener('mouseleave') onMouseOut(){
    //this.backgroundColor='transparent';
  }

}
