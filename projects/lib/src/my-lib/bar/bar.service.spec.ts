import { BarService } from './bar.service';

describe('BarService', () => {
    let service: BarService;

    beforeEach(() => {
        service = new BarService();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
