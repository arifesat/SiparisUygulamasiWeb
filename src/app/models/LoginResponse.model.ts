export interface LoginResponse {
    AuthenticateResult: boolean;
    AuthToken: string;
    AccessTokenExpireDate: Date;
    Admin: String;
}