
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { SalesComponent } from './charts/sales/sales.component';



const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'barchart', component: BarChartComponent},
  {path:'linechart', component: LineChartComponent},
  {path:'sales', component: SalesComponent},
  {path:'paichart', component: BarChartComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
