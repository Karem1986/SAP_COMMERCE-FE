import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCartComponent } from './my-cart/my-cart.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { MyNaamComponent } from './my-naam/my-naam.component';

@NgModule({
  declarations: [MyNaamComponent, MyCartComponent],

  imports: [
    CommonModule,

    ConfigModule.withConfig({
      cmsComponents: {
        // Header components

        MiniCartComponent: {
          component: MyNaamComponent, //ONLY RENDER ONE COMPONENT AT ONCE
        },
      },
    } as CmsConfig),
  ],
})
export class MyHeaderModule {}
