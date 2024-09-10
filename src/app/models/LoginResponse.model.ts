export interface LoginResponse {
    AuthenticateResult: boolean;
    authToken: string;
    AccessTokenExpireDate: Date;
    Admin: String;
}