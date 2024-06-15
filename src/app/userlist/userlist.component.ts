import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  message: string = "";

  users: user[] = [];

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    let DevApiUrl: string = "http://localhost/";
    let ProdApiUrl: string = "http://learn.excelonlineservices.com/";

    let headers = new HttpHeaders();
    headers = headers.append("Authorization", `Bearer ${localStorage['token']}`);
    this.http.get<user[]>(ProdApiUrl + "api/Users", { headers: headers }).subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      },
      (errors) => {
        console.log(errors.message);
        this.message = "Unauthorized access, Please login with valid credentials.";
      }
    );


  }
  onclick(): void {
    this.exportToExcel();
    this.message = "Data exports";
  }
  exportToExcel(): void {
    const data = this.users; // Replace with your data retrieval logic
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'exported_data.xlsx');
  }

}
