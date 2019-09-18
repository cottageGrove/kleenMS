import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { ApiService } from './ApiService'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private api: ApiService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let apiKey = 'insert-api-key-here'

        const authReq = req.clone({
            headers: req.headers.set('x-api-key', apiKey)
        })

        return next.handle(authReq)
    }
}