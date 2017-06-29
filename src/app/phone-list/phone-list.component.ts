import { Component, OnInit } from '@angular/core';
import {PhoneService} from  '../phone.service';
@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
  providers:[PhoneService]
})
export class PhoneListComponent implements OnInit {

  constructor(private phone:PhoneService) { }
phones;
  ngOnInit() {
this.phones = this.phone.getList();
console.log(this.phones)
  }

}
