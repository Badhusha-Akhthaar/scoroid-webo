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
    div1.setAttribute("class","w3-row-padding");
    var enum_label=document.createElement("label");
    enum_label.innerHTML="Exercise Number";
    var ename_label=document.createElement("label");
    ename_label.innerHTML="Exercise Name";
    var enum_text=document.createElement("input");
    enum_text.setAttribute("type","text");
    enum_text.setAttribute("id","enum");
    enum_text.setAttribute("class","w3-input");
    var ename_text=document.createElement("input");
    ename_text.setAttribute("type","text");
    ename_text.setAttribute("id","ename");
    ename_text.setAttribute("class","w3-input");
    div1.appendChild(enum_label);
    div1.appendChild(enum_text);
    div1.appendChild(ename_label);
    div1.appendChild(ename_text);
    maindiv.appendChild(div1);
//Div2 creation table
    div2.setAttribute("class","w3-responsive");

    var table=document.createElement("table");
    table.setAttribute("class","w3-table-all w3-centered w3-card-4");
    var thead=document.createElement("thead");
    var tbody=document.createElement("tbody");
    tbody.setAttribute("id","data_table");
    var headrow=document.createElement("tr");
    headrow.setAttribute("class","w3-red");
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
    div3.setAttribute("class","w3-row-padding");
    
    var uv=document.createElement("div");
    uv.setAttribute("class","w3-third");
    var uy=document.createElement("div");
    uy.setAttribute("class","w3-third");
    var ux=document.createElement("div");
    ux.setAttribute("class","w3-third");
    

    var newid=document.createElement("input");
    newid.setAttribute("type","text");
    newid.setAttribute("id","new_id");
    newid.setAttribute("placeholder","Criteria Id");
    newid.setAttribute("class","w3-input");
    newid.setAttribute("style","width: 300px;");

    var newname=document.createElement("input");
    newname.setAttribute("type","text");
    newname.setAttribute("id","new_name");
    newname.setAttribute("placeholder","Criteria Name");
    newname.setAttribute("class","w3-input");
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
    newedit.setAttribute("class","w3-btn w3-teal");
    newedit.setAttribute("style","width: 200px;");
    newedit.setAttribute("id","new_button");
    newedit.setAttribute("onclick","add_row();");
    newedit.innerHTML="Add Criteria";

    uv.appendChild(newid);
    uy.appendChild(newname);
    // rowed.appendChild(newrate);   //eidted
    // rowed.appendChild(newpoint);
    ux.appendChild(newedit);
    
    div3.appendChild(uv);
    div3.appendChild(uy);
    div3.appendChild(ux);
    maindiv.appendChild(div3);

//Div4 creation
    div4.setAttribute("class","col-sm-4");
    var maxpoint_label=document.createElement("label");
    maxpoint_label.innerHTML="Total Points    ";
    var maxpoint_text=document.createElement("label");
    var brt=document.createElement("br");
   // maxpoint_text.setAttribute("type","text");
    //maxpoint_text.setAttribute("class","form-control");
    maxpoint_text.setAttribute("id","max");
    div4.appendChild(maxpoint_label);
    div4.appendChild(brt);
    div4.appendChild(maxpoint_text);
    
    
    maindiv.appendChild(div4);

}

