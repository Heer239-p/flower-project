import { Routes } from '@angular/router';
import{FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { ReviewComponent } from './components/review/review.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },       // Default route
    { path: 'about', component: AboutComponent },
    {path: 'product', component: ProductComponent},
    {path:'review', component: ReviewComponent},
    {path:'contact', component:ContactComponent}
]
