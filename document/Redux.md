### Tìm hiểu về Redux?
#### Redux là gì?
Redux là một thư viện để quản lý và cập nhật state, state có thể dự đoán được.
A state management system for cross-component or app-wide state
#### What Is Cross-Component / App-Wide State?
|Local State  |Cross-Component State  |App-Wide State|
|--|--|--|
| cho một components duy nhất|Cho nhiều components|Hầu hết tất cả component| 
|Ex: userinput|Ex. giỏ hàng |Ex. Info user..| 
|useState(), useReducer()|React Context or Redux|React Context or Redux| 
#### Cơ chế hoạt động redux?
![enter image description here](https://images.viblo.asia/3ba0e90f-1834-45b1-a5ab-a6f58abf21a0.gif)
Hoạt theo một chiều :

Ban đầu co 1 state khởi tạo cho store này được đẩy lên trên UI(View), ví dụ có một hành động bấm deposit nó chạy lên actions -> dispatcher vào store trong store có Reducer nó nhận vào 2 thứ, state hiện tại và thông tin actions được gửi lên đây tạo và biến đổi từ state cũ ra state mới,  
#### React context và redux?
Như chúng ta đã biết React context cũng quản lý các state áp dụng cho nhiều coponents toàn app được như redux, vậy tại sao cần redux ?
Bởi vì redux có vài nhược điểm tìm ẩn đối với các app nhở và vừa thì nó không có vấn đề, còn đối với các app lớn, sử dụng nhiều context để quản lý mang lại hiệu suất không tốt.

  + Khi nào cần dùng Redux.
  + Dữ liệu ở nhiều nơi
  + Có hổ trợ undo/ Redo
  + Cần cache dữ liệu tái sử dụng cho lần sau.
  

> Không nhất thiết dùng Redux, nếu app bạn chạy ổn, Redux không chỉ dược dùng với React js mà dùng với nhiều thư viện js khác nữa
