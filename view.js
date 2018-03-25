var disp=sessionStorage.viewCode;
var username=sessionStorage.viewMam;
var database = firebase.database();
var ref,y=0;
var rollnumber=sessionStorage.rolnumber;
console.log(rollnumber);
ref = database.ref(username+"/course/"+disp+"/ExerciseTable");
ref.on('value',gotEx,errData);
  function gotEx(datu)
  {
      console.log(username);
      console.log(disp);

      try{
      var ex=datu.val();
      var sa=Object.keys(ex);
      var s=sa.length;
      var listx=document.getElementById("listx");

      for(j=0;j<s;j++)
      {
          var k=sa[j];
          var ename=ex[k].Ename;
          q=ex[k].Exid;

          var divs=document.createElement("div");
          var para=document.createElement("p");
          var it=document.createElement("i");
          var mrk=document.createElement("i");
          var man=document.createElement("i");
          var del=document.createElement("i");

          var yt=document.createElement("div");
          var rt=document.createElement("div");
          rt.setAttribute("class","rows");
          yt.setAttribute("id","tid"+q+"");
          yt.setAttribute("class","col-sm-12");

          var fiv=document.createElement("div");
          fiv.setAttribute("id","fiv"+q+"");

          yt.appendChild(fiv);
          rt.appendChild(yt);

          it.setAttribute("class","material-icons w3-btn w3-ripple");

          it.setAttribute("onclick","drop("+q+");alter("+q+")");
          it.setAttribute("id","it"+q+"");
          it.setAttribute("title","View");
          it.innerHTML="expand_more";
          para.setAttribute("style","font-size: 20px;")
          para.innerHTML=ename;
          para.setAttribute("id","para");

          para.appendChild(it);
          it.appendChild(rt);
          divs.appendChild(para);
          divs.appendChild(rt);
          listx.appendChild(divs);
      }
      }
      catch(mistake)
      {
          console.log("Something happened");
      }

  }
  function errData(err){
  console.log('Error..!!!');
  console.log(err);
  }

  function drop(hoi)
  {
      createtab(hoi);
      appendmark(hoi);
  }
  function appendmark(markit)
  {

    console.log(rollnumber);
    var refmark=database.ref("Marks/"+username+"/course/"+disp+"/ExerciseTable/"+markit+"/"+rollnumber);
    refmark.on('value',function(scored){
        marklist(scored,markit)
    },errmark);

  }

  function marklist(scored,its)
  {
    try
    {
      var mc=scored.val();
      var mc_obj=Object.keys(mc);
      var mc_len=mc_obj.length;
      console.log(mc_len);
      var m_body=document.getElementById("bod"+its+"");
      var m_foot=document.getElementById("foot"+its+"");
      for(mlen=0;mlen<mc_len-1;mlen++)
      {
        var f=mc_obj[mlen];
        var c_id=mc[f].cri_id;
        var c_mark=mc[f].cri_mark;
        console.log(c_id);
        console.log(c_mark);
        var c_row=m_body.rows[mlen].insertCell(4);
        c_row.innerHTML=c_mark;
      }
      var ob=mc_obj[mc_len-1];
      var ob_mark=mc[ob].totObtain;
      console.log(ob_mark);

      var fin_row=m_foot.rows[0].insertCell(2);
      fin_row.innerHTML=ob_mark;
    }
    catch(fault)
    {
      var m_body=document.getElementById("bod"+its+"");
      var m_foot=document.getElementById("foot"+its+"");
      for(c_c=0;c_c<m_body.rows.length;c_c++)
      {
        m_body.rows[c_c].insertCell(4).innerHTML="Not yet rated";
      }
      m_foot.rows[0].insertCell(2).innerHTML="No score to Display";
    }





  }
  function errmark(errm)
  {
    console.log(errm);
  }
  function createtab(hi)
  {
      hub=hi;
      var ftable=document.createElement("table");
      var fthead=document.createElement("thead");
      var ftbody=document.createElement("tbody");
      var ftfoot=document.createElement("tfoot");
      ftfoot.setAttribute("id","foot"+hi+"");

      ftable.setAttribute("class","table table-bordered");
      ftbody.setAttribute("id","bod"+hi+"");
      fthead.setAttribute("class","w3-teal");
      fthead.setAttribute("style","color: white");
      var hrow=document.createElement("tr");
      var hd1=document.createElement("td");
      hd1.innerHTML="Criteria No.";
      var hd2=document.createElement("td");
      hd2.innerHTML="Criteria Name";
      var hd3=document.createElement("td");
      hd3.innerHTML="Descriptive";
      var hd4=document.createElement("td");
      hd4.innerHTML="Maximum Mark";
      var hd5=document.createElement("td");
      hd5.innerHTML="Obtained Mark";

      hrow.appendChild(hd1);
      hrow.appendChild(hd2);
      hrow.appendChild(hd3);
      hrow.appendChild(hd4);
       hrow.appendChild(hd5);

      fthead.appendChild(hrow);
      ftable.appendChild(fthead);
      ftable.appendChild(ftbody);
      ftable.appendChild(ftfoot);
      var io=document.getElementById("fiv"+hi+"");
      io.appendChild(ftable);
      bodycreate(hi);
  }

  function bodycreate(hell)
  {

  var refer = database.ref(username+'/course/'+disp+'/ExerciseTable/'+hell+'/');
  refer.on('value',function(data){gotdi(data,hell)},errData);

  var fotref= database.ref(username+'/course/'+disp+'/ExerciseTable/'+hell+'');
  fotref.on('value',function(footd){gotfoot(footd,hell)},errfoot);

  }
  function errfoot(errr)
  {
      console.log("Error");
  }
  function gotfoot(footd,d)
  {
      var fex=footd.val();
      var f1=Object.keys(fex);
      var ft=f1.length;
      var Exermark=fex.Etotal;
      var apf=document.getElementById("foot"+d+"");
      var ftrw=document.createElement("tr");
      var fd1=document.createElement("td");
      fd1.setAttribute("colspan","2");
      fd1.innerHTML="Total Mark";
      var fd2=document.createElement("td");
      fd2.setAttribute("colspan","2");
      fd2.innerHTML=Exermark;
      ftrw.appendChild(fd1);
      ftrw.appendChild(fd2);
      apf.appendChild(ftrw);

  }
  function gotdi(you,re)
  {

      var brow=document.createElement("tr");
      var bd1=document.createElement("td");
      var bd2=document.createElement("td");
      var bd3=document.createElement("td");
      var bd4=document.createElement("td");
      var ex3=you.val();
    var sa3=Object.keys(ex3);
    var s3=sa3.length;
      var bod=document.getElementById("bod"+re+"");
      for(p=0;p<s3-3;p++)
      {
      var k=sa3[p];
      var cid=ex3[k].cid;
      var cname=ex3[k].cname;
      var ctotal=ex3[k].ctotal;
          var brow=document.createElement("tr");
          var bd1=document.createElement("td");
          bd1.innerHTML=cid;
          var bd2=document.createElement("td");
          bd2.innerHTML=cname;
          var bd3=document.createElement("td");
          bd3.innerHTML="<table class='table table-bordered table-condensed'><thead><tr><td>"+"No."+"</td><td>"+"Description"+"</td><td>"+"Marks"+"</td></tr></thead><tbody class='tide subtable"+re+"'></tbody></table>";
          id=0;
          var bd4=document.createElement("td");
          bd4.innerHTML=ctotal;

          brow.appendChild(bd1);
          brow.appendChild(bd2);
          brow.appendChild(bd3);
          brow.appendChild(bd4);
          bod.appendChild(brow);
          var a=p+1;
          var ref8 = database.ref(username+'/course/'+disp+'/ExerciseTable/'+re+'/'+cid+'/');
          ref8.on('value',function(tie){gotLow(tie,re,cid)},errData);
      }
      y=0;
  }

  function gotLow(good,red,b)
  {
      var ex8=good.val();
      var sa8=Object.keys(ex8);
      var s8=sa8.length;
      for(z=0;z<s8-3;z++)
      {
         var ty=sa8[z];
         var ty_id=ex8[ty].did;
         var ref9 = database.ref(username+'/course/'+disp+'/ExerciseTable/'+red+'/'+b+'/'+ty_id+'');
          ref9.on('value',function(bud){gotMuch(bud,red,b,s8,y)},errData);
      }
      y++;
  }
  function alter(tin)
  {
      var dif=document.getElementById("it"+tin+"");
      dif.setAttribute("class","material-icons w3-btn w3-ripple");
      dif.innerHTML="expand_less";
      dif.setAttribute("onclick","collapse("+tin+")");
  }

  function gotMuch(dude,guy,vol,s8,xx)
  {
      var ex9=dude.val();
      var sa9=Object.keys(ex9);
      var s9=sa9.length;

      var did=ex9.did;
      var dmark=ex9.dmark;
      var dname=ex9.dname;

      var ytabl=document.querySelectorAll(".subtable"+guy+"");
      var row = ytabl[xx].insertRow();
      var cell1=row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML=did;
      cell2.innerHTML=dname;
      cell2.setAttribute("style","font-weight: bold;");
      cell3.innerHTML=dmark;
  }
  function collapse(kie)
  {
      var lap=document.getElementById("fiv"+kie+"");
      while(lap.hasChildNodes())
      {
        lap.removeChild(lap.lastChild);
      }
      var hop=document.getElementById("it"+kie+"");
      hop.setAttribute("class","material-icons w3-btn w3-ripple");
      hop.innerHTML="expand_more";
      hop.setAttribute("onclick","drop("+kie+");alter("+kie+")");

  }
