import {  AfterViewInit, Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { NhanvienService } from 'src/app/service/Admin/nhanvien.service';

@Component({
  selector: 'app-themnv',
  templateUrl: './themnv.component.html',
  styleUrls: ['./themnv.component.css']
})
export class ThemnvComponent {
  NVienForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private NVienSRV: NhanvienService
    ) {
    this.NVienForm = this.fb.group({
      MaNV: ['', Validators.required],
      TenNV: ['', Validators.required],
      GioitinhNV: ['', Validators.required],
      NgaysinhNV: ['', Validators.required],
      SdtNV: ['', Validators.required],
      Quequan: ['', Validators.required],
      Noicutru: ['', Validators.required],
      EmailNV: ['', Validators.required],
      // Thêm các trường khác cần thiết cho sản phẩm
    });
  }

  CreateNV(): void {
    if (this.NVienForm.valid) {
      this.NVienSRV.Create(this.NVienForm.value).subscribe(response => {
        // Xử lý response nếu cần
        console.log('Thêm thành công!', response);
        // Có thể thêm chuyển hướng hoặc hiển thị thông báo thành công ở đây
      });
    }
  }
}
