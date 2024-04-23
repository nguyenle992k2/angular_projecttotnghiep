import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NhanvienService } from 'src/app/service/Admin/nhanvien.service';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent implements OnInit, AfterViewInit {
  constructor(private nv: NhanvienService){}
  nhanvien:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  getDs(){
    this.nv.getList().subscribe(res =>{
      this.nhanvien=res;
    })
  }
  ngOnInit(){
      this.getDs();
  }
  onDelete(id: number){
    this.nv.Delete(id).subscribe(res =>{
      this.getDs();
    })
  }
}
