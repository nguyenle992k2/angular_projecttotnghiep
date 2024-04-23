import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoaispService } from 'src/app/service/Admin/loaisp.service';

@Component({
  selector: 'app-loaisp',
  templateUrl: './loaisp.component.html',
  styleUrls: ['./loaisp.component.css']
})
export class LoaispComponent implements OnInit, AfterViewInit{
  showError: any;
  constructor(
    private lsp: LoaispService,
    private fb: FormBuilder
    ){}
  loaisp:any[]=[];
  displayForm: boolean = false;

  onUpdate : boolean = false;

  LSPForm : any ={
    MaLoai: '',
    TenLoai : '',
    GhiChu: ''
  }
  ngAfterViewInit(): void {
    const the = document.createElement('script');
    the.src='/assets/client/js/main.js';
    document.body.appendChild(the);
  }
  getDs(){
    this.lsp.getList().subscribe(res =>{
      this.loaisp=res;
    })
  }
  ngOnInit(){ 
      this.getDs();
  }

  onDelete(id: number){
    this.lsp.Delete(id).subscribe(res =>{
      this.getDs();
    })
  }
  


}