import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
})
export class HighlightCard implements OnChanges {

  @Input('appHighlightCard') defaultColor:string='black';
  @Input() hoverColor:string='black';

  constructor(private ele:ElementRef) {
    
  }
  ngOnChanges(){
    this.ele.nativeElement.style.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseover')
  over(){
    this.ele.nativeElement.style.backgroundColor=this.hoverColor;
  }

  @HostListener('mouseout')
  out(){
    this.ele.nativeElement.style.backgroundColor=this.defaultColor;
  }
}
