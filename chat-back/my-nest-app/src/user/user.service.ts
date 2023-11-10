import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {User} from "../interfaces/user";
import {InjectModel} from "@nestjs/mongoose";
import {LoginData} from "../interfaces/loginData";

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
    async signup(data:LoginData) {
        const isAlredyExist = await this.userModel
            .find({
                email: data.email,
                name: data.name,
            })
            .exec();
        if (isAlredyExist.length > 0) {
            return {
                success: false,
                errorCode: 'user_already_exist',
            };
        } else {
            const newUser = new this.userModel({
                name: data.name,
                email: data.email,
            });
            const result = await newUser.save();
            if (result) {
                return {
                    success: true,
                    user: {
                        id: newUser.id,
                        name: newUser.name,
                        email: newUser.email,
                    },
                };
            } else {
                return {
                    success: false,
                    errorCode: 'fail_to_signup',
                };
            }
        }
    }
    async login(l:LoginData){
        const user = await this.userModel
            .find({ email: l.email, name: l.name })
            .select('id name email')
            .exec();
        if (user.length > 0) {
            return {
                success: true,
                user: {
                    id:user[0].id,
                    name:user[0].name,
                    email:user[0].email,
                },
            };
        } else {
            return {
                success: false,
                errorCode: 'email/password_is_incorrect',
            };
        }
    }
}
