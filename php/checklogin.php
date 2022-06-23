<?php

$bLoginSucess = false;

$email = "";
$password = "";
$dbEmail="";
$killmepls="";



 if(isset($_POST['email'])){
$email = $_POST['email'];
}
if(isset($_POST['password'])){
$password = $_POST['password'];
}

 if($email !== "" && $password !== ""){
//Datenbank
include 'imports/dbSettingsAndConnImport.php';

$sql = "SELECT * FROM WS_User ";

//echo $email;
//echo $password;


foreach($conn-> query($sql) as $row){
//PHP Session starten --> Cookies?!

    //echo $email;
  //  echo $password;

 $dbEmail = $row['email'];
 $dbPassword= $row['password'];
// echo "$dbEmail" ;
//
//$_SESSION['login'] = 111;
//$_SESSION['time'] = time();
//echo $_SESSION['id'];

 if($email == $dbEmail && $password == $dbPassword){
$bLoginSucess = true;
}else{
$bLoginSucess=false;
}
}
$conn = null;
}
if($bLoginSucess == true){
    echo ("Login was sucessfull");
    session_start();
    $_SESSION['time'] = time();
    $_SESSION["logine"]=$email;
    echo "$_SESSION[logine]";
header("Location: index.php");
} else {
    echo ("Failed to login.");
header("Location: login.php");
}

?>