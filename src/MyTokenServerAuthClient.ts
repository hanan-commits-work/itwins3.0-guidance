import { AccessToken } from '@itwin/core-bentley';
import {  AuthStatus, BeEvent, BentleyError } from '@itwin/core-bentley';
import { BrowserAuthorizationClient } from "@itwin/browser-authorization";
import { AuthorizationClient } from '@itwin/core-common';


export class MyTokenServerAuthClient implements AuthorizationClient{
  readonly onAccessTokenChanged: BeEvent<(token: AccessToken) => void>;
  protected _accessToken?: string;

  private static _oidcClient: AuthorizationClient;

  protected _tokenUrl: string;

  public static get oidcClient(): AuthorizationClient {
    return this._oidcClient;
  }
  
  public static async initializeOidc(tokenUrl: string): Promise<void> {
    if (this._oidcClient) {
      return;
    }
    this._oidcClient = new MyTokenServerAuthClient();
  }

  constructor() {
    this.onAccessTokenChanged = new BeEvent();
    this._tokenUrl = `${process.env.IMJS_TOKEN_URL_DEV}/getToken`;
    console.log("generating token");
    this.generateToken();
  }  

  public async signIn(): Promise<void> {
    await this.generateToken();
  }

  public async signOut(): Promise<void> {
    this._accessToken = undefined;
  }

  public get isAuthorized(): boolean {
    return !!this._accessToken;
  }

  public get hasExpired(): boolean {
    return !this._accessToken;
  }

  public get hasSignedIn(): boolean {
    return !!this._accessToken;
  }

  public async generateToken() {
    const res = await fetch(this._tokenUrl);
    if (!res.ok)
      throw Error(`Error signing in: ${res.statusText}`);
    const token = await res.json();
    this._accessToken = `Bearer ${token.tokenString}`;
  }
  
  public async getAccessToken(): Promise<string> {    
    if (!this._accessToken) {
      throw new BentleyError(AuthStatus.Error, "Cannot get access token");
    }
    return this._accessToken;
  }
  
}