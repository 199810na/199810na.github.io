var parentElement = document.getElementById('ochreTableBody');

var url = "https://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300";

function loadXML() {
    // Chain the next function for XHR (XML HTTP request)
    XMLrequest(url);
    console.log('loadXML -- ok');
}

function XMLrequest(link) {
    // Make the call and send the result to the next function
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            listTexts(this.responseXML);
        }
    };
    connect.open('GET', link, true);
    connect.send();
    console.log('XML request -- ok');
}

function listTexts(sourceXML) {
    // Select, parse, display
    console.log(sourceXML);
    var textList = sourceXML.getElementsByTagName('text');
    console.log(textList);
    for (var i = 0; i < textList.length; i++) {
        var tr = document.createElement('tr');
        tr.setAttribute('class', 'ochreTableRows');
        tr.setAttribute('id', 'row_' + i);
        parentElement.appendChild(tr);

        var td = document.createElement('td');
        td.setAttribute('id', 'td_name_' + i);
        td.textContent = textList[i].children[0].children[0].innerHTML;
        document.getElementById('row_' + i).appendChild(td);

        var td2 = document.createElement('td');
        td2.setAttribute('id', 'td_description_' + i);
        td2.textContent = textList[i].children[3].innerHTML;
        document.getElementById('row_' + i).appendChild(td2);
    }
}