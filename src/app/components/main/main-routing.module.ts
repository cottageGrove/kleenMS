import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { LogTableComponent } from '../log-table/log-table.component';
import { HomeComponent } from '../home/home.component';


const mainRoutes: Routes = [
  { path: 'main',
    component: MainComponent,

    children: [
      {
        path: 'orders',
        component: LogTableComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
