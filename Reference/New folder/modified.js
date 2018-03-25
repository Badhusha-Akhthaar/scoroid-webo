//variables
var num=1;
var ids=1;var nid="stat";var frow=1;var hg=1;var hj=1;
var one="no";var two="name";var three="rate";var four="button";
    var u=0;
function addex(){

    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var div4=document.createElement("div");
//Div1 creation 
    div1.setAttribute("class","form-inline")
    var enum_label=document.createElement("label");
    enum_label.innerHTML="Exercise Number";
    var ename_label=document.createElement("label"); 
    ename_label.innerHTML="Exercise Name";
    var enum_text=document.createElement("input");
    enum_text.setAttribute("type","text");
    enum_text.setAttribute("id","enum");
    enum_text.setAttribute("class","form-control");
    var ename_text=document.createElement("input");
    ename_text.setAttribute("type","text");
    ename_text.setAttribute("id","ename");
    ename_text.setAttribute("class","form-control");
    div1.appendChild(enum_label);
    div1.appendChild(enum_text);
    div1.appendChild(ename_label);
    div1.appendChild(ename_text);
    maindiv.appendChild(div1);
//Div2 creation table
    var table=document.createElement("table");
    table.setAttribute("class","table table-bordered")
    var thead=document.createElement("thead");
    var tbody=document.createElement("tbody"); 
    tbody.setAttribute("id","data_table")
    var headrow=document.createElement("tr");

    var crino=document.createElement("td");
    crino.innerHTML="Criteria Number";
    var criname=document.createElement("td");
    criname.innerHTML="Criteria Name";
    var rating=document.createElement("td");
    rating.innerHTML="Rating";
    var points=document.createElement("td");  
    points.innerHTML="Marks";
    var editable=document.createElement("td");
    editable.innerHTML="Edit/Delete";

    headrow.appendChild(crino);
    headrow.appendChild(criname);
    headrow.appendChild(rating);
    headrow.appendChild(points);
    headrow.appendChild(editable);
    thead.appendChild(headrow);
    table.appendChild(thead);
    table.appendChild(tbody);
    div2.appendChild(table);
    maindiv.appendChild(div2);
    
//Div3 creation
    var table2=document.createElement("table")

    table2.setAttribute("class","table table-responsive");
    table2.setAttribute("id","details");
    var rowed=document.createElement("tr");

    var newid=document.createElement("input");
    newid.setAttribute("type","text");
    newid.setAttribute("id","new_id");
    newid.setAttribute("placeholder","Criteria Id");
    newid.setAttribute("class","form-control");
    newid.setAttribute("style","width: 300px;");

    var newname=document.createElement("input");
    newname.setAttribute("type","text");
    newname.setAttribute("id","new_name");
    newname.setAttribute("placeholder","Criteria Name");
    newname.setAttribute("class","form-control");
    newname.setAttribute("style","width: 270px;");
    


//     var newrate=document.createElement("a");
//     var nope=document.createElement("span");
//     nope.setAttribute("class","glyphicon glyphicon-plus-sign");
//     newrate.setAttribute("id","new_rate");
//     newrate.appendChild(nope);
//     // newrate.setAttribute("placeholder","Enter Maximum Marks");
//     // newrate.setAttribute("class","form-control");
//     newrate.setAttribute("style","width: 150px;");



// // //newly added


//   // //newly added

//     var newpoint=document.createElement("input");
//     newpoint.setAttribute("type","text");
//     newpoint.setAttribute("placeholder","Total Marks");
//     newpoint.setAttribute("id","new_point");
//     newpoint.setAttribute("class","form-control");
//     newpoint.setAttribute("style","width: 150px;");

    var newedit=document.createElement("button");
    newedit.setAttribute("class","btn btn-danger");
    newedit.setAttribute("style","width: 200px;");
    newedit.setAttribute("id","new_button");
    newedit.setAttribute("onclick","add_row(); sumall();");
    newedit.innerHTML="Add Criteria";

    rowed.appendChild(newid);
    rowed.appendChild(newname);
    // rowed.appendChild(newrate);   //eidted
    // rowed.appendChild(newpoint);
    rowed.appendChild(newedit);
    table2.appendChild(rowed);
    div3.appendChild(table2);
    div3.setAttribute("class","form-inline");
    maindiv.appendChild(div3);

//Div4 creation
    div4.setAttribute("class","col-sm-4");
    var maxpoint_label=document.createElement("label");
    maxpoint_label.innerHTML="Total Points";
    var maxpoint_text=document.createElement("input");
    maxpoint_text.setAttribute("type","text");
    maxpoint_text.setAttribute("class","form-control");
    maxpoint_text.setAttribute("id","max");
    div4.appendChild(maxpoint_label);
    div4.appendChild(maxpoint_text);
    maindiv.appendChild(div4);

}

