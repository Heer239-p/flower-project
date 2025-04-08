import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbaarComponent } from "./components/navbaar/navbaar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbaarComponent, FooterComponent, RouterModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flowershop';
}
