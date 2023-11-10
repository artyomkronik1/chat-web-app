import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {LoginData} from "../interfaces/loginData";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/login')
    async logIn(@Body() data: LoginData) {
        return this.userService.login(data);
    }
    @Post('/signup')
    async SignUp(@Body() data: LoginData) {
        return this.userService.signup(data);
    }
}
