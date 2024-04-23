import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaikhoannvService} from 'src/app/service/Admin/taikhoannv.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent {
  DangkyF: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private DangkySrv: TaikhoannvService
    ) {
    this.DangkyF = this.fb.group({
      MaNV: ['', Validators.required],
      TenTKNV: ['', Validators.required],
      Matkhau: ['', Validators.required],
      // Thêm các trường khác cần thiết cho sản phẩm
    });
  } 
  createTKNV(): void {
    if (this.DangkyF.valid) {
      this.DangkySrv.Create(this.DangkyF.value).subscribe(response => {
        // Xử lý response nếu cần
        console.log('Thêm thành công!', response);
        // Có thể thêm chuyển hướng hoặc hiển thị thông báo thành công ở đây
      });
    }
  } 
}
