import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ResizeDirective } from './resize.directive';
import { PaynowComponent } from './component/paynow/paynow.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './LR/register/register.component';
import { LoginComponent } from './LR/login/login.component';
import { AuthInterceptor } from './auth.interceptor';
import { HomeComponent } from './LR/home/home.component';
import { NavComponent } from './LR/nav/nav.component';
import { FavouriteComponent } from './favourite/favourite.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ScrollTopComponent,
    ResizeDirective,
    PaynowComponent,
    FilterPipe,
    BarChartComponent,
    LineChartComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    FavouriteComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
