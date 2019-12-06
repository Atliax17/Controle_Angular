import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/';
import { User } from 'src/app/shared/models/user';

@Injectable()
export class LoginService {

    onChange: Subject<any> = new Subject<any>();

    constructor() {}

    loginChange(data: string) {
        this.onChange.next(data);
    }
}