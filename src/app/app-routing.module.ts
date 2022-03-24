import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MyprojectComponent } from './components/projects/myproject/myproject.component';
import { PortfolioComponent } from './components/projects/portfolio/portfolio.component';
import { SentimentAnalysisComponent } from './components/projects/sentiment-analysis/sentiment-analysis.component';
import { StoryComponent } from './components/story/story.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'work',
    component:WorkComponent
  }
  ,{
    path:'contact',
    component:ContactComponent
  },
  {
    path:'work/unprfct',
    component:MyprojectComponent
  },
  {
    path:'story',
    component:StoryComponent
  },
  {
    path:'work/portfolio',
    component:PortfolioComponent
  },
  {
    path:'work/sentiment-analysis',
    component:SentimentAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
