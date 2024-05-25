import { Injectable } from "@nestjs/common"

@Injectable()
export class UserService {
    addUser(): string {
        return "This will add user"

    }
    deleteUser(): string {
        return "This is for deleting user"

    }
    updateUser(): string {
        return "This will update user"

    }
    findAllUsers(): string {
        return "This will find all users"

    }
}