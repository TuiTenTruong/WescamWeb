console.log(localStorage.getItem('list_lap') === null);
if (localStorage.getItem('users') === null){
    var taikhoan = [{ username: "admin123", password: "Admin@123" }];
    localStorage.setItem("users", JSON.stringify(taikhoan));
}
if (localStorage.getItem('list_lap') === null){

    var list_laps =
    '[{"maSP":"sp001","NhuCau":"Văn phòng","Brand":"HP","TenSP":"Laptop HP Pavilion 14-dv2075TU","Gia":15490000,"Coupon":25,"img":["https://maytinhcdc.vn/media/product/6775_laptop_hp_pavilion_14_dv2075tu_7c0w2pa_03_.jpg","https://www.nnkk.vn/media/product/2949_laptop_hp_pavilion_14_dv2075tu.png","https://maytinhcdc.vn/media/product/6775_laptop_hp_pavilion_14_dv2075tu_7c0w2pa_02_.jpg"],"ManHinh":"14 inch ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam","CPU":"Intel Core i5-1235U ( 1.3 GHz - 4.4 GHz / 12MB / 10 nhân, 12 luồng )","RAM":"2 x 4GB DDR4 3200MHz","TrongLuong":"1,4kg","OCung":"512GB SSD","HDH":"Windows 11","KichThuoc":"32.5 x 21.66 x 1.70 cm","XuatXu":"Trung Quốc","DanhGia":"Laptop HP Pavilion 14-dv2075TU đã lâu đã trở thành một lựa chọn hàng đầu cho người dùng có nhu cầu văn phòng, doanh nghiệp và học sinh - sinh viên. Với thương hiệu đáng tin cậy của HP và chế độ bảo hành 12 tháng, model HP của chiếc laptop này mang đến sự an tâm và tin cậy cho người dùng. Với cấu hình mạnh mẽ và tính năng đáng chú ý, Laptop HP Pavilion đảm bảo hiệu suất ổn định và trải nghiệm tuyệt vời. Hãy khám phá chi tiết về Laptop HP Pavilion để hiểu rõ hơn về những lí do vì sao nó xứng đáng trở thành người bạn đồng hành tin cậy của bạn."},{"maSP":"sp002","NhuCau":"Văn phòng","Brand":"Lenovo","TenSP":"Laptop Lenovo Ideapad 5 - 15IAL7 -82SF006LVN","Gia":13600000,"Coupon":25,"img":["https://cdn.mwave.com.au/images/400/82sf001fau_ac61137_82613.jpg","https://laptopmedia.com/wp-content/uploads/2022/09/2-17-e1662623960875.jpg","https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/406845-15-to-16-inch-laptops-lenovo-ideapad-5-15ial7-10031067.jpg"],"ManHinh":"15,6 inch ( 1920 x 1080 ) Full HD IPS Màn hình chống lóa , FHD webcam","CPU":"Intel Core i5-1235U ( 1.3 GHz - 4.4 GHz / 12MB / 10 nhân, 12 luồng )","RAM":"2 x 4GB DDR4 3200MHz","TrongLuong":"1,8kg","OCung":"512GB SSD","HDH":"Windows 11 Home","KichThuoc":"35.667 x 23.313 x 1.69 cm","XuatXu":"Trung Quốc","DanhGia":"Laptop Lenovo Ideapad 5 - 15IAL7 -82SF006LVN là một siêu phẩm được đánh giá cao trong phân khúc tầm giá. Chiếc máy tính này được trang bị màn hình hiển thị kích thước lớn, chất lượng hình ảnh sắc nét cùng hiệu năng hoạt động ổn định đây sẽ là “người bạn” đồng hành với bạn từ công việc đến giải trí, thư giãn."},{"maSP":"sp003","NhuCau":"Văn phòng","Brand":"Lenovo","TenSP":"Laptop Lenovo IdeaPad Slim 5 14IAH8 - 83BF002NVN","Gia":14990000,"Coupon":20,"img":["https://gearopen.com/wp-content/uploads/2020/11/4zu3_Lenovo_Ideapad_5_14ARE05-695x521.jpg","https://www.civip.com.vn/media/product/8526_83bf002nvn___1_.jpg","https://www.civip.com.vn/media/product/8526_83bf002nvn___3_.jpg"],"ManHinh":"14 inch ( 1920 x 1200 ) WUXGA IPS không cảm ứng , FHD webcam","CPU":"Intel Core i5-12450H ( 2.0 GHz - 4.4 GHz / 12MB / 8 nhân, 12 luồng )","RAM":"16GB Onboard LPDDR5 4800MHz ( Không / Không nâng cấp được )","TrongLuong":"1,5kg","OCung":"512GB SSD","HDH":"Windows 11 Home","KichThuoc":"31.2 x 22.1 x 1.79 cm","XuatXu":"Trung Quốc","DanhGia":"Laptop Lenovo IdeaPad 5 14IAH8 - 83BF002NVN là một sản phẩm laptop đang được ưa chuộng hiện nay. Máy tính cầm tay này trang bị bộ vi xử lý Intel Core i5-12450H cùng dung lượng ổ cứng 512Gb SSD M.2 NVMe có thể đáp ứng tốt các tác vụ văn phòng, học tập một cách tối ưu. "},{"maSP":"sp004","NhuCau":"Văn phòng","Brand":"Acer","TenSP":"Laptop ACER Aspire 3 A315-59-51X8","Gia":12990000,"Coupon":30,"img":["https://hanoicomputercdn.com/media/product/80531_laptop_acer_aspire_3_a315_59_51x8__nx_k6tsv__3_.jpg","https://hc.com.vn/i/ecommerce/media/GS.010088_FEATURE_117683.jpg","https://laptopmedia.com/wp-content/uploads/2022/07/5-40-e1677080539832.jpg"],"ManHinh":"15.6 inch ( 1920 x 1080 ) Full HD không cảm ứng , HD webcam","CPU":"Intel Core i5-1235U ( 1.3 GHz - 4.4 GHz / 12MB / 10 nhân, 12 luồng )","RAM":"1 x 8GB DDR4 2400MHz ( 1 Khe cắm / Hỗ trợ tối đa 32GB )","TrongLuong":"1,7kg","OCung":"512GB SSD","HDH":"Windows 11 Home","KichThuoc":"36.29 x 24.126 x 1.99 cm","XuatXu":"Trung Quốc","DanhGia":"Laptop Acer Aspire 3 A315-59-51X8 được biết đến là mẫu laptop văn phòng do thương hiệu Acer mới ra mắt gần đây. Ưu điểm của sản phẩm là cấu hình vượt trội và giá thành rẻ so với các mẫu máy tính khác cùng hiệu năng. Do đó, Acer Aspire 3 A315-59-51X8 rất phù hợp với đối tượng là học sinh, sinh viên và dân văn phòng."},{"maSP":"sp005","NhuCau":"Văn phòng","Brand":"Asus","TenSP":"Laptop Asus Vivobook Go 15 E1504FA-NJ454W","Gia":12490000,"Coupon":10,"img":["https://cdn.ankhang.vn/media/product/23831_laptop_asus_vivobook_go_15_e1504fa_nj454w_1.jpg","https://laptopworld.vn/media/product/12991_asus_vivobook_go_15_e1504_6.jpg","https://static.msystems.gr/photos/big_photos/45882.2.jpg"],"ManHinh":"15.6 inch ( 1920 x 1080 ) Full HD không cảm ứng , HD webcam","CPU":"AMD Ryzen 5 7520U (2.8 GHz - 4.3 GHz / 4MB / 4 nhân, 8 luồng)","RAM":"16GB Onboard LPDDR5 5500MHz","TrongLuong":"1,8kg","OCung":"512GB SSD","HDH":"Windows 11 Home","KichThuoc":"36.03 x 23.25 x 1.79 cm","XuatXu":"Trung Quốc","DanhGia":"Laptop Asus Vivobook Go 15 E1504FA-NJ454W được biết đến là mẫu laptop văn phòng do thương hiệu Asus mới ra mắt gần đây. Ưu điểm của sản phẩm là cấu hình tốt và giá thành rẻ so với các mẫu máy tính khác cùng hiệu năng. Do đó, Asus Vivobook Go 15 E1504FA-NJ454W rất phù hợp với đối tượng là học sinh, sinh viên và dân văn phòng."},{"maSP":"sp006","NhuCau":"Văn phòng","Brand":"HP","TenSP":"Laptop HP Pavilion 15-eg2081TU (7C0Q4PA)","Gia":16990000,"Coupon":29,"img":["https://salt.tikicdn.com/cache/w1200/ts/product/e3/42/d5/26bd610516e09a35d7f9c0db76f14b47.jpg","https://mixicomputer.vn/media/product/3437-laptop-hp-pavilion-15-eg2081tu-7c0q4pa-core-i5-1240p-16gb-ram-512gb-ssd-intel-iris-xe-graphics-156inch-full-hd-windows-11-home-silver-1-1.jpg","https://cdn.nguyenkimmall.com/images/detailed/856/10054593-laptop-hp-pavilion-15-eg2081tu-i5-1240p-7c0q4pa-2.jpg"],"ManHinh":"15.6 inch ( 1920 x 1080 ) Full HD không cảm ứng , HD webcam","CPU":"Intel Core i5-1240P ( 1.7 GHz - 4.4 GHz / 12MB / 12 nhân, 16 luồng )","RAM":"2 x 8GB DDR4 3200MHz","TrongLuong":"1,8kg","OCung":"512GB SSD","HDH":"Windows 11 Home SL","KichThuoc":"36.02 x 23.4 x 1.79 cm","XuatXu":"Trung Quốc","DanhGia":"Nếu bạn đang tìm kiếm một sản phẩm có hiệu năng linh hoạt và thiết kế di động mà không phải bỏ ra một khoản ngân sách quá lớn thì hãy thử nghiệm chiếc Laptop HP Pavilion 15 Core i5 thế hệ 12. Sản phẩm có hiệu năng đáng kinhh ngạc khi sở hữu con chip Intel Core i5 thể hệ thứ 12, dung luọng lưu trữ lớn 512GB SSD. Ngoài ra, con Laptop này còn có thiết kế mỏng nhẻ, kiểu dáng trẻ trung, phù hơpj với các bạn nhân viên văn phòng và học sinh-sinh viên"},{"maSP":"sp007","NhuCau":"Gaming","Brand":"Lenovo","TenSP":"Laptop Lenovo LOQ 15IRX9 - 83DV00ERVN","Gia":32190000,"Coupon":21,"img":["https://s13emagst.akamaized.net/products/64317/64316464/images/res_a83c5eceb667ea4ba5bcded1acba8698.jpg","https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534467cv1d.jpg","https://hanoicomputercdn.com/media/product/78023_laptop_lenovo_gaming_loq_15irx9__83dv000mvn__5.jpg"],"ManHinh":"15.6 inch ( 1920 x 1080 ) Full HD IPS 144Hz , không cảm ứng , Màn hình chống lóa , FHD webcam","CPU":"Intel Core i7-13650HX ( 2.6 GHz - 4.9GHz / 24MB / 14 nhân, 20 luồng )","RAM":"1 x 16GB DDR5 4800MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )","TrongLuong":"2,4kg","OCung":"512GB SSD","HDH":"Windows 11 Home","KichThuoc":"359.86 x 258.7 x 21.9-23.9 mm","XuatXu":"Trung Quốc","DanhGia":"Laptop Lenovo LOQ 15IRX9 - 83DV00ERVN là mẫu Laptop Gaming thịnh hành của hãng Lenovo với cấu hình khủng với giả cả phải chăng so với các sản phẩm khác cùng hiệu năng. Với màn hình vừa đủ và tần số quét 144Hz đủ cho các bạn trải nghiệm những con game yêu cầu một cấu hình cao mà không bị giật lag."},{"maSP":"sp008","NhuCau":"Gaming","Brand":"Acer","TenSP":"Laptop Acer Nitro 5 Tiger AN515-58-773Y","Gia":26290000,"Coupon":15,"img":["https://vitinhmainguyen.com/wp-content/uploads/2022/04/63453_laptop_acer_gaming_nitro_5_tiger_an515_58_9-600x600.jpg","https://hc.com.vn/i/ecommerce/media/GS.009169_FEATURE_100930.jpg","https://anphat.com.vn/media/lib/24-03-2022/nitro-5-tiger-cy.jpg"],"ManHinh":"15.6 inch ( 1920 x 1080 ) Full HD IPS 144Hz , không cảm ứng , Màn hình chống lóa , FHD webcam","CPU":"Intel Core i7-12700H ( 2.3 GHz - 4.7GHz / 24MB / 14 nhân, 20 luồng )","RAM":"1 x 8GB DDR4 3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )","TrongLuong":"2,5kg","OCung":"512GB SSD","HDH":"Windows 11 Home","KichThuoc":"36.04 x 27.109 x 2.59 cm","XuatXu":"Trung Quốc","DanhGia":"Laptop ACER Nitro AN515-58-773Y NH.QFKSV.001 được trang bị chip i7, Ram cùng ổ cứng dung lượng lớn đem đến hiệu năng mạnh mẽ. Kết hợp thiết kế mới mẻ và hiện đại, phù hợp với tất cả người dùng đặc biệt là các game thủ. Đáp ứng nhu cầu học tập, làm việc hiệu năng cao và trải nghiệm chơi game tuyệt đỉnh."},{"maSP":"sp009","NhuCau":"Văn phòng","Brand":"Dell","TenSP":"Laptop Dell Vostro 15 3530 - 80GG93","Gia":18490000,"Coupon":15,"img":["https://bizweb.dktcdn.net/100/329/122/products/laptop-dell-vostro-15-3530-80gg91-4-ac41069e-ad85-45d6-85d3-3c4d9c50dd74.jpg?v=1685607805763","https://bizweb.dktcdn.net/100/329/122/products/laptop-dell-vostro-15-3530-80gg91-4-ac41069e-ad85-45d6-85d3-3c4d9c50dd74.jpg?v=1685607805763","https://bizweb.dktcdn.net/thumb/1024x1024/100/329/122/products/laptop-dell-vostro-15-3530-v5i3001w1-gray-2.jpg?v=1683690209767"],"ManHinh":"15.6 inch ( 1920 x 1080 ) Full HD WVA 120Hz , không cảm ứng , HD webcam","CPU":"Intel Core i5-1335U ( 1.3 GHz - 4.6 GHz / 12MB / 10 nhân, 12 luồng )","RAM":"2 x 8GB DDR4 2666MHz","TrongLuong":"1,7kg","OCung":"512GB SSD","HDH":"Windows 11 Home","KichThuoc":"35.85 x 23.56 x 1.90 cm","XuatXu":"Trung Quốc","DanhGia":"Dell Vostro 15 3530 - 80GG93 là một sản phẩm laptop cao cấp từ hãng Dell - một trong những thương hiệu hàng đầu và được tin dùng trong lĩnh vực công nghệ. Điểm đặc biệt của sản phẩm này là sự kết hợp giữa hiệu suất mạnh mẽ và thiết kế nhỏ gọn, phù hợp với nhu cầu di động của người dùng hiện đại."},{"maSP":"sp010","NhuCau":"Văn phòng","Brand":"Dell","TenSP":"Laptop Dell Inspiron 15 3530 - 71026454","Gia":21990000,"Coupon":20,"img":["https://pctech.co.in/image/cache/catalog/Laptops/DELL/inspiron-3530/dell-inspiron-15-3530-laptop-01-1200x1200w.png","https://laptopmedia.com/wp-content/uploads/2022/11/2-27-e1669105503887.jpg","https://cdn.ben.com.vn/Content/Images/Products/c4d99ac9-1a81-4241-b0b3-ccba3a058c0b.jpg"],"ManHinh":"15.6 inch ( 1920 x 1080 ) Full HD WVA, không cảm ứng, HD webcam","CPU":"Intel Core i7-1355U ( 1.7 GHz - 5.0GHz / 12MB / 10 nhân, 12 luồng )","RAM":"2 x 8GB DDR4 2666MHz ( 2 Khe cắm )","TrongLuong":"1,66kg","OCung":"512GB SSD","HDH":"Windows 11 Home SL + Office Home & Student 2021","KichThuoc":"358.50 x 235.56 x 18.99 mm","XuatXu":"Trung Quốc","DanhGia":"Laptop Dell Inspiron 15 3530 - 71026454 là biểu tượng của sự hoàn hảo từ thương hiệu nổi tiếng Dell, hứa hẹn đưa người dùng đến một trải nghiệm đỉnh cao trong công việc và học tập. Thiết kế tinh tế, hiệu năng mạnh mẽ và sự linh hoạt trong kết nối là những đặc điểm nổi bật, giúp máy trở thành người bạn đồng hành đắc lực cho mọi nhu cầu sử dụng."},{"maSP":"sp011","NhuCau":"Đồ họa - Kỹ thuật","Brand":"Macbook","TenSP":"MacBook Pro 14 inch 2023 M3","Gia":49990000,"Coupon":20,"img":["https://i.ytimg.com/vi/LsF6ADEMVMc/maxresdefault.jpg","https://cpuninja.com/wp-content/uploads/2022/12/Apple-Macbook.jpg","https://cdn.eraspace.com/pub/media/mageplaza/blog/post/m/a/macbookpro2023-primary.jpg"],"ManHinh":"14.2 inch, FHD webcam","CPU":"Apple M3 ( 8 - Core CPU / 10 - Core GPU )","RAM":"16GB","TrongLuong":"1,6kg","OCung":"1TB SSD","HDH":"macOS","KichThuoc":"31.26 x 22.12 x 1.55 cm","XuatXu":"Mỹ","DanhGia":"MacBook Pro M3 2023 14 inch (16GB/1TB SSD) là một chiếc laptop đa năng, mạnh mẽ và nhỏ gọn, phù hợp cho mọi người dùng từ những người dùng văn phòng đến nhà thiết kế đồ họa. Với hiệu suất ấn tượng và thiết kế tinh tế, đây chắc chắn là một trong những lựa chọn hàng đầu trên thị trường laptop hiện nay."},{"maSP":"sp012","NhuCau":"Văn phòng","Brand":"Macbook","TenSP":"Macbook Air M2 2022 13 inch","Gia":34990000,"Coupon":28,"img":["https://images.expertreviews.co.uk/wp-content/uploads/2022/08/m2_macbook_air_2022_review_0.jpg","https://sm.pcmag.com/t/pcmag_au/review/a/apple-macb/apple-macbook-air-2022-m2_yqte.1920.jpg","https://92130magazine.com/wp-content/uploads/2022/01/M2_Apple_MacBook_Pro_14_Mac_Air_2022_drdNBC.jpg"],"ManHinh":"13.6 inch  ( 2560 x 1664 ) | Liquid Retina FHD webcam","CPU":"Apple M2 ( 8 - Core CPU / 8 - Core GPU )","RAM":"16GB","TrongLuong":"1,2kg","OCung":"512GB SSD","HDH":"macOS","KichThuoc":"30.41 x 21.5 x 1.13 cm","XuatXu":"Mỹ","DanhGia":"MacBook Air M2 2022 13 inch (16GB/512GB SSD) là chiếc MacBook đến từ thương hiệu Apple - một trong những nhà sản xuất nổi tiếng với sự đẳng cấp trong thế giới công nghệ. MacBook Air M2 2022 13 inch mang đến hiệu suất vượt trội và thiết kế sang trọng, luôn sẵn sàng chinh phục bất kỳ người dùng nào đang tìm kiếm một sản phẩm đẳng cấp để làm việc hiệu năng cao."}]';
var list_phones =
    '[{"maSP":"sp013","Brand":"Samsung","TenSP":"Galaxy S23 Ultra","Gia":24990000,"Coupon":26,"img":["https://telefonika.com/wp-content/uploads/2023/02/Samsung-Galaxy-S23-Ultra.jpg","https://jersuindica.com/wp-content/uploads/2023/03/s23-ultraa.jpg","https://images.hothardware.com/contentimages/article/3281/content/small_S23-Ultra-03.jpg"],"ManHinh":"6.8 inch Dynamic AMOLED 2X; Quad HD+ (2K+) (3088 x 1440)","CPU":"Snapdragon 8 Gen 2","RAM":"8GB (256GB ROM)","TrongLuong":"233g","HDH":"Android","KichThuoc":"78.1 x 163.4 x 8.9 mm","XuatXu":"Hàn Quốc","DanhGia":"Samsung S23 Ultra là một trong những sản phẩm smartphone cao cấp đến từ nhà Samsung mang vẻ ngoài sang trọng, camera tuyệt đỉnh. Với đầy đủ tính năng mới, hơn thế nữa là chất liệu bền vững kết hợp với thiết kế tối giản và tối ưu hóa năng lượng là những yếu tố giúp S23 Ultra không chỉ là một chiếc điện thoại mà còn trở thành một sản phẩm tốt cho người tiêu dùng."},{"maSP":"sp014","Brand":"Samsung","TenSP":"Samsung Galaxy Z Fold 5","Gia":36990000,"Coupon":24,"img":["https://www.gadgetmaya.com/wp-content/uploads/2023/07/Samsung-Galaxy-Z-Fold-5.jpg","https://static.independent.co.uk/2023/07/24/11/samsung%20galaxy%20z%20fold%205%201.png","https://techcrunch.com/wp-content/uploads/2019/09/CMB_8147.jpg"],"ManHinh":"Màn hình chính 7.6 inch, độ phân giải QXGA+ (2176 x 1812 Pixels) và màn hình phụ 6.2 inch độ phân giải HD+ (2316 x 904 Pixels).","CPU":"Snapdragon 8 Gen 2","RAM":"12GB (512GB ROM)","TrongLuong":"253g","HDH":"Android","KichThuoc":"154.9 x 129.9 x 6.1 mm","XuatXu":"Hàn Quốc","DanhGia":"Nếu so với thế hệ tiềm nhiệm, Fold 5 không có thay đổi quá lớn nhưng mọi khía cạnh đều được cải thiện tốt hơn. Máy mỏng nhẹ hơn, bàn lề mới giờ gập phẳng, màn sáng hơn và hiệu năng nhanh hơn. Không chỉ có vậy, chip Snapdragon 8 Gen 2 mới còn giúp cải thiện hiệu quả chụp ảnh và pin dù phần cứng không thay đổi so với Fold 4. Có thể nói, mọi yếu tố liên quan đến trải nghiệm sử dụng của Fold 5 đều tốt hơn thế hệ cũ."},{"maSP":"sp015","Brand":"Samsung","TenSP":"Samsung Galaxy Z Flip 5","Gia":23390000,"Coupon":20,"img":["https://tse3.mm.bing.net/th?id=OIP.8bCd3tJ9fC-PvwePgUrtOwHaGG&pid=Api&P=0&h=220","https://www.deepspecs.com/wp-content/uploads/2020/05/2-samaung-galaxy-z-flip-5g-deepspecs.psd-1320x1433.jpg","https://images.indianexpress.com/2023/07/samsung-galaxy-z-flip-5.jpg"],"ManHinh":"Màn hình chính 6.7 inch, độ phân giải FHD+ (2640 x 1080 Pixels) và màn hình phụ 3.4 inch độ phân giải HD+ (720 x 748 Pixels).","CPU":"Snapdragon 8 Gen 2","RAM":"8GB (512GB ROM)","TrongLuong":"187g","HDH":"Android","KichThuoc":"165.1 x 71.9 x 6.9 mm","XuatXu":"Hàn Quốc","DanhGia":"Với hàng loạt cải tiến lớn từ màn hình ngoài “siêu to khổng lồ”, gập khít hơn, mỏng gọn, mạnh mẽ hơn, Galaxy Z Flip 5 tiếp tục cho thấy đây là mẫu smartphone gập “chủ bài” của Samsung, đúng chất “linh hoạt”, giúp hãng công nghệ Hàn Quốc chinh phục số đông người dùng thích sự độc lạ, đặc biệt là đối tượng Gen Z hay nữ giới Gen X, Gen Y"},{"maSP":"sp016","Brand":"Samsung","TenSP":"Samsung Galaxy S24 Ultra","Gia":37490000,"Coupon":20,"img":["https://techring.in/wp-content/uploads/2023/02/Samsung-Galaxy-S24-Ultra.jpg","https://smart-phoneprice.com/wp-content/uploads/2023/02/Samsung-Galaxy-S24-Ultra-5G-2.jpg","https://yoopply.com/content/c203b96b0d25eabcb6c693e1242.png"],"ManHinh":"6.8 inch Dynamic LTPO AMOLED 2X; Độ phân giải 1440 x 3088 pixels","CPU":"Snapdragon 8 Gen 3","RAM":"12GB (512GB ROM)","TrongLuong":"233g","HDH":"Android","KichThuoc":"162.3 x 79 x 8.6 mm","XuatXu":"Hàn Quốc","DanhGia":"Galaxy S24 Ultra là mẫu flagship cao cấp nhất của Samsung vừa ra trong tháng 1/2024. Sau một tuần trải nghiệm, chiếc máy này đem lại cho mình khá nhiều điểm hài lòng từ thời lượng pin ấn tượng, cảm giác cầm nắm tốt, camera quay chụp tốt cùng loạt tính năng AI thiết thực."},{"maSP":"sp017","Brand":"Iphone","TenSP":"Iphone 15 Pro Max","Gia":36490000,"Coupon":20,"img":["https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-15pm/whitetitanium/front.png","https://static.digit.in/default/iphone-15-1280-1-54ffff13a9.png","https://whatsmobiles.net/wp-content/uploads/2023/06/IPHONE-15-PRO-MAX-PRICE-IN-PAKISTAN-600x600.jpg"],"ManHinh":"OLED Super Retina XDR; độ phân giải 6.7inch 2796 x 1290","CPU":"Apple A17 Bionic","RAM":"12GB (512GB ROM)","TrongLuong":"221g","HDH":"iOS","KichThuoc":"159.9 x 76.7 x 8.25 mm","XuatXu":"Mỹ","DanhGia":"iPhone 15 Pro Max 512GB là siêu phẩm mới nhất đến từ Apple với khả năng chụp ảnh chuyên nghiệp từ việc cải tiến về độ phân giải lên đến 48MP ở camera. Cùng với chip Apple A17 Pro hiện đại, mạnh mẽ, iPhone 15 Pro Max dự đoán sẽ là sản phẩm điện thoại vượt xa nhiều hãng điện thoại khác đang tồn tại trên thị trường"},{"maSP":"sp018","Brand":"Vivo","TenSP":"Vivo V2204 -Y16","Gia":4150000,"Coupon":15,"img":["https://www.aerophone.com.ph/image/cache/catalog/Vivo/Y16_V2204_4GB_128GB/pimg_0-1000x1000.jpg","https://www.pinoytechnoguide.com/wp-content/uploads/2022/09/vivo-Y16-large-1024x576.jpg","https://lzd-img-global.slatic.net/g/p/6b75597c39c2196ac113cd989fd046a4.jpg_2200x2200q80.jpg_.webp"],"ManHinh":"6.51 inch IPS LCD; độ phân giải HD+ (720 x 1600 Pixels)","CPU":"MediaTek Helio P35","RAM":"4GB","OCung":"128GB ROM","TrongLuong":"183g","HDH":"Android","KichThuoc":"163.95 x 75.55 x 8.19 mm","XuatXu":"Hàn Quốc","DanhGia":"Vivo Y16 là một chiếc máy tương đối nổi bật ở phần thiết kế đẹp, trẻ trung và mặt lưng khá độc lạ trong phân khúc. Bên cạnh đó, máy cũng sở hữu thời lượng pin lâu dài giúp người dùng sử dụng thoải mái. Tuy nhiên, vivo Y16 cần cải thiện nhiều hơn mới đủ để khiến chiếc máy này hấp dẫn hơn so với các đối thủ bởi các tính năng như màn hình hay hiệu năng và camera chưa thực sự ấn tượng."},{"maSP":"sp019","Brand":"Vivo","TenSP":"Vivo V25 5G","Gia":9900000,"Coupon":18,"img":["https://www.91-img.com/pictures/152686-v1-vivo-v25-5g-256gb-mobile-phone-hres-7.jpg","https://pragativadi.com/core/uploads/2022/09/v25.png","https://pragativadi.com/core/uploads/2022/09/vivo.png"],"ManHinh":"6.44 inch AMOLED; độ phân giải Full HD+ (1080 x 2404 Pixels)","CPU":"MediaTek Dimensity 900 5G","RAM":"8GB","OCung":"128GB ROM","TrongLuong":"186g","HDH":"Android","KichThuoc":"159.2 x 74.2 x 7.79 mm","XuatXu":"Hàn Quốc","DanhGia":"vivo V25 thuộc phân khúc cận cao cấp với mức giá khoảng 10 triệu đồng sở hữu rất nhiều ưu điểm như thiết kế sang trọng, mặt lưng kính Fluorite AG có thể thay đổi màu sắc hay camera đa dụng trong nhiều trường hợp. Nhưng vẫn có đó nhiều điều cần cải thiện như cấu hình, người dùng sẽ đòi hỏi vi xử lý mạnh mẽ hơn chứ không phải “cải lùi” so với người tiền nhiệm vivo V23 5G. Màn hình cũng là điểm cần nhắc đến khi vivo v25 sở hữu màn hình khá lỗi thời và thiếu sự cao cấp."},{"maSP":"sp020","Brand":"Samsung","TenSP":"Samsung Galaxy A55 5G","Gia":8968000,"Coupon":19,"img":["https://cdn.tgdd.vn/2024/03/campaign/A55-1-600x600.png","https://didongthongminh.vn/images/news/2023/10/original/galaxy-a55-2_1696314693.jpg","https://img.global.news.samsung.com/my/wp-content/uploads/2024/03/Galaxy-A55-5G-A35-5G-KV.jpg"],"ManHinh":"6.6 inch Super AMOLED; độ phân giải Full HD+ (1080 x 2404 Pixels)","CPU":"Exynos 1480","RAM":"8GB","OCung":"128GB ROM","TrongLuong":"213g","HDH":"Android","KichThuoc":"161.1 x 77.4 x 8.2 mm","XuatXu":"Hàn Quốc","DanhGia":"Samsung Galaxy A55 5G thuộc phân khúc cận cao cấp với mức giá khoảng 10 triệu đồng sở hữu rất nhiều ưu điểm như thiết kế sang trọng, mặt lưng kính Fluorite AG có thể thay đổi màu sắc hay camera đa dụng trong nhiều trường hợp. Nhưng vẫn có đó nhiều điều cần cải thiện như cấu hình, người dùng sẽ đòi hỏi vi xử lý mạnh mẽ hơn chứ không phải “cải lùi” so với người tiền nhiệm vivo V23 5G. Màn hình cũng là điểm cần nhắc đến khi vivo v25 sở hữu màn hình khá lỗi thời và thiếu sự cao cấp."},{"maSP":"sp021","Brand":"Samsung","TenSP":"Samsung Galaxy A14 LTE","Gia":3490000,"Coupon":18,"img":["https://didongthongminh.vn/upload_images/images/products/galaxy-a-series-5g/original/Galaxy-A14-LTE-bac%20(4)_1678099372_1.jpg","https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/111/MTA-128458848/samsung_galaxy-a14_lte_4gb-128gb_full02_cqj4eeii.jpg","https://phucanhcdn.com/media/lib/22-04-2023/dien-thoai-thong-minh-samsung-galaxy-a14-lte-21.png"],"ManHinh":"6.6 inch - PLS LCD; độ phân giải Full HD+ (1080 x 2404 Pixels)","CPU":"MediaTek Dimensity 900 5G","RAM":"4GB","OCung":"128GB ROM","TrongLuong":"201g","HDH":"Android","KichThuoc":"167.7 x 76 x 9.1 mm","XuatXu":"Hàn Quốc","DanhGia":"Samsung Galaxy A14 LTE thuộc phân khúc cận cao cấp với mức giá khoảng 5 triệu đồng sở hữu rất nhiều ưu điểm như thiết kế sang trọng, mặt lưng kính Fluorite AG có thể thay đổi màu sắc hay camera đa dụng trong nhiều trường hợp. Nhưng vẫn có đó nhiều điều cần cải thiện như cấu hình, người dùng sẽ đòi hỏi vi xử lý mạnh mẽ hơn chứ không phải “cải lùi” so với người tiền nhiệm vivo V23 5G. Màn hình cũng là điểm cần nhắc đến khi vivo v25 sở hữu màn hình khá lỗi thời và thiếu sự cao cấp."},{"maSP":"sp022","Brand":"Iphone","TenSP":"Iphone 15 Pro","Gia":29870000,"Coupon":18,"img":["https://didongthongminh.vn/upload_images/images/products/galaxy-a-series-5g/original/Galaxy-A14-LTE-bac%20(4)_1678099372_1.jpg","https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/111/MTA-128458848/samsung_galaxy-a14_lte_4gb-128gb_full02_cqj4eeii.jpg","https://phucanhcdn.com/media/lib/22-04-2023/dien-thoai-thong-minh-samsung-galaxy-a14-lte-21.png"],"ManHinh":"6.1 inch OLED Super Retina XDR; độ phân giải 2556 x 1179","CPU":"Apple A17 Bionic","RAM":"12GB","OCung":"1TB ROM","TrongLuong":"187g","HDH":"iOS","KichThuoc":"146.6 x 70.6 x 8.25 mm","XuatXu":"Mỹ","DanhGia":"iPhone 15 Pro 1TB sở hữu CPU Apple A17 Bionic đem lại hiệu năng mạnh mẽ, đặc biệt có dung lượng 1TB mang đến cho bạn một không gian lưu trữ khổng lồ. Phiên bản này phù hợp với những đối tượng người dùng thường xuyên quay phim, chụp ảnh có độ phân giải cao hoặc dùng những ứng dụng nặng như game và đồ họa."},{"maSP":"sp023","Brand":"Samsung","TenSP":"Samsung Galaxy S24 Plus","Gia":20490000,"Coupon":18,"img":["https://hoanghamobile.com/Uploads/2024/01/16/s24-plus-tim.png","https://www.att.com/scmsassets/global/devices/phones/samsung/samsung-galaxy-s24-plus/gallery/onyx-black-9.jpg","https://tavishouse.vn/wp-content/uploads/2024/03/samsung-galaxy-s24-plus.jpg"],"ManHinh":"6.7 inch - Dynamic LTPO AMOLED; độ phân giải 1440 x 3088 Pixels","CPU":"Snapdragon 8 Gen 3","RAM":"12GB","OCung":"256GB ROM","TrongLuong":"195g","HDH":"Android","KichThuoc":"158.5 x 75.9 x 7.7 mm","XuatXu":"Hàn Quốc","DanhGia":"Có thể thấy, đối với nhu cầu sử dụng cơ bản thì Galaxy S24+ vẫn có thể đáp ứng ngon lành mà bạn không cần phải chi thêm tiền để mua Galaxy S24 Ultra. Tuy còn một vài hạn chế nhưng Galaxy S24+ vẫn là mẫu điện thoại Galaxy S xịn sò đáng mua nhất trong năm 2024."},{"maSP":"sp024","Brand":"Samsung","TenSP":"Samsung Galaxy M34 5G","Gia":5890000,"Coupon":20,"img":["https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695978965254_samsung_m34_xanh_didongviet.png","https://didongviet.vn/dchannel/wp-content/uploads/2023/10/co-nen-mua-samsung-galaxy-m34-2-didongviet.jpg","https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/164074/Originals/tren-tay-Galaxy-M34-5G-9.jpg"],"ManHinh":"6.5 inch - Super AMOLED; độ phân giải 1080 x 2340 Pixels","CPU":"Exynos 1280","RAM":"8GB","OCung":"128GB ROM","TrongLuong":"208g","HDH":"Android","KichThuoc":"161.7 x 77.2 x 8.8 mm","XuatXu":"Hàn Quốc","DanhGia":"Mình cảm thấy rằng trong tầm giá 8 triệu của Galaxy M34 5G thì bản thân chiếc điện thoại này có ít nhiều điểm sáng đáng chú ý như pin trâu, máy đầm, chắc, màn hình khá đẹp trong tầm giá, có thiết kế cảm hứng từ dòng flagship, một chiếc điện thoại khá phù hợp dành cho phụ huynh, một chiếc điện thoại đủ đáp ứng nhu cầu liên lạc cơ bản, đọc báo mỗi ngày."},{"maSP":"sp025","Brand":"Samsung","TenSP":"Samsung Galaxy A25","Gia":5090000,"Coupon":17,"img":["https://samcenter.vn/images/thumbs/0005404_galaxy-a25-5g.png","https://www.minhducvn.com/wp-content/uploads/2023/12/IMG_0659.jpg","https://hoanghamobile.com/Uploads/2023/12/11/a25-1.png"],"ManHinh":"6.5 inch - Super AMOLED; độ phân giải 1080 x 2340 Pixels","CPU":"Exynos 1280","RAM":"6GB","OCung":"128GB ROM","TrongLuong":"197g","HDH":"Android","KichThuoc":"161.0 x 76.5 x 8.3 mm","XuatXu":"Hàn Quốc","DanhGia":"Mình cảm thấy rằng trong tầm giá 8 triệu của Galaxy A25 thì bản thân chiếc điện thoại này có ít nhiều điểm sáng đáng chú ý như pin trâu, máy đầm, chắc, màn hình khá đẹp trong tầm giá, có thiết kế cảm hứng từ dòng flagship, một chiếc điện thoại khá phù hợp dành cho phụ huynh, một chiếc điện thoại đủ đáp ứng nhu cầu liên lạc cơ bản, đọc báo mỗi ngày."}]';

localStorage.setItem("list_phone", list_phones);
localStorage.setItem("list_lap", list_laps);
}