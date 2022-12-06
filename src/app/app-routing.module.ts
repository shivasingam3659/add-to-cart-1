import { FavouriteComponent } from './favourite/favourite.component';
import { LoginComponent } from './LR/login/login.component';
import { RegisterComponent } from './LR/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';




const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'barchart', component: BarChartComponent},
  {path:'linechart', component: LineChartComponent},
  {path:'paichart', component: BarChartComponent},
  {path:'admin', component: AdminComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'favourite', component: FavouriteComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
