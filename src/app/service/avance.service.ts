import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AvanceService {

  private baseUrl = "http://localhost:8090/avance/";
  constructor(private http: HttpClient) { }

  saveUrl(form: any) {
    return this.http.post(this.baseUrl + "url/save", form);
  }

  shortUrl(shortUrl: any) {
    return this.http.get(this.baseUrl + "url/getUrl/"+shortUrl);
  }

  listurl() {
    return this.http.get(this.baseUrl + "url/list");
  }

  duplicateUrl(form: any) {
    return this.http.post(this.baseUrl + "url/duplicateCheck", form);
  }
}
