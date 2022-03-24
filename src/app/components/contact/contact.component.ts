import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  name:any="";
  email:any="";
  message:string="";

  successAlert:any;
  errorAlert=false;

  ngOnInit(): void {
    this.successAlert=localStorage.getItem('form');
  }

  onSubmit():void{
    if (this.name=="" || this.email=="" || this.message==""){
      this.errorAlert=true;
          this.autoClose();
    }

    setTimeout(() => {
      if (this.name!="" && this.email!="" && this.message!=""){
      localStorage.setItem('form','true');
      this.autoClose();
      }
  }, 1000);
  
  }

  autoClose():void{
    setTimeout(() => {
      // this.successAlert = false;
      this.errorAlert = false;
      this.ngOnInit();
  }, 4000);
  }

}
