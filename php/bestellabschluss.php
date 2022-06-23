<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bestellabschluss</title>

   <?php
    include 'imports/headerImport.php';
   ?> 

</head>
<body>
     <!-- Dynamic Titel Import -->
    <?php
        include 'imports/titelImport.php';
    ?>


    <!-- Bestellvorgang Abgeschlossen Div -->
    <div class="bestellabschlussDiv">
        <button onclick="location.href = 'index.php';"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
        <h3>Der Bestellvorgang wurde erfolgreich abgeschlossen! <br> 
        Vielen Dank für Ihre Bestellung</h3>
    </div>

    <!--FOOTER IMPORT -->
    <?php
        include 'imports/footerImport.php';
    ?>

    <!-- SCRIPT IMPORT -->
    <?php
        include 'imports/scriptImport.php';
    ?>    
</body>
</html>
