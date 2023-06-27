import {Component, OnDestroy, OnInit, Input, ElementRef, ViewEncapsulation} from '@angular/core';
import {ModalService} from "../../_services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input()id?:string;
  isOpen = false;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }
  ngOnInit() {
    // add self (this modal instance) to the modal service. So it can be opened by from any component
    this.modalService.add(this);

    // move element to bottom of page (just before </body>) so it can be displayed above everything
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click',(el: any) => {
      if(el.target.className === 'modal'){
        this.close();
      }
    });
  }
  ngOnDestroy() {
    // remove self from modal service
    this.modalService.remove(this);

    // remove modal element from html
    this.element.remove();
  }
  open(){
    this.element.style.display ='block';
    document.body.classList.add('modal-open');
    this.isOpen = true;
  }
  close(){
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
    this.isOpen = false;
  }

}
