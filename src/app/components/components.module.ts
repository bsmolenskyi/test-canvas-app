import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCanvasComponent } from './test-canvas/test-canvas.component';



@NgModule({
  declarations: [TestCanvasComponent],
  imports: [
    CommonModule
  ],
  exports: [TestCanvasComponent]
})
export class ComponentsModule { }
