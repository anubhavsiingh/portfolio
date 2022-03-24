import { Component, HostListener, OnInit } from '@angular/core';
// import  from 'jquery';

import {Location} from '@angular/common';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(private location:Location) { }

  closed:string = 'no';

  ngOnInit(): void {
   this.waitforclick();
  }

  //Get back to previous page
  backClicked() {
    this.location.back();
  }

  //Waiting for user to click otherwise automatically close the story
  waitforclick(){
    setTimeout(() => {
      if(this.closed== 'no'){
      this.hideStory();
    }
  }, 5000);
  }
  
  //Closes Story
  hideStory():void{
    this.backClicked();
  }

  //User calls to close
  close():void{
    this.closed = 'yes';
    this.hideStory();
  }



}
