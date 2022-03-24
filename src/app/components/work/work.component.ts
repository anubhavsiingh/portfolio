import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  mywork():void{
    this.router.navigate(['work/unprfct']);
  }
  mywork2():void{
    this.router.navigate(['work/sentiment-analysis']);
  }
  mywork3():void{
    this.router.navigate(['work/portfolio']);
  }

}
