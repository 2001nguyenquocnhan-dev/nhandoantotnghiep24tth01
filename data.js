const danhSachHoa = [
  {
    id: 1,
    name: "Mì Hảo Hảo Tôm Chua Cay",
    price: 4500,
    category: "thuc_pham_kho",
    img: "./image/anhmi.jpg",
    description: "Mì ăn liền quốc dân, hương vị tôm chua cay đặc trưng.",
    ingredients: "Bột mì, tôm, gia vị chua cay"
  },
  {
    id: 2,
    name: "Sữa tươi TH True Milk 110ml",
    price: 8000,
    category: "sua_uong",
    img: "./image/sữa.jpg",
    description: "Sữa tươi tiệt trùng nguyên chất từ trang trại TH.",
    ingredients: "100% sữa bò tươi"
  },
  {
    id: 3,
    name: "Dầu ăn Tường An 1L",
    price: 45000,
    category: "gia_vi",
    img: "./image/dau.jpg",
    description: "Dầu thực vật tinh luyện, tốt cho tim mạch.",
    ingredients: "Dầu nành, dầu olein"
  },
  {
    id: 4,
    name: "Nước mắm Nam Ngư 750ml",
    price: 38000,
    category: "gia_vi",
    img: "./image/nuocmam.jpg",
    description: "Vị ngon hài hòa, đậm đà truyền thống.",
    ingredients: "Cá cơm, muối, nước"
  },
  {
    id: 5,
    name: "Bột giặt OMO Comfort 800g",
    price: 42000,
    category: "hoa_my",
    img: "./image/omo.jpg",
    description: "Xoáy bay vết bẩn cứng đầu, hương thơm bền lâu.",
    ingredients: "Chất hoạt động bề mặt, hương Comfort"
  },
  {
    id: 6,
    name: "Nước rửa chén Sunlight Chanh 400g",
    price: 15000,
    category: "hoa_my",
    img: "./image/nuoc.jpg",
    description: "Sạch bóng dầu mỡ với chiết xuất chanh tươi.",
    ingredients: "Chiết xuất chanh, chất tẩy rửa"
  },
  {
    id: 7,
    name: "Coca Cola lon 320ml",
    price: 10000,
    category: "sua_uong",
    img: "./image/coca.jpg",
    description: "Nước giải khát có gas hương vị cola truyền thống.",
    ingredients: "Nước bão hòa CO2, đường, màu caramel"
  },
  {
    id: 8,
    name: "Gạo ST25 túi 5kg",
    price: 185000,
    category: "Thực phẩm khô",
    img: "./image/gao.jpg",
    description: "Gạo ngon nhất thế giới, hạt dài, thơm dẻo.",
    ingredients: "100% gạo sạch"
  },
  {
    id: 9,
    name: "Trứng gà ta (Vỉ 10 quả)",
    price: 32000,
    category: "Thực phẩm tươi",
    img: "./image/trung.jpg",
    description: "Trứng tươi mới mỗi ngày, giàu dinh dưỡng.",
    ingredients: "Trứng gà tươi"
  },
  {
    id: 10,
    name: "Snack khoai tây Lay's 54g",
    price: 12000,
    category: "Ăn vặt",
    img: "./image/khoai.jpg",
    description: "Khoai tây cắt lát mỏng, giòn tan vị tự nhiên.",
    ingredients: "Khoai tây tươi, dầu thực vật"
  },
  {
    id: 11,
    name: "Bánh quy Cosy Kinh Đô",
    price: 25000,
    category: "Ăn vặt",
    img: "./image/banh.jpg",
    description: "Bánh quy bơ thơm ngon, bổ sung năng lượng.",
    ingredients: "Bột mì, đường, bơ"
  },
  {
    id: 12,
    name: "Dầu gội Clear thảo dược 180g",
    price: 55000,
    category: "hoa_my",
    img: "./image/clear.jpg",
    description: "Sạch gàu nuôi dưỡng da đầu từ thảo dược.",
    ingredients: "9 loại thảo dược quý"
  },
  {
    id: 13,
    name: "Kem đánh răng P/S ngừa sâu răng",
    price: 28000,
    category: "hoa_my",
    img: "./image/kem.jpg",
    description: "Bảo vệ răng miệng 24/7 với canxi và Flour.",
    ingredients: "Canxi, Flour, khoáng chất"
  },
  {
    id: 14,
    name: "Nước suối Aquafina 500ml",
    price: 5000,
    category: "sua_uong",
    img: "./image/nuoc1.jpg",
    description: "Nước uống tinh khiết qua hệ thống lọc hoàn hảo.",
    ingredients: "Nước tinh khiết"
  },
  {
    id: 15,
    name: "Tương ớt Chinsu 250g",
    price: 14000,
    category: "gia_vi",
    img: "./image/tuong.jpg",
    description: "Vị cay đậm đà, màu sắc tự nhiên hấp dẫn.",
    ingredients: "Ớt tươi, tỏi, gia vị"
  },
  {
    id: 16,
    name: "Hạt nêm Knorr 400g",
    price: 35000,
    category: "gia_vi",
    img: "./image/hat.jpg",
    description: "Chiết xuất từ thịt thăn và xương ống.",
    ingredients: "Thịt, xương ống, muối, đường"
  },
  {
    id: 17,
    name: "Xà bông cục Lifebuoy Đỏ",
    price: 16000,
    category: "hoa_my",
    img: "./image/xa.jpg",
    description: "Bảo vệ khỏi vi khuẩn, sạch sâu lỗ chân lông.",
    ingredients: "Chất kháng khuẩn, tinh chất bạc hà"
  },
  {
    id: 18,
    name: "Giấy vệ sinh Hà Nội (Cuộn không lõi)",
    price: 65000,
    category: "Đồ gia dụng",
    img: "./image/giay.jpg",
    description: "Giấy mềm mại, dai, trắng tự nhiên.",
    ingredients: "100% bột giấy nguyên chất"
  },
  {
    id: 19,
    name: "Băng vệ sinh Diana Siêu Thấm",
    price: 22000,
    category: "sua_uong",
    img: "./image/ve.jpg",
    description: "Mặt lưới siêu thấm, khô thoáng tức thì.",
    ingredients: "Bông, hạt siêu thấm"
  },
  {
    id: 20,
    name: "Cà phê G7 3in1 (Bịch 20 gói)",
    price: 58000,
    category: "sua_uong",
    img: "./image/caphe.jpg",
    description: "Hương vị cà phê đậm đà, đúng chất sành điệu.",
    ingredients: "Cà phê, đường, bột kem"
  }
];