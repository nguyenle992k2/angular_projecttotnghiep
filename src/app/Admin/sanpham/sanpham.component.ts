import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SanphamService } from 'src/app/service/Admin/sanpham.service';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit, AfterViewInit{
  constructor(private sp: SanphamService, private fb: FormBuilder){}
  sanpham:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  getDSSP(){
    this.sp.getList().subscribe(res =>{
      this.sanpham=res;
    })
  }
  ngOnInit(){
    this.getDSSP();
  }
  onDelete(id: number){
    this.sp.Delete(id).subscribe(res =>{
      this.getDSSP();
    })
  }
}