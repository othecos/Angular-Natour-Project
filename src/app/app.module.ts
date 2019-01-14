import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { CardsComponent } from './components/cards/cards.component';
import { FeaturesCardsComponent } from './components/features-cards/features-cards.component';
import { SectionAboutComponent } from './section/section-about/section-about.component';
import { SectionFeaturesComponent } from './section/section-features/section-features.component';
import { SectionToursComponent } from './section/section-tours/section-tours.component';
import { SectionStoriesComponent } from './section/section-stories/section-stories.component';
import { SectionBookComponent } from './section/section-book/section-book.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    MainComponent,
    PopUpComponent,
    CardsComponent,
    FeaturesCardsComponent,
    SectionAboutComponent,
    SectionFeaturesComponent,
    SectionToursComponent,
    SectionStoriesComponent,
    SectionBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
