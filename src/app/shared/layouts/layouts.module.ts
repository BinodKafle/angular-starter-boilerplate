import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full/full.component';
import { BlankComponent } from './blank/blank.component';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    FullComponent,
    BlankComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],
  exports: [
    FullComponent,
    BlankComponent,
    SidebarComponent,
    ContentComponent
  ]
})
export class LayoutsModule { }
