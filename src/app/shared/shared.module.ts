import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotfoundComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NotfoundComponent, NavbarComponent],
})
export class SharedModule {}
