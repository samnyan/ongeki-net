/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {ErrorInterceptorService} from './error-interceptor.service';
import {HttpClientModule} from '@angular/common/http';

describe('Service: ErrorInterceptor', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [ErrorInterceptorService]
        });
    });

    it('should ...', inject([ErrorInterceptorService], (service: ErrorInterceptorService) => {
        expect(service).toBeTruthy();
    }));
});
