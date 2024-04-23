import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NhacungcapService } from 'src/app/service/Admin/nhacungcap.service';

@Component({
  selector: 'app-nhacungcap',
  templateUrl: './nhacungcap.component.html',
  styleUrls: ['./nhacungcap.component.css']
})
export class NhacungcapComponent implements OnInit, AfterViewInit{
  constructor(private ncc: NhacungcapService){}
  nhacc:any[]=[];
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  getDs(){
    this.ncc.getList().subscribe(res =>{
      this.nhacc=res;
    })
  }
  ngOnInit(){
      this.getDs();
  }
  onDelete(id: number){
    this.ncc.Delete(id).subscribe(res =>{
      this.getDs();
    })
  }
}
