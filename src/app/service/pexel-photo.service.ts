import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // Import throwError with a lowercase "t"
import { catchError } from 'rxjs/operators'; // Import catchError for the pipe operator

@Injectable({
  providedIn: 'root'
})
export class PexelPhotoService {
  private apiKey = 'RtiNvLoO9bC9hc8OsNxX3OE54mT8s4fOBrn1KmtDZewZCnDZDjzXjKXv'; // Replace with your Pexels API key

  constructor(private http: HttpClient) { }

  getData(search: string, perPage: number): Observable<any> {
    const url = `https://api.pexels.com/v1/search?page=1&per_page=${perPage}&query=${search}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.get<any>(url, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    return throwError(error.message || "Service Error");
  }

}
