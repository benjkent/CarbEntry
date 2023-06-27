import { Component } from '@angular/core';
import {ModalService} from "../../_services/modal.service";

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent {

  bodyText='this text can be updated in modal 1';
  constructor(protected modalService: ModalService) {
  }
}
