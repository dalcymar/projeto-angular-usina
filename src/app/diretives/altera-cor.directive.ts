import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlteraCor]'
})
export class AlteraCorDirective {

  constructor(private elemento: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.mudarFundo('red');
  }

  @HostListener('mouseout') onMouseOut() {
    this.fundoPadrao();
  }

  // método para alterar a cor
  private mudarFundo(color: string) {
    this.elemento.nativeElement.style.backgroundColor = color;
    this.elemento.nativeElement.style.color = 'white';
    this.elemento.nativeElement.style.fontWeight = 'bold';
    this.elemento.nativeElement.style.fontSize = '1.2rem';
  }

  private fundoPadrao() {
    this.elemento.nativeElement.style.backgroundColor = '';
    this.elemento.nativeElement.style.color = '';
    this.elemento.nativeElement.style.fontWeight = '';
    this.elemento.nativeElement.style.fontSize = '';
  }

}
