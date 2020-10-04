import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance as AppComponent;
        expect(app).toBeTruthy();
    });

    it("should have as title 'test-app'", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app: AppComponent = fixture.debugElement.componentInstance as AppComponent;
        expect(app.title).toEqual('test-app');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span').textContent).toContain('test-app app is running!');
    });

    // testing: i'm a long line! testing: i'm a long line! testing: i'm a long line! testing: i'm a long line! testing: i'm a long line! testing-- 150
    // TODO: maybe see this: https://khalilstemmler.com/blogs/tooling/prettier/
    // x and this: https://github.com/stemmlerjs/simple-typescript-starter
    // x
    // x
    // OH and this!!! https://github.com/prettier/prettier-eslint-cli
});
