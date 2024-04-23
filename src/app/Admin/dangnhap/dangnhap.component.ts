import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
//import { DangNhapService } from 'src/app/service/Admin/dangnhap.service';
//import { LoaispService } from 'src/app/service/Admin/loaisp.service';
import { TaikhoannvService } from 'src/app/service/Admin/taikhoannv.service';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent {
  loginF: FormGroup = new FormGroup({
    tendangnhap: new FormControl('',Validators.required),
    matkhau: new FormControl('', Validators.required)
  })

  constructor(private loginSrv: TaikhoannvService){

  }

  onLogin(): void{
    if(this.loginF.invalid){return;}
    this.loginSrv.login(this.loginF.value).subscribe(function(res: any){
      if(res.code == 402){
        alert("Thông tin đăng nhập chưa đúng! Hãy nhập lại!");
      }
      else{
        location.assign("http://localhost:4200/admin")
      }
    });
    //console.log(this.loginF.value);
  }
}
