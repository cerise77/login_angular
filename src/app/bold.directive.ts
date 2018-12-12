import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[bold]',
    host: {
        '(click)': 'onClickEnter()'
    }
})
export class BoldDirective{

    constructor(private element: ElementRef, private renderer: Renderer2){

        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }

    onClickEnter(){
        //this.setFontWeight("bold");
        this.setFontWeight("#D32414");
    }

    private setFontWeight(val: string) {
        //this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
        this.renderer.setStyle(this.element.nativeElement, "background", val);
    }
}
