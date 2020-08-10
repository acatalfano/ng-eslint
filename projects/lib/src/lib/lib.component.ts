import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-lib',
    template: `
        <p>
            lib works!
        </p>
    `,
    styles: []
})
export class LibComponent implements OnInit {
    constructor() {}

    public ngOnInit(): void {}
}
