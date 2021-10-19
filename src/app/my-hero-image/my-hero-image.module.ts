import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyImageComponent } from './my-image/my-image.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [MyImageComponent],

  imports: [
    CommonModule,

    ConfigModule.withConfig({
      cmsComponents: {
        // Header components

        MiniCartComponent: {
          component: MyImageComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class MyHeroImageModule {}
