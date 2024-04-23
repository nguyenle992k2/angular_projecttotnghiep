import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaispService } from 'src/app/service/Admin/loaisp.service';
@Component({
  selector: 'app-addlsp',
  templateUrl: './addlsp.component.html',
  styleUrls: ['./addlsp.component.css']
})
export class AddlspComponent {
  LSPForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private LoaiSPSRV: LoaispService
    ) {
    this.LSPForm = this.fb.group({
      TenLoai: ['', Validators.required],
      GhiChu: [''],
      // Thêm các trường khác cần thiết cho sản phẩm
    });
  } 
  createLSP(): void {
    if (this.LSPForm.valid) {
      this.LoaiSPSRV.Create(this.LSPForm.value).subscribe(response => {
        // Xử lý response nếu cần
        console.log('Thêm thành công!', response);
        // Có thể thêm chuyển hướng hoặc hiển thị thông báo thành công ở đây
      });
    }
  } 
}
