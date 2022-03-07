import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComputersComponent } from './components/products/computers/computers.component';
import { PrintersComponent } from './components/products/printers/printers.component';
import { SmartphonsComponent } from './components/products/smartphons/smartphons.component';

const routes: Routes = [
  {path : 'Computers' , component : ComputersComponent},
  {path : 'Smartphons' , component : SmartphonsComponent},
  {path : 'Printers' , component : PrintersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ComputersComponent , SmartphonsComponent , PrintersComponent]
