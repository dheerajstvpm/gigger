import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { User } from "../../models/user";
import { DataService } from "../../services/data.service";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { title: string, videoFlag: boolean, item: { name: string, albumArt?: string, thumbnail?: string } },
        private http: HttpClient,
        private dataService: DataService
    ) { }

    profile: User = {}
    deleteUrl!: string

    deleteItem() {
        console.log(this.data.item);
        console.log(this.data.item.thumbnail);
        if (this.data.videoFlag) {
            this.deleteUrl = "http://localhost:3000/api/videoDelete"
        } else {
            this.deleteUrl = "http://localhost:3000/api/trackDelete"
        }

        const deleteItem$ = this.http.post(this.deleteUrl, this.data.item);
        deleteItem$.subscribe({
            next: (res) => {
                console.log(res);
                this.profile = res
            },
            error: (err) => {
                console.log(err);
            }
        })
        this.dialogRef.close(this.profile)
    }
}
