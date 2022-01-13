### Usecallback?
```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```
trả về một  [memoized](https://en.wikipedia.org/wiki/Memoization) callback.
- Nhận vào 2 tham số: 1 là function, 2 là dependencies.
- Return memoized callback
- Chỉ tạo ra function mới khi dependencies thay đổi.
- Nếu dùng empty dependencies thì không bao giờ tạo ra function mới.

### UseMemo?
- Nhận vào 2 tham số: 1 là function, 2 là dependencies.
- Return memoized value
- Chỉ tạo ra function mới khi dependencies thay đổi.
- Nếu dùng empty dependencies thì không bao giờ tạo ra function mới.
```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
### useCallback và useMemo
** GIỐNG NHAU **
Đều áp dụng kĩ thuật memoization.
Đều nhận vào 2 tham số: function và dependencies.
Đều là react hooks, dùng cho functional component.
Dùng để hạn chế những lần re-render dư thừa (micro improvements).

** Khác nhau **

| useCallback  | useMemo|
| ------:| -----------:|
| trả về memoized hàm  | trả về memoized giá trị |

### Có nên sử dụng useCallback() vs useMemo() hay không?
Không nên dùng cho tất cả components.
Nên dùng cho: đồ thị, biểu đồ, animations, những component nặng phần render.
Chỉ là micro improvements.


tham khảo từ https://www.youtube.com/watch?v=quS95gJdxsc&t=448s