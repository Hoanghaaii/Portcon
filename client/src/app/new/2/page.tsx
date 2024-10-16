import Image from 'next/image';
import React from 'react';

const Company = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}

        {/* About Section */}
        <section className="mb-20 space-y-4">
          <h2 className="text-blue-900 font-bold text-4xl text-center">DỊCH VỤ VẬN TẢI ĐƯỜNG BỘ. ƯU VÀ NHƯỢC ĐIỂM</h2>
          <p className="flex justify-end text-blue-900 text-opacity-60">Author: Minh An</p>
          <Image src={'/new2.jpg'} alt='new' width={10000} height={10000}></Image>
          <h1 className="text-blue-900 font-semibold text-2xl my-5">1. Vận tải đường bộ: Ưu nhược điểm</h1>
          
          <div className="mb-10">
            <h2 className="text-blue-900 font-semibold text-xl my-3">1.1. Ưu điểm</h2>
            <p className="text-blue-900">
              Phương thức vận chuyển hàng hóa bằng đường bộ được nhiều khách hàng lựa chọn bởi những ưu điểm dưới đây:
              <ul>
                <li>- Linh hoạt khi vận chuyển, vẫn có thể dễ dàng thay đổi lộ trình theo tuyến đường ngắn nhất mà không ảnh hưởng đến thời gian giao hàng.</li>
                <li>- Phương tiện vận chuyển đa dạng.</li>
                <li>- Thời gian vận chuyển hàng hóa nhanh hơn so với đường sắt và đường biển.</li>
                <li>- Đảm bảo an toàn và tiết kiệm chi phí.</li>
              </ul>
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-blue-900 font-semibold text-xl my-3">1.2. Nhược điểm</h2>
            <p className="text-blue-900">
              - Phát sinh thêm phí phụ thu trên các tuyến đường dài.
              <br />
              - Có thể gặp rủi ro trong quá trình vận chuyển như tai nạn giao thông, kẹt xe, thời tiết xấu.
              <br />
              - Cước phí vận chuyển có thể khá cao cho hàng hóa có khối lượng lớn.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-blue-900 font-semibold text-2xl my-5">2. Các loại hàng hóa vận chuyển bằng đường bộ</h1>
            <h2 className="text-blue-900 font-semibold text-xl my-3">2.1. Hàng Container</h2>
            <p className="text-blue-900">
              Đây được xem là một trong những đơn vị vận tải được sử dụng rộng rãi, phổ biến nhất hiện nay. Container là một khối hộp được làm từ hợp chất kim loại có độ bền cao, có kích thước đa dạng và chuẩn hóa theo thông số nhất định.
            </p>
            <h2 className="text-blue-900 font-semibold text-xl my-3">2.2. Hàng lạnh</h2>
            <p className="text-blue-900">
              Hàng lạnh cũng sẽ được vận chuyển bằng container. Tuy nhiên, nó có điểm khác biệt với hàng container đó chính là nó được chuyên chở bằng container chuyên dụng có cài đặt sẵn nhiệt độ theo tiêu chuẩn để phù hợp với việc bảo quản hàng hóa.

              Hàng lạnh sẽ bao gồm hai mặt hàng chủ yếu là hàng mát và hàng đông lạnh. Trong đó, hàng mát chỉ cần bảo quản trong điều kiện nhiệt độ thấp vừa phải, còn hàng đông lạnh thì đòi hỏi phải bảo quản ở nhiệt độ thấp hơn nữa.

              Sau khi hàng lạnh được chuyển lên container sẽ được vận chuyển bằng xe đầu kéo hoặc xe tải.
            </p>
            <h2 className="text-blue-900 font-semibold text-xl my-3">2.3. Hàng siêu trường siêu trọng </h2>
            <p className="text-blue-900">
              Đây là những loại hàng hóa có khối lượng cũng như kích thước lớn như: Máy móc, thiết bị nông nghiệp, công trình,… Đối những mặt hàng này, các phương tiện vận chuyển đường bộ thường sử dụng là các loại xe tải, xe đầu kéo chuyên dùng.

              Để có thể bốc dỡ được mặt hàng siêu trường siêu trọng thì cần phải có các thiết bị lớn như xe nâng, xe cẩu có công suất lớn.
            </p>
          </div>
          <h2 className="text-blue-900 font-semibold text-xl my-3">2.4. Các loại thủy hải sản tươi sống</h2>
          <p className="text-blue-900">
            Với các loại hàng thủy sản tươi sống thì việc vận chuyển đường bộ đòi hỏi phải được bảo quản trong điều kiện nhiệt độ phù hợp để có thể giữ độ tươi sống. Thông thường, phương tiện chuyên dùng để chuyên chở loại mặt hàng này là các loại xe container, xe tải đông lạnh.
          </p>
          <h2 className="text-blue-900 font-semibold text-xl my-3">2.5. Hàng hóa dễ vỡ</h2>
          <p className="text-blue-900">
            Các loại mặt hàng như: Gốm sứ, thủy tinh, hàng nguyên xe, các loại hóa chất,… sẽ rất dễ bị vỡ nếu có sự tác động mạnh về vật lý. Để vận chuyển các loại mặt hàng này một cách an toàn, trước hết cần phải đóng gói kỹ càng, sau đó sẽ được vận chuyển bằng các loại xe ô tô chuyên dùng.
          </p>
          <h2 className="text-blue-900 font-semibold text-xl my-3">2.6. Hàng nông sản</h2>
          <p className="text-blue-900">
            Các mặt hàng nông sản khi vận chuyển cần đảm bảo bảo quản đầy đủ về nhiệt độ lẫn độ ẩm. Bởi những mặt hàng này khi để nhiệt độ quá cao hoặc quá thấp sẽ dễ bị hư hỏng. Độ ẩm cũng cần được điều chỉnh ở nhiệt độ phù hợp tránh ảnh hưởng đến chất lượng hàng. Khi vận chuyển hàng, cần chú ý cẩn thận tránh va đập mạnh gây dập nát, hư hỏng hàng.
          </p>
          <div className="mb-10">
            <h1 className="text-blue-900 font-semibold text-2xl my-5">3. Cước phí dịch vụ vận chuyển đường bộ</h1>
            <p className="text-blue-900">
              Cước phí được tính tùy thuộc vào tải trọng xe, loại xe và quãng đường giao nhận. 
              Tùy thuộc vào mặt hàng và khối lượng hàng hóa, doanh nghiệp có thể đưa ra phương thức vận tải phù hợp.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-blue-900 font-semibold text-2xl my-5">4. Quy trình vận chuyển hàng hóa bằng đường bộ</h1>
            <p className="text-blue-900">
              Bước 1: Tiếp nhận thông tin từ khách hàng.
              <br />
              Bước 2: Báo giá chi tiết.
              <br />
              Bước 3: Điều phối xe phù hợp.
              <br />
              Bước 4: Vận chuyển hàng hóa đến địa chỉ người nhận.
              <br />
              Bước 5: Thu cước phí vận chuyển.
            </p>
          </div>

          <div className="mb-10">
  <h1 className="text-blue-900 font-semibold text-2xl my-5">5. Lưu ý vận chuyển hàng hóa bằng đường bộ</h1>
  <p className="text-blue-900">
    Khi sử dụng dịch vụ vận tải đường bộ, khách hàng cần chú ý một số điểm dưới đây:
  </p>
  <h2 className="text-blue-900 font-semibold text-xl my-3">5.1. Đối với tải trọng hàng hóa</h2>
  <p className="text-blue-900">
    Trước khi vận chuyển những loại hàng hóa thì bên khách hàng lẫn bên vận chuyển cần tham khảo Thông tư số 46/2015/TT-BGTVT của bộ GTVT về:
    <br />
    Quy định về tải trọng, khổ giới hạn của đường bộ, lưu hành xe quá tải trọng, xe quá khổ giới hạn, xe bánh xích trên đường bộ, vận chuyển hàng siêu trường, siêu trọng, giới hạn xếp hàng hóa trên phương tiện giao thông đường bộ khi tham gia giao thông đường bộ.
    <br />
    Trong đó, tổng trọng lượng xe sẽ bao gồm trọng lượng của xe và hàng hóa có trên xe. Tải trọng sẽ bao gồm tải trọng hàng hóa, tải trọng trục xe và tải trọng cầu đường bộ.
  </p>
  <h2 className="text-blue-900 font-semibold text-xl my-3">5.2. Đối với phương tiện vận chuyển</h2>
  <p className="text-blue-900">
    Để tối ưu được chi phí cũng như tránh những rủi ro phát sinh thì khách hàng cần cân nhắc để thuê các phương tiện vận tải phù hợp với khối lượng và kích thước của hàng hóa.
  </p>
  <h2 className="text-blue-900 font-semibold text-xl my-3">5.3. Đối với quy cách đóng gói hàng hóa</h2>
  <p className="text-blue-900">
    Để tránh hàng hóa bị hư hỏng, gặp sự cố trong lúc vận chuyển thì đòi hỏi phải đóng gói sản phẩm cẩn thận tùy vào từng mặt hàng khác nhau.
  </p>
  <h2 className="text-blue-900 font-semibold text-xl my-3">5.4. Ghi đúng thông tin người nhận</h2>
  <p className="text-blue-900">
    Bên người gửi cần cung cấp chính xác thông tin của người nhận hàng cho bên đơn vị vận chuyển để quá trình vận chuyển hàng hóa diễn ra suôn sẻ, tránh xảy ra tình trạng chậm trễ hàng hóa.
  </p>
  <h2 className="text-blue-900 font-semibold text-xl my-3">5.5. Lựa chọn đơn vị vận chuyển đường bộ uy tín</h2>
  <p className="text-blue-900">
    Hiện nay trên thị trường xuất hiện nhiều đơn vị vận chuyển đường bộ. Do đó, khách hàng cần tìm hiểu kỹ thông tin để lựa chọn đơn vị uy tín, đảm bảo được chất lượng hàng hóa. Đồng thời, các đơn vị vận chuyển nên thực hiện cam kết về thời gian vận chuyển và bảo hành hàng hóa nếu có rủi ro phát sinh.
  </p>
</div>




        </section>
      </div>
    </div>
  );
};

export default Company;
