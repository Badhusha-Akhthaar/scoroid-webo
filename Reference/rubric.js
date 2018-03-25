var div1,div2,div3,div4,maindiv;
var table;
var nextIndex;
var tx1,tx2,l1,l2,label1,label2,label3,label4;
var newRow,button,b1,b2,button2,btn;
var firstCell,firstCellTextarea;
var secondCell,secondCellTextarea;
var thirdCell,thirdCellTextarea;
var fourthCell,fourthCellTextarea;
var tr,tdiv;
var cno,cname,cdes,cmark;

var ad,a,sum=0;
var tot;var j=1;
var num="1",stat="mark",id1;
var Uname,No,no,t;

var database = firebase.database();
var ref = database.ref('ExTable');

function addexercise()
{
  document.getElementById("addex").style.visibility = 'hidden';
    maindiv = document.createElement('div');
  maindiv.setAttribute("id","main");
    maindiv.className = 'a1';
    maindiv.style.width="800px";
    document.getElementsByTagName('body')[0].appendChild(maindiv);


    div1 = document.createElement('div');
    div1.className = 'd1';
    div1.setAttribute("style", "background-color:rgb(155, 216, 216); ");
    maindiv.appendChild(div1);

  l1=document.createElement('label');
    l1.innerHTML="Exercise Number";
    tx1 = document.createElement('textarea');
    tx1.setAttribute('id','ex');
    tx1.style="width: 30px; height: 17px;";

    l2=document.createElement('label');
    l2.innerHTML="Exercise Name";
    tx2 = document.createElement('textarea');
  tx2.setAttribute('rows', '1');
    tx2.setAttribute('id','uname');
    tx2.style="width: 500px; height: 17px;";

    div1.appendChild(l1);div1.appendChild(tx1);
    div1.appendChild(l2);div1.appendChild(tx2);

    div2 = document.createElement('div');
    div2.className = 'd2';
    div2.setAttribute("style", "background-color:rgb(155, 216, 216); ");
    maindiv.appendChild(div2);

    table = document.createElement('table');
  table.setAttribute('id','mytable');
  thead = document.createElement('thead');
  tbody = document.createElement('tbody');
  tbody.setAttribute("id","tablebody")
  nextIndex = table.childNodes.length;
    newRow = document.createElement("TR");

    firstCell = document.createElement("TD");
    label1=document.createElement('label');
    label1.innerHTML="CriteriaNo";
    secondCell=document.createElement("TD");
    label2=document.createElement('label');
    label2.innerHTML="Criteria";
    thirdCell = document.createElement("TD");
    label3=document.createElement('label');
    label3.innerHTML="Rating";
  tdiv=document.createElement("div");
  btn=document.createElement("button");
  btn.innerHTML="+";
    btn.onclick=function()
    {
        set();
    }
    fourthCell = document.createElement("TD");
    label4=document.createElement('label');
    label4.innerHTML="Total Points";
    firstCell.appendChild(label1);
    secondCell.appendChild(label2);
     thirdCell.appendChild(label3);
   thirdCell.appendChild(btn);
     fourthCell.appendChild(label4);

     newRow.appendChild(firstCell);
     newRow.appendChild(secondCell);
     newRow.appendChild(thirdCell);
  newRow.appendChild(fourthCell);
     thead.appendChild(newRow);
     table.appendChild(thead);
     div2.appendChild(table);
     
  addtable();

    div3 = document.createElement('div');
    div3.className = 'd3';
    div3.setAttribute("style", "background-color:rgb(155, 216, 216); ");
    maindiv.appendChild(div3);

    button = document.createElement('button');
    button.innerHTML="+ Criterion";
  button2 = document.createElement('button');
    button2.innerHTML="- Criterion";
    button.onclick=function()
    {
        addtable();
    }
  button2.onclick=function()
  {
    reloader();
  }
  tot=document.createElement('label');
  tot.setAttribute('id',tot);
  tot.innerHTML="Total Mark : ";

  t=document.createElement('input');
    t.setAttribute('id',sum);

    div3.appendChild(button);
  div3.appendChild(button2);
  div3.appendChild(tot);
div3.appendChild(t);

    div4 = document.createElement('div');
    div4.className = 'd4';
    div4.setAttribute("style", "background-color:rgb(155, 216, 216); ");
    maindiv.appendChild(div4);

    b1 = document.createElement('button');
    b1.innerHTML="Cancel";
    b1.onclick=function()
    {
        alert("cancelled and reload !!");
    location.reload();
    }
    b2 = document.createElement('button');
    b2.innerHTML="Create Rubric";
    b2.onclick=function()
    {

        // add ex to Firebase
        user= document.getElementById('uname').value;
    exno= document.getElementById('ex').value;
        ref.child(exno).set({
            Uname: user,
            No: exno
        });

     //add criteria to firebase
   var sum=0;
     tr = table.getElementsByTagName('tr');
     for (var i = 1; i < tr.length; i++)
     {

         td = tr[i].getElementsByTagName('TD');
         var td1 = td[0].childNodes[0].value;
         var td2 = td[1].childNodes[0].value;
         var td3 = td[2].childNodes[0].value;
             var td4 = td[3].childNodes[0].value;
             console.log(td4);
       sum=sum+parseInt(td4);
       console.log(sum);
             ref = database.ref('ExTable');
             ref.child(exno+"/"+td1).set({

             cno: td1,
             cname:td2,
             cdes:td3,
             cmark:td4

             });
         }


        document.getElementById("addex").style.visibility = 'visible';

    ul=document.getElementById("list");
    li=document.createElement("li");
    link=document.createElement("a");

    no=document.getElementById("ex").value;
    console.log(no);

    link.innerText="ExerciseNo: " +no;
    link.setAttribute("href","#")

    li.appendChild(link);
    ul.appendChild(li);
    left.appendChild(ul);

        alert("created!!");
    document.getElementById("main").innerHTML = "";

    }
    div4.appendChild(b1);div4.appendChild(b2);

}
function addtable()
{
  tb=document.getElementById("tablebody");
    newRow = document.createElement("TR");
    firstCell = document.createElement("TD");
    firstCellTextarea = document.createElement("TEXTAREA");
    secondCell = document.createElement("TD");
    secondCellTextarea = document.createElement("TEXTAREA");
  thirdCell = document.createElement("TD");
    thirdCellTextarea = document.createElement("TEXTAREA");
  ad=document.createElement('div');

    fourthCell = document.createElement("TD");
    fourthCellTextarea = document.createElement("TEXTAREA");

    id1=stat.concat(num);
  id=stat.concat(num);
    num++;

    firstCellTextarea.setAttribute("id",id1);
  firstCellTextarea.value=j;
  firstCellTextarea.disabled=true;
    firstCellTextarea.setAttribute("style", "resize: none; width: 100%;");
  j++;
    secondCellTextarea.setAttribute("id",id1);
    secondCellTextarea.setAttribute("style", "resize: none; width: 100%;");

  thirdCellTextarea.setAttribute("id",id1);
    thirdCellTextarea.setAttribute("style", "resize: none; width: 100%;");


    fourthCellTextarea.setAttribute("id",id1);
    fourthCellTextarea.setAttribute("style", "resize: none; width: 100%;");
 

  firstCell.appendChild(firstCellTextarea);
    secondCell.appendChild(secondCellTextarea);
  // thirdCell.appendChild(ad);
    thirdCell.appendChild(thirdCellTextarea);
  fourthCell.appendChild(fourthCellTextarea);

    newRow.appendChild(firstCell);
    newRow.appendChild(secondCell);
    newRow.appendChild(thirdCell);
  newRow.appendChild(fourthCell);
    tb.appendChild(newRow);
    table.appendChild(tb);
    div2.appendChild(table);

}

function reloader()
{
   var s = document.getElementById('mytable');
   if(j>=1)
   {
   s.removeChild(s.lastChild);
   num--;
   j--;
 }
   //var rowCount = table.rows.length;
    if(j==1)
    {
      alert('cannot delete');
      location.reload();
    }

}

function set()
{
  // var i=Math.floor(Math.random()*50);
  // var box;var str="id";
  //   var head=document.createElement("textarea");
  //   str=str.concat(i);
  //   head.setAttribute("id",str);
  //   head.setAttribute("class","form-control");
  //   head.setAttribute("style","width: 50px");
  //
  //   ad.appendChild(head);
  //   i++;

}