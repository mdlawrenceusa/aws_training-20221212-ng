import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomemadeGoodsComponent } from './homemade-goods/homemade-goods.component';
import { TechComponent } from './tech/tech.component';


const routes: Routes = [
  
        { path: '', component: HomemadeGoodsComponent },
        { path: 'tech', component: TechComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
