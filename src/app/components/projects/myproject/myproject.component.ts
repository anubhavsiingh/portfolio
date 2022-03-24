import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  back():void{
    this.router.navigate(['work']);
  }

}
