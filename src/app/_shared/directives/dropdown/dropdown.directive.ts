import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {
	private isToggle = false;
	private element: any
	private dropdownMenuElement: any
	constructor(private elementRef: ElementRef, private render: Renderer2) {
		this.element = this.elementRef.nativeElement;
	}

	@HostListener('click') toggleOpen() {
		this.isToggle = !this.isToggle;
		this.element.parentNode.childNodes.forEach((childNode) => {
			if (childNode.getAttribute('dropdownmenu') !== null) {
				this.dropdownMenuElement = childNode;
				if (this.isToggle) {
					this.render.addClass(childNode, 'show',);
				} else {
					this.render.removeClass(childNode, 'show');
				}
			}
		})
	}

	@HostListener('document:click', ['$event.target']) onClick(target) {
		if(target !== this.element && this.dropdownMenuElement) {
			this.isToggle = false;
			this.render.removeClass(this.dropdownMenuElement, 'show');
		}
	}
}
