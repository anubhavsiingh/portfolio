import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { PhoneNavComponent } from './components/phone-nav/phone-nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { MyprojectComponent } from './components/projects/myproject/myproject.component';
import { PhoneHeaderComponent } from './components/phone-header/phone-header.component';
import { StoryComponent } from './components/story/story.component';
import { PortfolioComponent } from './components/projects/portfolio/portfolio.component';
import { SentimentAnalysisComponent } from './components/projects/sentiment-analysis/sentiment-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    PhoneNavComponent,
    ContactComponent,
    MyprojectComponent,
    PhoneHeaderComponent,
    StoryComponent,
    PortfolioComponent,
    SentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
