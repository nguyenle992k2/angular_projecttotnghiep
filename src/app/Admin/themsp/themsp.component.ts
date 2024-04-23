import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SanphamService } from 'src/app/service/Admin/sanpham.service';

@Component({
  selector: 'app-themsp',
  templateUrl: './themsp.component.html',
  styleUrls: ['./themsp.component.css']
})
export class ThemspComponent {
  SanPhamForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private SanPhamSRV: SanphamService
    ) {
    this.SanPhamForm = this.fb.group({
      MaLoai: ['', Validators.required],
      MaNCC: ['', Validators.required],
      TenSP: ['', Validators.required],
      Anh: ['', Validators.required],
      Mota: ['', Validators.required],
      Dongia: ['', Validators.required],
      NgayTao: [''],
      // Thêm các trường khác cần thiết cho sản phẩm
    });
  }

  CreateSP(): void {
    if (this.SanPhamForm.valid) {
      this.SanPhamSRV.Create(this.SanPhamForm.value).subscribe(response => {
        // Xử lý response nếu cần
        console.log('Thêm thành công!', response);
        // Có thể thêm chuyển hướng hoặc hiển thị thông báo thành công ở đây
      });
    }
  }
} 
