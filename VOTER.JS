function openWindow() {
    var form = document.getElementById("myForm");
    
    
  let nameInput = form.elements["name"].value.toUpperCase();
  let nameInLocalInput = form.elements["name in hindi"].value;
  let imageInput = form.elements["image"].value;
  let epicInput = form.elements["epic"].value;
  let addressInput = form.elements["address in english"].value;
  let addressInputHindi = form.elements["address in hindi"].value;
  let constituent_assembly_eng = form.elements["C_A_N"].value;
  let constituent_assembly_hin = form.elements["C_A_N_H"].value;
  // let date = Date.now()
  let relationInputs = form.elements["relation"];
  let selectedRelation;

  let genderInput = form.elements["gender"];
  let selectgender;
  
  for (var i = 0; i < genderInput.length; i++) {
    if (genderInput[i].checked) {
      selectgender = genderInput[i].value;
      break;
    }
  }
  let gender_eng = "";
  let gender_hin = "";
  if (selectgender === "1") {
    gender_eng = "Female";
    gender_hin = "महिला";
  } else if (selectgender === "2") {
    gender_eng = "Male";
    gender_hin = "पुरुष";
  }









  
  for (var i = 0; i < relationInputs.length; i++) {
    if (relationInputs[i].checked) {
      selectedRelation = relationInputs[i].value;
      break;
    }
  }
  let relation_add = "";
  let relation_add_hin = "";
  if (selectedRelation === "1") {
    relation_add = "Father's Name";
    relation_add_hin = "पिता का नाम";
  } else if (selectedRelation === "2") {
    relation_add = "Husband's Name";
    relation_add_hin = "पति का नाम";
  }
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1; // January is 0, so add 1
  const yyyy = today.getFullYear();
  
  const formattedDate = `${dd}/${mm}/${yyyy}`;
  let relation_name = form.elements["relation_name"].value.toUpperCase();
  let relation_name_hin = form.elements["relation_name_hin"].value;
  let part_number = form.elements["part_number"].value;
  let part_number_hin = form.elements["part_number_hin"].value;
  let date_of_birth = form.elements["date_of_birth"].value;
    var output = "";

    output = `
    <style>
        .firstpage {
        background-image: url(voterhindifront1.jpg);
        height: 500px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 30px;
        width: 320px;
        float: none;
        border-radius:10px;
        border:3px dotted black;
        position: relative;
        font-size: 14px;
        margin-bottom: 20px;
            
    }
        .secondpage {
        background-image: url(voterhindiback4.jpg);
        height: 500px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 30px;
        border-radius:10px;
        border:3px dotted black;
        width: 320px;
        float: none;
        position: relative;
}
    
        
       
        @font-face {
    font-family: 'Mangal';
    src: url('./MANGAL.TTF'); /* assuming the font file is in a folder named "font" in the same directory as your CSS file */
  }
 
main.bg {
    font-family: 'Mangal'; /* use Mangal as the primary font, and fall back to Arial if Mangal is not available */
font-weight: 600;
}
         
    
    .secondpage {
        font-size: 9px;
        font-weight: 600;
        box-sizing: border-box;
        padding: 14px;
    }
    .gender span.label,.dob span.label {
        width: 116px;
        display: inline-block;
    }
    
    .imagecontainer {
        position: absolute;
        top: 123px;
        left: 91px;
    }
    
    img.picture {
        width: 140px;
        height: 186px;
    }
    
    img.barcode {
        width: 101px;
        height: 23px;
        position: absolute;
        top: 85px;
        left: 61px;
    
    }
    .value{
     text-transform: capitalize;
    }
    .epicnumber {
        position: absolute;
        top: 82px;
        left: 175px;
    }
    
    .settable {
        position: absolute;
        top: 331px;
        left: 25px;
        
    }
    
    .tablecss {
        font-family:arial;
        font-size:14px;
        font-weight:bold;
      
    }
    
    .r_name {
        position: absolute;
        top: 331px;
        left: 25px;
    }
    
    .actual_name {
        position: absolute;
        left: 25px;
        top: 363px;
    }
    
    .father_name {
        position: absolute;
        left: 25px;
        top: 395px;
    }
    
    .father_name_actual {
        position: absolute;
        left: 25px;
        top: 427px;
    }
    
    .gender span.value {
        text-transform: capitalize;
    }
    
    .secondpage .gender {
        margin-bottom: 4px;
    }
    
    .secondpage .dob {
        position: relative;
        margin-bottom: 4px;
    }
    
    .secondpage .dob span.value {
        top: -5px;
        position: relative;
    }
    
    .address_regional {
        margin-bottom: 5px;
    }
    
    .address {
        margin-bottom: 60px;
    }
    
    .nirvachan .date {
        width: 100px;
        float: left;
    }
    
    .nirvachan .nirvachanofficer {
        float: right;
        width: 160px;
        text-align: right;
        position: relative;
    }
    
    img.officersign {
        position: absolute;
        top: -69px;
        left: 20px;
    }
    
    .nirvachan:before, .nirvachan:after {
        display: block;
        content: '';
        clear: both;
    }
    
    .nirvachan {
        margin-bottom: 10px;
    }
    .assemballysankhya .regional {
        margin-bottom: 4px;
    }
    .assemballysankhya {
        margin-bottom: 10px;
    }
    
    .bhagsankhya .regional {
        margin-bottom: 4px;
    }
    
    @media  print
    {
        * {-webkit-print-color-adjust:exact;}
    }
    @page  { size: auto;  margin: 0mm; }
    @media  print {
        a[href]:after {
            content: none !important;
        }
    }
    @media  print {
    .header, .hide { visibility: hidden }
    form.bootom-form{display:none;}
    }
        </style>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Hind" rel="stylesheet">
    <link href="aadhar.css" type="text/css" rel="stylesheet">
        
        
        </head><body>
    <main class="bg">
            <div class="row ml-5  mt-5" id="content-area" style="margin-left:100px;">
                     <div class="firstpage">
                        <img src="http://bwipjs-api.metafloor.com/?bcid=code128&amp;text=${epicInput}" class="barcode">
                        <div class="epicnumber">${epicInput}</div>
                        <div class="imagecontainer">
                                        <img src="${imageInput}"class="picture"> 
                                        </div>  
                                          <div class="settable">
                               <table class="tablecss" style="font-weight:bold;font-size:14px">
                                   <tbody><tr>
                                       <td style="padding-bottom: 15px;">नाम</td>
                                       <td style="padding-bottom: 15px;">: ${nameInLocalInput}</td>
                                   </tr>
                                   <tr>
                                       <td style="padding-bottom: 15px;">Name</td>
                                       <td style="padding-bottom: 15px;">: ${nameInput}</td>
                                   </tr>
                                   <tr>
                                       <td style="padding-bottom: 15px;">${relation_add_hin}</td>
                                       <td style="padding-bottom: 15px;">: ${relation_name_hin} </td>
                                   </tr>
                                   <tr>
                                       <td style="padding-bottom: 15px;"> ${relation_add}</td>
                                       <td style="padding-bottom: 15px;">:${relation_name}</td>
                                   </tr>
                               </tbody></table>
                          </div>
                          
    
    
                                    
    
                     </div>
    
                     <div class="secondpage">
                                       <div class="gender">
                            <span class="label">लिंग/Sex</span>
                            <span class="value">: ${gender_eng} / ${gender_hin}</span>
    
                        </div>
                        
                        <div class="dob">
                            <span class="label">जन्मतिथि/आयु <br>Date Of Birth/Age</span>
                            <span class="value">: ${date_of_birth} </span>
                        </div>
    
                        <div class="address_regional">
                            <span class="label">पता : </span>
                            <span class="value">${addressInputHindi}</span>
                        </div>
    
    
                        <div class="address">
                            <span class="label">Address : </span>
                            <span class="value">${addressInput}</span>
                        </div>
                        
                        <div class="nirvachan">
                          <div class="date">
                            <span class="label">Date:</span>
                            <span class="value">${formattedDate}</span>
                           </div>
    
                           <div class="nirvachanofficer">
                            <img class="officersign" src="./votersign2.png">
                            <span class="label">निर्वाचक रजिस्ट्रीकरण अधिकारी<br>Electoral Registration Officer</span>
                            <span class="value"></span>
                           </div>
    
                        </div>
    
                        <div class="assemballysankhya">
                          <div class="regional">
                            <span class="label">विधानसभा निर्वाचन क्षेत्र संख्या एवं नाम : </span>
                            <span class="value"><br>${constituent_assembly_hin}</span>
                           </div>
    
                           <div class="actual">Assembly Constituency No. &amp; Name : 
                            <span class="value"><br>${constituent_assembly_eng}</span>
                           </div>
                        </div>  
    
    
                         <div class="bhagsankhya">
                          <div class="regional">
                            <span class="label">भाग संख्या और नाम : </span>
                            <span class="value">${part_number_hin}</span>
                           </div>
    
                           <div class="actual">Part No. &amp; Name : 
                            <span class="value">${part_number}</span>
                           </div>
                        </div>  
                       
                      
                     
                    
                                   
                                   
                     </div>  
                 </div>  
              </main> `;
    console.log(relation_add);
    console.log(relation_add_hin);
    var newTab = window.open("", "_blank", "width=screen.width, height=screen.height");
newTab.document.write("<html><head><title>New Tab</title>");
newTab.document.write(output);
newTab.document.write("</body></html>");
newTab.document.close();
}