import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
phone:any;
  constructor( private route: ActivatedRoute,
    private phoneService: PhoneService,
private router:Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      console.log(params['id'])
      this.getPhoneDetails(params['id'])
    })
  }
  getPhoneDetails(id){
    return this.phoneService.get(id).subscribe((phone)=>{
      this.phone = phone
      console.log(this.phone);
    })
  }
  deletePhone(){
    if(window.confirm('are you sure')){
      this.phoneService.remove(this.phone._id).subscribe(()=>{this.router.navigate([''])})
    }
  }

}
