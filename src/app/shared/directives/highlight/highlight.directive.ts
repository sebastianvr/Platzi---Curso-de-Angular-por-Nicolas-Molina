import { Directive, ElementRef } from '@angular/core';

// Las directivas sirven para modificar el DOM dinamicamente

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'red';
   }

}
