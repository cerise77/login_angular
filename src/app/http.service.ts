import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    //http://localhost:60489/Home/PostUser  ASP.NET MVC 5
    //http://localhost:8080/angular/setUser.php     PHP
    // http://localhost:60820/api/values        ASP NET Wep API 2
    postData(user: User){

        /*const body = {email: user.email, password: user.password};
        return this.http.post('http://localhost:8080/api/values', body);*/

          return this.http.post('http://localhost:8080/src/app',user); 
    }
}
