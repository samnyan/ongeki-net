import {HttpClientModule} from '@angular/common/http';
/* tslint:disable:no-unused-variable */
import {inject, TestBed} from '@angular/core/testing';
import {TokenInterceptorService} from './token-interceptor.service';

describe('Service: TokenInterceptor', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [TokenInterceptorService]
        });
    });

    it('should ...', inject([TokenInterceptorService], (service: TokenInterceptorService) => {
        expect(service).toBeTruthy();
    }));
});
