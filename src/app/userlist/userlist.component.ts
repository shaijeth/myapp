import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

interface user {
  userId: string;
  userName: string;
  mobile: string;
  userEmail: string;
  password: string;
  type: string;
}
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {
 message:string="No value";
  
 users : user[]=[];

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.message="Default messgae : aapk aswagart hai . new mesage ke liey click kare";
      
    this.http.get<user[]>("http://learn.excelonlineservices.com/api/Users").subscribe(
      (response)=>{
        console.log(response);
        this.users = response;
      }
    );
    

  }
  onclick(): void {
   this.exportToExcel();
    this.message="Data exports";
  }
  exportToExcel(): void {
    const data = this.users; // Replace with your data retrieval logic
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'exported_data.xlsx');
  }

}
