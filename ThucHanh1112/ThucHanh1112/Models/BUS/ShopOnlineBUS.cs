﻿using ShopOnlineConnection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ThucHanh1112.Models.BUS
{
    public class ShopOnlineBUS
    {
        public static IEnumerable<SanPham> DanhSach()
        {
            var db = new ShopOnlineConnectionDB();
            return db.Query<SanPham>("select * from SanPham where TinhTrang=0");
        }

        public static SanPham ChiTiet(String a)
        {
            var db = new ShopOnlineConnectionDB();
            return db.SingleOrDefault<SanPham> ("select * from SanPham where MaSanPham=@0", a);
        }

        public static SanPham ThanhToan(string id)
        {
            var db = new ShopOnlineConnectionDB();
            return db.SingleOrDefault<SanPham>("select * from SanPham where MaSanPham=@0", id);
        }

        public static IEnumerable <SanPham> Top4New(String a)
        {
            var db = new ShopOnlineConnectionDB();
            return db.Query<SanPham>("select Top 4 * from SanPham where GhiChu=N'New'");
        }

    }
}