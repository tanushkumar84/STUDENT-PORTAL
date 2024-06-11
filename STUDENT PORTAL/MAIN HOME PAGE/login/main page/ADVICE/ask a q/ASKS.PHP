<HTML>
<HEAD>
<TITLE> </TITLE>
<SCRIPT>
function func()
{
    window.location.href = "../experts homepage/home.html";
}
</SCRIPT>
<STYLE>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#2196f3, #090909);
    overflow: hidden;
    text-align: center;
  }
.box{
    height: 28rem;
    width: 25rem;
    /* background: #fff; */
    background: #7c6969;
    border-radius: 0.6rem;
    padding: 0 2rem;
}
img{
    height: 10rem;
    margin-top: 1rem;
}
h1
{
    font-weight:bold;
    font-size:38px;
}
.A
{
   
    color: #0078d4;
    font-size: 24px;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.A input[type="button"]:hover {
    background-color: silver;
}
</STYLE>
</HEAD>
<BODY>
<?php
$servername="localhost";
$username="root";
$password="";
$connection=mysqli_connect($servername,$username,$password);
if(!$connection)
echo "Connection not established ".mysqli_connect_error();
$query=mysqli_query($connection,"create database if not exists ask");
if(!$query)
echo "Database not created ".mysqli_error($connection);
$query=mysqli_query($connection,"use ask");
if(!$query)
echo "Database not connected ".mysqli_error($connection);
$question=$_POST['question'];
if(isset($question))
$query=mysqli_query($connection,"create table if not exists question(q text)");
if(!$query)
echo "Table not created ".mysqli_error($connection);
$question = mysqli_real_escape_string($connection, $question);
$query = "INSERT INTO question (q) VALUES ('$question')";
if(!mysqli_query($connection, $query))
echo "Error ".mysqli_error($connection);
mysqli_close($connection);
?>
<div class="box">
<div class="upper">
<img src="ticks.png">
</div>
<h1>Congratulations !!<br> <br>
Question Posted Successfully 
</h1>
<BR> <BR>
<DIV CLASS="A">
<INPUT TYPE="BUTTON" VALUE="GO BACK" ONCLICK="func()">
</DIV>
</BODY>
</HTML>