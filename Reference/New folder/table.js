var cno;
var cname;
var cmark;
var ref;

var database = firebase.database();

function AddMatrix() {
    row=new Array();
    cell=new Array();
    row_num=document.getElementById("noofrows").value;
    cell_num=3;
    tab=document.createElement('table');
    tab.setAttribute('id','newtable');
    tab.setAttribute('class','table table-responsive table-condensed')
    tbo=document.createElement('tbody');
    for(c=0;c<row_num;c++){
        row[c]=document.createElement('tr');
        row[c].TagName="tr";
        for(k=0;k<cell_num;k++) {
            cell[k]=document.createElement('td');
            cell[k].TagName="td";
            var input = document.createElement("input");
            
            input.type = "text";

            input.name = 'node'+c+','+k;
            input.value=" ";
            input.setAttribute('class','node form-control');
            cell[k].appendChild(input);
            row[c].appendChild(cell[k]);
        }
        tbo.appendChild(row[c]);
    }
    tab.appendChild(tbo);
    document.getElementById('mytable').appendChild(tab);
}

function show1()
{
 var tblData = new Array();
var table = document.getElementById("newtable");
var sele =  document.getElementById("sel1");
var i;
var txt;
var txt2;
tr = table.getElementsByTagName('tr');
for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td');
    var td1 = td[1].childNodes[0].value;
    var td2 = td[2].childNodes[0].value;
    var td3 = td[3].childNodes[0].value;
    var selec=sele.value;
database = firebase.database();
 var ref = database.ref('ExTable');

    ref.child(selec+"/"+td1).set({

    cno: td1,
    cname:td2,
    cmark:td3

    });
  }// for end

//window.location.reload();
}


//deleted
function delchild()
{

  alert("inside!");
  database = firebase.database();
   var ref = database.ref('ExerciseTable/CriteriaTable');
var delno=document.getElementById("t1").value;

     ref.orderByChild('cno').equalTo(delno)
       .once('value').then(function(snapshot) {
           snapshot.forEach(function(childSnapshot) {
           //remove each child
           alert("go!");
           ref.child(childSnapshot.key).remove();
           alert("deleted !!");
       });
   });
}