function add_row(){

 var new_id=document.getElementById("new_id").value;
 var new_name=document.getElementById("new_name").value;

 var table3=document.getElementById("data_table");
 var table_len=(table3.rows.length);

 //Modal creation
 var htm="<div class='modal fade' id='myModal"+table_len+"' role='dialog'>";
 htm+="<div class='modal-dialog'>";
 htm+="<div class='modal-content'>";
 htm+="<div class='modal-header'>";//header
 htm+="<button class='close' type='button' data-dismiss='modal' onclick='sumall()'>"+"&times;"+"</button>";
 htm+="<h4 class='modal-title'>"+"Modal header"+"</h4>";
 htm+="</div>";                 //header finish
 htm+="<div class='modal-body'>";//body start
 htm+="<p>"+"Descriptive"+"</p>";
 htm+="<button id='Button_"+table_len+"' onclick='ctab("+table_len+")' class='btn btn-success'>"+"<b>"+"+"+"</b>"+"</button>";
  htm+="<button id='Buttondel_"+table_len+"' onclick='ctabs("+table_len+")' class='btn btn-success'>"+"<b>"+"-"+"</b>"+"</button>";
 htm+="<div id='mt'>";//mt start
 htm+="<table class='w3-table-all w3-centered'>";
 htm+="<thead>";
 htm+="<tr>";
 htm+="<td>"+"No."+"</td>";
 htm+="<td>"+"Name"+"</td>";
 htm+="<td>"+"Marks"+"</td>";
 htm+="</tr>";
 htm+="</thead>";
 htm+="<tbody id='Table_"+table_len+"' class='hummer'>"+"</tbody>";
 htm+="</table>";
 htm+="</div>";//mt finish
 htm+="</div>";//body finish
 htm+="<div class='modal-footer'>";//footer start
 htm+="<button type='button' class='btn btn-default' data-dismiss='modal' onclick='sumall()'>"+"Close"+"</button>";
 htm+="</div>"//footer finish
 htm+="</div>"
 htm+="</div>";

 
 //Modal creation end
 var row = table3.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td style='color: #3B3C36;' id='id_row"+table_len+"'>"+new_id+"</td><td style='color: #3B3C36;' id='name_row"+table_len+"'>"+new_name+"</td><td id='rate_row"+table_len+"'><a><span id='g"+table_len+"' class='glyphicon glyphicon-plus-sign' data-toggle='modal' data-target='#myModal"+table_len+"'></span></a>"+htm+"</td><td class='bolt' style='color: #3B3C36;' id='point_row"+table_len+"'>"+'0'+"</td><td><a href='#' id='edit_button"+table_len+"' value='Edit' class='edit  w3-text-teal' onclick='edit_row("+table_len+"); sumall();'><i class='material-icons'>create</i></a> <a href='#' id='save_button"+table_len+"' value='Save' class='save  w3-text-orange' onclick='save_row("+table_len+"); sumall();'><i class='material-icons'>save</i></a><a href='#' value='Delete' class='delete  w3-text-red' onclick='delete_row("+table_len+"); sumall();'><i class='material-icons'>delete</i></a></td></tr>";
 
 document.getElementById("new_name").value="";
 document.getElementById("new_id").value="";



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
// var rate=document.getElementById("rate_row"+no);
 var point=document.getElementById("point_row"+no);

 var id_data=id.innerHTML;
 var name_data=name.innerHTML;
 //var rate_data=rate.innerHTML;
 var point_data=point.innerHTML;

 id.innerHTML="<input class='form-control' type='text' id='id_text"+no+"' value='"+id_data+"'>";
 name.innerHTML="<input class='form-control' type='text' id='name_text"+no+"' value='"+name_data+"'>";
 //rate.innerHTML="<input type='text' id='rate_text"+no+"' value='"+rate_data+"'>";
 // point.innerHTML="<input type='text' id='point_text"+no+"' value='"+point_data+"'>";
}

function save_row(no)
{
 var id_val=document.getElementById("id_text"+no).value;
 var name_val=document.getElementById("name_text"+no).value;
 //var rate_val=document.getElementById("rate_text"+no).value;
 //var point_val=document.getElementById("point_text"+no).value;

 document.getElementById("id_row"+no).innerHTML=id_val;
 document.getElementById("name_row"+no).innerHTML=name_val;
 //document.getElementById("rate_row"+no).innerHTML=rate_val;
 //document.getElementById("point_row"+no).innerHTML=point_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function sumall(){

var sum=0; var y;var total=0;
var z=document.getElementById("max");
var ry=document.getElementById("data_table").rows.length;
var hj=document.getElementsByClassName("hummer");

for(i=0;i<hj.length;i++)
{
    var kn=document.getElementsByClassName("hummer")[i].rows.length;
    sum=0
   // console.log(kn);
    for(j=0;j<kn;j++)
    {
        var hjw=document.getElementsByClassName("hummer")[i].childNodes[j].childNodes[2].childNodes[0].value;
        console.log(hjw);
        sum=sum+parseInt(hjw) ;

    }
    document.getElementsByClassName("bolt")[i].innerHTML=sum;
}

   for(o=0;o<ry;o++)
   {
     var you=document.getElementsByClassName("bolt")[o].innerHTML;
     total=total+parseInt(you);
     z.innerHTML=total;
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
 
 var gf=document.getElementById("Table_"+no);
 var crow=document.createElement("tr");
 var cd1=document.createElement("td");
 var cd2=document.createElement("td");
 var cd3=document.createElement("td");

 var dd1=document.createElement("input");
 dd1.setAttribute("class","form-control");
dd1.setAttribute("style","width: 100px; height: 60px;");
 dd1.setAttribute("type","number");

  var dd2=document.createElement("textarea");
 dd2.setAttribute("class","form-control");
 dd2.setAttribute("style","width: 250px; height: 60px;");
 dd2.setAttribute("type","text");
 
  var dd3=document.createElement("input");
 dd3.setAttribute("class","form-control");
dd3.setAttribute("style","width: 100px; height: 60px;");
 dd3.setAttribute("type","number");
 cd1.appendChild(dd1);
 cd2.appendChild(dd2);
 cd3.appendChild(dd3);
 crow.appendChild(cd1);
 crow.appendChild(cd2);
 crow.appendChild(cd3);
 gf.appendChild(crow);
}
function ctabs(no){
    var gf=document.getElementById("Table_"+no);
    gf.removeChild(gf.lastChild);


}