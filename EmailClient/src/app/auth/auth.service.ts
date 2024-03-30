import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OperationResult } from '../shared/models/operation-result';
import { BehaviorSubject, map, tap } from 'rxjs';

interface SignupRequest {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResult {
  userName: string;
}

interface SigninRequest {
  username: string;
  password: string;
}

interface SigninResult {
  userName: string;
}

interface SignedinResult {
  authenticated: boolean;
  userName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'https://localhost:7209';

  signedin$ = new BehaviorSubject<boolean | null>(null);
  username: string = '';

  constructor(private httpClient: HttpClient) {}

  usernameAvailable(username: string) {
    return this.httpClient.post<OperationResult<boolean>>(
      `${this.baseUrl}/auth/username`,
      {
        username: username,
      }
    );
  }

  signup(credentials: SignupRequest) {
    return this.httpClient
      .post<OperationResult<SignupResult>>(
        `${this.baseUrl}/auth/signup`,
        credentials
      )
      .pipe(
        tap(({ data }) => {
          this.signedin$.next(true);
          this.username = data.userName;
        })
      );
  }

  signin(credentials: SigninRequest) {
    return this.httpClient
      .post<OperationResult<SigninResult>>(
        `${this.baseUrl}/auth/signin`,
        credentials
      )
      .pipe(
        tap(({ data }) => {
          this.signedin$.next(true);
          this.username = data.userName;
        })
      );
  }

  signout() {
    return this.httpClient
      .post<OperationResult<null>>(`${this.baseUrl}/auth/signout`, {})
      .pipe(
        tap(() => {
          this.signedin$.next(false);
        })
      );
  }

  checkAuth() {
    return this.httpClient
      .get<OperationResult<SignedinResult>>(`${this.baseUrl}/auth/signedin`)
      .pipe(
        map((value) => value.data),
        tap((value) => {
          this.signedin$.next(value.authenticated);
          this.username = value.userName;
        })
      );
  }
}
