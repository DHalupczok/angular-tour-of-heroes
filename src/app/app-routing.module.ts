import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MyFirstChartComponent } from "./my-first-chart/my-first-chart.component";
import { AsyncPipeExampleComponent } from "./async-pipe-example/async-pipe-example.component";
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "chart", component: MyFirstChartComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "async-pipe", component: AsyncPipeExampleComponent },
  { path: "name-editor", component: NameEditorComponent },
  { path: "profile-editor", component: ProfileEditorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
