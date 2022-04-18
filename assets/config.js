/**
 * Name: Profile Card
 * @auth: NgocMinhIT
 * Time: 18-04-2022
 * Cấm xóa dcmm
**/

function copy(element) 
{
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    Swal.fire("Thông báo", "Copy thành công!", "success");
}
