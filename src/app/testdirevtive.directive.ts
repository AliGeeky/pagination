import { Directive ,ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appTestdirevtive]',
  standalone: true
})
export class TestdirevtiveDirective {
  @Input('appTestdirevtive') set ClassNames(clsobj :any){
    for(let key in clsobj){
      console.log('key : '+key);  //
      console.log('value :'+clsobj[key])// True -- False
      if (clsobj[key]){
        this.elementref.nativeElement.classList.add(key);
      }
      else{
        this,this.elementref.nativeElement.classList.remove(key);
      }
    }
  }

  constructor(private elementref : ElementRef) { }

}
