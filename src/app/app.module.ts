import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { SomeH1Component } from "./some-h1/some-h1.component";
import { SomeH2Component } from "./some-h2/some-h2.component";
import { SomeH3Component } from "./some-h3/some-h3.component";
import { SomeH4Component } from "./some-h4/some-h4.component";
import { MyFirstChartComponent } from "./my-first-chart/my-first-chart.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgChartsModule } from "ng2-charts";
import { AsyncPipeExampleComponent } from "./async-pipe-example/async-pipe-example.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { SomeFormContainerComponent } from "./some-form-container/some-form-container.component";
import { SelectInputComponent } from "./select-input/select-input.component";
import { ReusableServicesPageComponent } from "./reusable-services-page/reusable-services-page.component";
import { SearchServiceTokens } from "./services/reusableServiceInjectionToken";
import { ReusableServiceDefaultService } from "./services/reusable-service-default.service";
import { ReusableServiceC } from "./services/reusableServiceC";
import { ReusableServiceD } from "./services/reusableServiceD";
import { ReusableServiceAService } from "./services/reusable-service-a.service";
import { ReusableServiceBService } from "./services/reusable-service-b.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    SomeH1Component,
    SomeH2Component,
    SomeH3Component,
    SomeH4Component,
    MyFirstChartComponent,
    AsyncPipeExampleComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    SomeFormContainerComponent,
    SelectInputComponent,
    ReusableServicesPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    BrowserAnimationsModule,
    NgChartsModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: SearchServiceTokens.get("default"),
    useClass: ReusableServiceDefaultService,
  },
    {
      provide: SearchServiceTokens.get("reusableServiceA"),
      useClass: ReusableServiceAService,
    },
    {
      provide: SearchServiceTokens.get("reusableServiceB"),
      useClass: ReusableServiceBService,
    },
    {
      provide: SearchServiceTokens.get("reusableServiceC"),
      useClass: ReusableServiceC,
    },
    {
      provide: SearchServiceTokens.get("reusableServiceD"),
      useClass: ReusableServiceD,
    }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
