import { Component } from '@angular/core';

// TODO: make this into a yarn template/scaffold and the equivalent for npm if it exists and angular scaffold/builder if it exists? or addon to ng cli?
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'tst-app';

    public fn(arg: number): number {
        let x = arg;

        const alongnamealongnamealongnamealongnamealongnamealongname = 'str';
        const blongnameblongnameblongnameblongnameblongnameblongname = 'str2';
        const c = 'other';

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const sum =
            alongnamealongnamealongnamealongnamealongnamealongname +
            blongnameblongnameblongnameblongnameblongnameblongname +
            c;
        x += 1;
        return x;
    }
}
