import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Admin/layout/layout.component';
import { NhacungcapComponent } from './Admin/nhacungcap/nhacungcap.component';
import { NhanvienComponent } from './Admin/nhanvien/nhanvien.component';
import { TaikhoannvComponent } from './Admin/taikhoannv/taikhoannv.component';
import { KhachhangComponent } from './Admin/khachhang/khachhang.component';
import { TaikhoankhComponent } from './Admin/taikhoankh/taikhoankh.component';
import { LoaispComponent } from './Admin/loaisp/loaisp.component';
import { SanphamComponent } from './Admin/sanpham/sanpham.component';
import { KhohangComponent } from './Admin/khohang/khohang.component';
import { HoadonnhapComponent } from './Admin/hoadonnhap/hoadonnhap.component';
import { ChitiethoadonnhapComponent } from './Admin/chitiethoadonnhap/chitiethoadonnhap.component';
import { DonhangComponent } from './Admin/donhang/donhang.component';
import { ChitietdonhangComponent } from './Admin/chitietdonhang/chitietdonhang.component';
import { SlideComponent } from './Admin/slide/slide.component';
import { TrangchuComponent } from './Client/trangchu/trangchu.component';
import { DsloaispComponent } from './Client/dsloaisp/dsloaisp.component';
import { HeaderComponent } from './Client/header/header.component';
import { FooterComponent } from './Client/footer/footer.component';
import { LayoutClientComponent } from './Client/layout-client/layout-client.component';
import { SanphamClientComponent } from './Client/sanpham-client/sanpham-client.component';
import { SlideClientComponent } from './Client/slide-client/slide-client.component';
import { ChitietspComponent } from './Client/chitietsp/chitietsp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SptheoloaiComponent } from './Client/sptheoloai/sptheoloai.component';
import { AddlspComponent } from './Admin/addlsp/addlsp.component';
//import { UpdatelspComponent } from './Admin/updatelsp/updatelsp.component';
import { ThemspComponent } from './Admin/themsp/themsp.component';
//import { SuaspComponent } from './suasp/suasp.component';
import { UpdateloaispComponent } from './Admin/updateloaisp/updateloaisp.component';
import { CartComponent } from './Client/cart/cart.component';
import { SuaspComponent } from './Admin/suasp/suasp.component';
import { DangnhapComponent } from './Admin/dangnhap/dangnhap.component';
import { ThemnvComponent } from './Admin/themnv/themnv.component';
import { ThemkhachhangComponent } from './Admin/themkhachhang/themkhachhang.component';
import { ThemnccComponent } from './Admin/themncc/themncc.component';
import { DangkyComponent } from './Admin/dangky/dangky.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NhacungcapComponent,
    NhanvienComponent,
    TaikhoannvComponent,
    KhachhangComponent,
    TaikhoankhComponent,
    LoaispComponent,
    SanphamComponent,
    KhohangComponent,
    HoadonnhapComponent,
    ChitiethoadonnhapComponent,
    DonhangComponent,
    ChitietdonhangComponent,
    SlideComponent,
    TrangchuComponent,
    DsloaispComponent,
    HeaderComponent,
    FooterComponent,
    LayoutClientComponent,
    SanphamClientComponent,
    SlideClientComponent,
    ChitietspComponent,
    SptheoloaiComponent,
    AddlspComponent,
    //UpdatelspComponent,
    ThemspComponent,
    UpdateloaispComponent,
    CartComponent,
    SuaspComponent,
    DangnhapComponent,
    ThemnvComponent,
    ThemkhachhangComponent,
    ThemnccComponent,
    DangkyComponent,
    //SptheoloaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
