import { Injectable } from "@nestjs/common";

@Injectable({})

export class AuthService{
    signup() {
        return { msg: 'sign up success'}
    }

    signin() {
        return 'sign in working'
    }
}