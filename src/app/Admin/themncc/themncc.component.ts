import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KhachhangService } from 'src/app/service/Admin/khachhang.service';
import { NhacungcapService } from 'src/app/service/Admin/nhacungcap.service';

@Component({
  selector: 'app-themncc',
  templateUrl: './themncc.component.html',
  styleUrls: ['./themncc.component.css']
})
export class ThemnccComponent {
  NCCForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private NccSRV: NhacungcapService
    ) {
    this.NCCForm = this.fb.group({
      MaNCC: ['', Validators.required],
      TenNCC: ['', Validators.required],
      SdtNCC: ['', Validators.required],
      DiachiNCC: ['', Validators.required],
      EmaiNCC: ['', Validators.required],
    });
  }

  CreateNCC(): void {
    if (this.NCCForm.valid) {
      this.NccSRV.Create(this.NCCForm.value).subscribe(response => {
        // Xử lý response nếu cần
        console.log('Thêm thành công!', response);
        // Có thể thêm chuyển hướng hoặc hiển thị thông báo thành công ở đây
      });
    }
  }
}
