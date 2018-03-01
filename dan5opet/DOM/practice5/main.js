function makeDropDown(arr, node) {
    var select = document.createElement('select');

    for (var i = 0; i < arr.length; i++) {
        var text = document.createTextNode(arr[i]);
        var option = document.createElement("option");
        option.appendChild(text);
        select.appendChild(option);
    }
    node.appendChild(select);
}

makeDropDown(["text1", "text2", "text3"], document.querySelector('div'));
makeDropDown(["text1", "text2", "text3"], document.querySelectorAll('div')[1]);

