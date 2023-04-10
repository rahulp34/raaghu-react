declare class Store {
    private _accessToken;
    private _languages;
    private _localization;
    private _auth;
    set accessToken(token: string | null);
    get accessToken(): string | null;
    set languages(config: any);
    get languages(): any;
    set localization(localization: any);
    get localization(): any;
    set auth(auth: any);
    get auth(): any;
}
declare const store: Store;
export { store };
