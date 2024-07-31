function Build()
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var contact=document.getElementById('contact').value;
    var LinkedIn=document.getElementById('LinkedIn').value;
    var address=document.getElementById('address').value;
    var Objective=document.getElementById('Objective').value;
    var education=document.getElementById('education').value;
    var experience=document.getElementById('experience').value;
    var Skills=document.getElementById('Skills').value;
    var Achievements=document.getElementById('Achievements').value;
    var Declaration=document.getElementById('Declaration').value;

    
var generateResume=
`<div style="display:flex; flex-direction:column;border:5px solid black; background:white; margin: 20px 20px; padding: 5px 150px 40px ">
    <center><h1 style="position:relative;font-size:40px">RESUME</h1></center>


    <div className="row">
        <div class="col-md-6">
            <label style="font-size:20px">Name:${name}</label>
        </div>
        <div class="col-md-6">
            <label style="font-size:20px">Email:${email}</label>
        </div>
        <div class="col-md-6">
            <label style="font-size:20px">Contact:${contact}</label>
        </div>
        <div class="col-md-6">
            <label style="font-size:20px">LinkedIn:${LinkedIn}</label>
        </div>
    </div>
<hr style="width:100%; border:1px solid black;">

<div class="objective-seciton">
<label> <h1>Objective</h1></label>
<p>${Objective}</p>
</div>
<hr style="width:100%; border:1px solid black;">

<div class="Skills-seciton">
<label> <h1>Skills</h1></label>
<p>${Skills}</p>
</div>
<hr style="width:100%; border:1px solid black;">

<div class="Experience-seciton">
<label> <h1>Experience</h1></label>
<p>${experience}</p>
</div>
<hr style="width:100%; border:1px solid black;">

<div class="Education-seciton">
<label> <h1>Education</h1></label>
<p>${education}</p>
</div>
<hr style="width:100%; border:1px solid black;">

<div class="Achievements-seciton">
<label> <h1>Achievements</h1></label>
<p>${Achievements}</p>
</div>
<hr style="width:100%; border:1px solid black;">

<div class="Declaration-seciton">
<label> <h1>Declaration</h1></label>
<p>${Declaration}</p>
</div>
</div>
</div>
<center>
<button  style="font-size:30px;  border:2px solid blue;  padding:10px "   onclick="window.print()">Download Pdf</button>
</center>
`;

 var newWindow=window.open();
 newWindow.document.write(generateResume);
 newWindow.document.close();   

}