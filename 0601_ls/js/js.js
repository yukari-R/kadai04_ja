//1.Save クリックイベント

$("#save").on("click", function click(){
    const key = $("#time").val();
    // コンソールログを使ってKeyの中身をチェックする
    console.log(key,"keyの中身");
    
    const value1 =$("#memo").val();
    console.log(value1,"value1の中身");

    const value2 =$("#number").val();
    console.log(value2,"value2の中身");

    const datalist = {
        value1,
        value2,
    }

    localStorage.setItem(key,JSON.stringify(datalist));

    // 画面上に表示してみる

    const result = JSON.parse(localStorage.getItem(key));
    console.log(result);
    console.log(value1);
    console.log(value2);

    const html = `
    <tr>
        <th>${key}</th>
        <td>${value1}　　／　　${value2}  g</td>
    </tr>`

    $("#list").append(html)

    $("#date").val("");
    $("#time").val("");
    $("#memo").val("");
    $("#number").val("");

    return{
        value1,
        value2,
    };

})


//2.clear クリックイベント
$("#clear").on("click", function clear(){
    localStorage.clear();
    $("#list").empty();
})

//3.ページ読み込み：保存データ取得表示
for(let i=0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const result = JSON.parse(localStorage.getItem(key));
    const first = result["value1"];
    const last =result["value2"];

const html = `
    <tr>
        <th>${key}</th>
        <td>${first}　　／　　${last}  g</td>
    </tr>`

    $("#list").append(html);

const sum = + Number(result["value2"])
console.log(sum,"合計");

if(sum > 180){
    alert("目安を上回っています！");
}else if(sum > 150){
    alert("そろそろ気をつけよう！");
}}
