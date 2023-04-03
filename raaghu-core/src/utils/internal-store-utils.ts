class Store {
  private _accessToken: string | null = null;
  private _languages: any = {};
  private _localization: any = {};
  private _auth: any = {};

  public set accessToken(token: string | null) {
    this._accessToken = token;
  }

  public get accessToken() {
    return this._accessToken;
  }

  public set languages(config: any) {
    this._languages = config;
  }

  public get languages() {
    return this._languages;
  }

  public set localization(localization: any) {
    this._localization = localization;
  }

  public get localization() {
    return this._localization;
  }

  public set auth(auth: any) {
    this._auth = auth;
  }

  public get auth() {
    return this._auth;
  }
}

const store = new Store();

export { store };
