import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-phone-nav',
  templateUrl: './phone-nav.component.html',
  styleUrls: ['./phone-nav.component.css']
})
export class PhoneNavComponent implements OnInit {

  constructor() { }

  n:any;

  ngOnInit(): void {
    this.home('home');
  }

  home(nav:string):void{
    var n = document.getElementById(nav);
    var ele = n?.style;
    ele!.color = 'tomato';
    // console.log(ele?.color);
    this.disable(nav);

  }

  disable(nav:string):void{
    var n = document.getElementsByClassName('b');
    for (let index = 0; index < n.length; index++) {
      var element = n[index];
      if (element.id == nav){
        continue;
      }
      else{
        var elem =  document.getElementById(element.id);
        var ele = elem?.style;
        if (ele)
        ele!.color = 'white';
        
      }
      
    }
  }

}
