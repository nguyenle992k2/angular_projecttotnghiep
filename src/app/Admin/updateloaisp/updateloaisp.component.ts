import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoaispService } from 'src/app/service/Admin/loaisp.service';

@Component({
  selector: 'app-updateloaisp',
  templateUrl: './updateloaisp.component.html',
  styleUrls: ['./updateloaisp.component.css']
})
export class UpdateloaispComponent implements OnInit {
  loaisp: any;
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private LoaispSrv: LoaispService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.LoaispSrv.getbyid(this.id).subscribe(() =>{
      this.loaisp.res;
    })
  }
  //getLoai(): void{
   // this.LoaispSrv.getbyid(this.id).subscribe(data => {
   //   this.loaisp = data;
    //});
  //}
  Update(): void {
    this.LoaispSrv.Update(this.id, this.loaisp).subscribe(() => {
      alert("Cập nhật thành công!");
    });
  }
}
