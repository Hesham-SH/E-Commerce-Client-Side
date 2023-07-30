import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss'],
})
export class TestErrorComponent {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl;
  validationErrors: string[] = [];

  getNotFoundError() {
    this.http.get(this.baseUrl + 'products/42').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  getInternalServerError() {
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  getBadRequestError() {
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  getValidationError() {
    this.http.get(this.baseUrl + 'buggy/badrequest/fortytwo').subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.log(error);
        this.validationErrors = error.errors;
      },
    });
  }
}
