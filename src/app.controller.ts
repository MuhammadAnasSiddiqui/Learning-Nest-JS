import { Controller, Delete, Get, HttpCode, Param, Post, Put, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { Request } from "express";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    //adduser
    @Post('/addUser')
    addBook(): string {
        return this.userService.addUser()
    }

    // delete user
    @Delete("/deleteUser")
    deleteBook(): string {
        return this.userService.deleteUser()
    }

    // update user
    @Put("/updateUser")
    updateBook(): string {
        return this.userService.updateUser()
    }

    // find all users
    @Get("/findAllUsers")
    findAllBooks(@Req() request: Request): string {
        console.log(request.body);
        return this.userService.findAllUsers()
    }

    // // find user with params id
    // @Get('/findUserBtId/:userId')
    // findOne(@Param() params: any): string {
    //     console.log(params.userId);
    //     return `This action returns a #${params.userId} user`;
    // }
}