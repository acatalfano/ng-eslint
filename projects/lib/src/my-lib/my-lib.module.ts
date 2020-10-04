import { NgModule } from '@angular/core';
import { FooComponent } from './foo/foo.component';

@NgModule({
    declarations: [FooComponent],
    imports: [],
    exports: [FooComponent]
})
export class MyLibModule {}
