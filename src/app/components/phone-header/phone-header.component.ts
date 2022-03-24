import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-phone-header',
  templateUrl: './phone-header.component.html',
  styleUrls: ['./phone-header.component.css']
})
export class PhoneHeaderComponent implements OnInit {

  constructor(private router:Router) { }
  showIcon:boolean=false;

  ngOnInit(): void {
  }

  viewstory():void{
      this.router.navigate(['story']);
  }

  showIcons():void{
    this.showIcon = !this.showIcon;

    if(this.showIcon){
      var ic = document.getElementById('icon');
      var n = ic?.style;
      n!.display = 'block';
      this.autoClose();
    }
    else{
      var ic = document.getElementById('icon');
      var n = ic?.style;
      n!.display = 'none';
    }
  }

  // After 5 sec close the icons
  autoClose():void{
    setTimeout(() => {
      var ic = document.getElementById('icon');
      var n = ic?.style;
      n!.display = 'none';
  }, 5000);
  }

}
