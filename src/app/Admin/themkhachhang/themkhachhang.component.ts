import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KhachhangService } from 'src/app/service/Admin/khachhang.service';

@Component({
  selector: 'app-themkhachhang',
  templateUrl: './themkhachhang.component.html',
  styleUrls: ['./themkhachhang.component.css']
})
export class ThemkhachhangComponent {
  KHForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private KhachSRV: KhachhangService
    ) {
    this.KHForm = this.fb.group({
      MaKH: ['', Validators.required],
      TenKH: ['', Validators.required],
      GioitinhKH: ['', Validators.required],
      SdtKH: ['', Validators.required],
      DiaChiKH: ['', Validators.required],
      EmailKH: ['', Validators.required],
      
    });
  }

  CreateKH(): void {
    if (this.KHForm.valid) {
      this.KhachSRV.Create(this.KHForm.value).subscribe(response => {
        // Xử lý response nếu cần
        console.log('Thêm thành công!', response);
        // Có thể thêm chuyển hướng hoặc hiển thị thông báo thành công ở đây
      });
    }
  }
}
