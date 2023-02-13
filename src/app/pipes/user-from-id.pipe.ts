import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from "../services/data.service";
import { User } from "../models/user";

@Pipe({
    name: 'userFromId'
})
export class UserFromIdPipe implements PipeTransform {

    constructor(
        private dataService: DataService
    ) { }

    transform(_id: string) {
        this.dataService.getUsers()
            .subscribe({
                next: (res) => {
                    for (let one of res) {
                        if (one._id === _id) {
                            console.log(one.name)
                            return one.name
                        }
                    }
                    return "NA"
                }
            })
    }
}
