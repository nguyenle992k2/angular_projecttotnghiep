import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Admin/layout/layout.component';
import { LoaispComponent } from './Admin/loaisp/loaisp.component';
import { SanphamComponent } from './Admin/sanpham/sanpham.component';
import { TaikhoannvComponent } from './Admin/taikhoannv/taikhoannv.component';
import { TaikhoankhComponent } from './Admin/taikhoankh/taikhoankh.component';
import { NhanvienComponent } from './Admin/nhanvien/nhanvien.component';
import { KhachhangComponent } from './Admin/khachhang/khachhang.component';
import { KhohangComponent } from './Admin/khohang/khohang.component';
import { LayoutClientComponent } from './Client/layout-client/layout-client.component';
import { TrangchuComponent } from './Client/trangchu/trangchu.component';
import { SanphamClientComponent } from './Client/sanpham-client/sanpham-client.component';
import { DsloaispComponent } from './Client/dsloaisp/dsloaisp.component';
import { ChitietspComponent } from './Client/chitietsp/chitietsp.component';
import { NhacungcapComponent } from './Admin/nhacungcap/nhacungcap.component';
import { SptheoloaiComponent } from './Client/sptheoloai/sptheoloai.component';
import { AddlspComponent } from './Admin/addlsp/addlsp.component';
import { CartComponent } from './Client/cart/cart.component';
import { ThemspComponent } from './Admin/themsp/themsp.component';
import { SuaspComponent } from './Admin/suasp/suasp.component';
import { UpdateloaispComponent } from './Admin/updateloaisp/updateloaisp.component';
import { DangnhapComponent } from './Admin/dangnhap/dangnhap.component';
import { ThemnvComponent } from './Admin/themnv/themnv.component';
import { ThemnccComponent } from './Admin/themncc/themncc.component';
import { ThemkhachhangComponent } from './Admin/themkhachhang/themkhachhang.component';
import { DangkyComponent } from './Admin/dangky/dangky.component';


const routes: Routes = [
  {
    path:'dangnhapadmin',component: DangnhapComponent,
  },
  {
    path:'dangkyadmin',component: DangkyComponent,
  },
  { 
    path:'admin', component: LayoutComponent,
    children:[
      {path: 'loaisp', component:LoaispComponent},
      {path: 'sanpham', component:SanphamComponent},
      {path: 'taikhoannv', component:TaikhoannvComponent},
      {path: 'taikhoankh', component:TaikhoankhComponent},
      {path: 'nhanvien', component:NhanvienComponent},
      {path: 'nhacungcap', component:NhacungcapComponent},
      {path: 'khachhang', component:KhachhangComponent},
      {path: 'khohang', component:KhohangComponent},
      {path: 'loaisp/themloai', component:AddlspComponent},
      {path: 'loaisp/sualoai/:id', component:UpdateloaispComponent},
      {path: 'sanpham/themsp', component:ThemspComponent},
      {path: 'sanpham/suasp/:id', component:SuaspComponent},
      {path: 'nhanvien/themmoi', component:ThemnvComponent},
      {path: 'nhacc/themmoi', component:ThemnccComponent},
      {path: 'khachhang/themmoi', component:ThemkhachhangComponent}
    ]
  },
  {
    path:'Home', component: LayoutClientComponent,
    children:[
      {path:'trangchu',component:TrangchuComponent},
      {path:'spmoi',component:SanphamClientComponent},
      {path:'dsloaisp',component:DsloaispComponent},
      {path:'chitietsp/:id',component:ChitietspComponent},
      {path:'sptheoloai/:id',component: SptheoloaiComponent},
      {path:'giohang',component:CartComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
