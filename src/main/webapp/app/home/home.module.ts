import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SamjhiSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SamjhiSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class SamjhiHomeModule {}
