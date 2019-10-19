import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCanvasComponent } from './test-canvas/test-canvas.component';
import { MaterialModule } from '../material-module';
import { TestHeaderComponent } from './test-header/test-header.component';



@NgModule({
  declarations: [TestCanvasComponent, TestHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TestCanvasComponent, TestHeaderComponent]
})
export class ComponentsModule { }
