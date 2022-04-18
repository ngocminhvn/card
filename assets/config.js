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
const DATA = {
    'name' : 'Minh',
    'note' : 'Founder & Operating at TrumSource.COM',
    'description' : 'KKK chưa nghĩ ra gì hớt chơn',
    'wallet' : [
        {
            'title' : 'Momo', 
            'value' : '0334955115',
        },
        {
            'title' : 'Mbbank', 
            'value' : '0334955115' ,
        },
        {
            'title' : 'Tsr', 
            'value' : '0334955115',
        },
        {
            'title' : 'ZaloPay', 
            'value' : '0334955115',
        },
    ]
};



const json = DATA;
// infomation
const name = json['name'];
const note = json['note'];
const description = json['description'];
// wallet 0
const wallet0 = json['wallet'][0]['title'];
const wallet0_value = json['wallet'][0]['value'];
// wallet 1
const wallet1 = json['wallet'][1]['title'];
const wallet1_value = json['wallet'][1]['value'];
// wallet 2
const wallet2 = json['wallet'][2]['title'];
const wallet2_value = json['wallet'][2]['value'];
// wallet 3
const wallet3 = json['wallet'][3]['title'];
const wallet3_value = json['wallet'][3]['value'];