function add_row(){

 var new_id=document.getElementById("new_id").value;
 var new_name=document.getElementById("new_name").value;
 // var new_rate=document.getElementById("new_rate").value;
 // var new_point=document.getElementById("new_point").value;

  
 var table3=document.getElementById("data_table");
 var table_len=(table3.rows.length);
 u=0;
 var row = table3.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='id_row"+table_len+"'>"+new_id+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='rate_row"+table_len+"'><a><span id='g"+table_len+"' class='glyphicon glyphicon-plus-sign' onclick='ctab("+table_len+")'></span></a><table id='t"+table_len+"'></table></td><td id='point_row"+table_len+"'>"+'0'+"</td><td><a id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+"); sumall();'><span class='glyphicon glyphicon-pencil'></span></a> <a id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+"); sumall();'><span class='glyphicon glyphicon-ok'></span> </a><a value='Delete' class='delete' onclick='delete_row("+table_len+"); sumall();'><span class='glyphicon glyphicon-trash'></span></a></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_id").value="";
 document.getElementById("new_rate").value="";
 document.getElementById("new_point").value="";


}
function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
 var id=document.getElementById("id_row"+no); 
 var name=document.getElementById("name_row"+no);
 var rate=document.getElementById("rate_row"+no);
 var point=document.getElementById("point_row"+no);
 
 var id_data=id.innerHTML; 
 var name_data=name.innerHTML;
 var rate_data=rate.innerHTML;
 var point_data=point.innerHTML;
 
 id.innerHTML="<input type='text' id='id_text"+no+"' value='"+id_data+"'>"; 
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 rate.innerHTML="<input type='text' id='rate_text"+no+"' value='"+rate_data+"'>";
 point.innerHTML="<input type='text' id='point_text"+no+"' value='"+point_data+"'>";
}

function save_row(no)
{
 var id_val=document.getElementById("id_text"+no).value;
 var name_val=document.getElementById("name_text"+no).value;
 var rate_val=document.getElementById("rate_text"+no).value;
 var point_val=document.getElementById("point_text"+no).value;

 document.getElementById("id_row"+no).innerHTML=id_val;
 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("rate_row"+no).innerHTML=rate_val;
 document.getElementById("point_row"+no).innerHTML=point_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function sumall(){

var sum=0; var y;
var z=document.getElementById("max");
y=document.getElementById("data_table").rows.length;
if(y==0){z.value=0;}
for(var i=0;i<y;i++)
{
var x = document.getElementById("data_table").rows[i].childNodes[3].innerHTML;
sum=sum+parseInt(x);
z.value=sum;

}
}

function addtext(){


    var h=document.getElementById("fort");
    var nan=document.createElement("input");
    nan.setAttribute("type","text");
    nan.setAttribute("id",hg);
    nan.setAttribute("class","form-control");
    nan.setAttribute("placeholder","Enter Mark");
    h.appendChild(nan);
    hg++;
}

function ctab(no){
 
 var tab=document.createElement("tr");
 var inp=document.createElement("input")
 inp.setAttribute("id","["+no+u+"]")
 inp.setAttribute("type","number");
 var idf=document.getElementById("t"+no);
 tab.appendChild(inp);


//Modal code from here

//end

 u++;
 idf.appendChild(tab);
}
