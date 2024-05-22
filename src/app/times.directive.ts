import { Directive,TemplateRef,ViewContainerRef ,Input} from '@angular/core';

@Directive({
  selector: '[appTimes]',
  standalone: true
})
export class TimesDirective {
  @Input("appTimes")set render (time : number){
    for (let i=0 ; i<time ;i++){
      this.vcRef.createEmbeddedView(this.tempelateRef,{})
    }
  }

  constructor(private tempelateRef : TemplateRef<any>, private vcRef : ViewContainerRef) { }

}
