var tbody = document.querySelector("#table tbody");

function taoSV() {
    function formatString(str) {
        var strArray = str.toLowerCase().split(" ");
        for (var i = 0; i < strArray.length; i++) {
            strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
        }
        return strArray.join(" ");
    }

    let ten = formatString(prompt("nhập tên"))
    let nam = prompt("nhập năm sinh")
    let gt = formatString(prompt("nhập giới tính"))
    let que = formatString(prompt("nhập quê quán"))
    let xoa = false;

    return {
        ten,
        nam,
        gt,
        que,
        xoa
    }
}

let dssv = []

function themSV(sv) {
    var newRow = document.createElement("tr")

    newRow.innerHTML = `<td>${sv.ten}</td>
        <td>${sv.nam}</td>
        <td>${sv.gt}</td>
        <td>${sv.que}</td>
        <td><input type="checkbox" name="clear" style="display:none;"></td>`

    tbody.appendChild(newRow)
}

var add = document.getElementById("addStudent")
add.addEventListener('click', function () {
    const sv = taoSV(); dssv.push(sv)
    themSV(sv)
})

var delt = document.getElementById("deleteStudent"), click = 0
delt.addEventListener('click', function () {
    click++
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name="clear"]');
    checkboxes.forEach(function (checkbox, i) {
        checkbox.style.display = "block";
        checkbox.addEventListener('click', function () {
            if (this.checked) {
                // console.log("da xoa", i)
                dssv[i].xoa = true;
            } else {
                // console.log("da ---xoa", i)
                dssv[i].xoa = false;
            }
        });
    });
    dssv = dssv.filter((a) => {
        return !a.xoa
    })
    if (click == 2) {
        tbody.innerHTML = ''
        click = 0
        dssv.forEach((sv) => {
            themSV(sv)
        })
    }
})
