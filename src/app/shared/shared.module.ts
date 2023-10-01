import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [NotfoundComponent, NavbarComponent, CartComponent],
  imports: [CommonModule, RouterModule],
  exports: [NotfoundComponent, NavbarComponent],
})
export class SharedModule {}
