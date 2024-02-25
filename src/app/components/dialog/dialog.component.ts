import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';
import { Environment } from 'src/app/environment';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  public environment = Environment;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      videoFlag: boolean;
      item: { name: string; albumArt?: string; thumbnail?: string };
    },
    private http: HttpClient,
    private dataService: DataService,
  ) {}

  profile: User = {};
  deleteUrl!: string;

  deleteItem() {
    console.log(this.data.item);
    console.log(this.data.item.thumbnail);
    if (this.data.videoFlag) {
      this.deleteUrl = `${this.environment.staticURL}/api/videoDelete`;
    } else {
      this.deleteUrl = `${this.environment.staticURL}/api/trackDelete`;
    }

    const deleteItem$ = this.http.post(this.deleteUrl, this.data.item);
    deleteItem$.subscribe({
      next: (res) => {
        console.log(res);
        this.profile = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.dialogRef.close(this.profile);
  }
}
