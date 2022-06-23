<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alle Artikel</title>

   <?php
    include 'imports/headerImport.php';
   ?> 

</head>
<body id="body">

    <!-- NAV IMPORT -->
    <?php
        include 'imports/navImport.php';
    ?>
     <!-- Dynamic Titel Import -->
    <?php
        include 'imports/titelImport.php';
    ?> 

    <!-- DB Settings and Connection Import -->
    <?php
        include "imports/dbSettingsImport.php";
    ?>

    <!-- ALLE ARTIKEL LAYOUT -->

    <div class="containerAlle">
        <?php
            include 'imports/dbSettingsAndConnImport.php';

            $sql = "SELECT * FROM artikel";
            
            $i=1;

            foreach($conn->query($sql) as $row){
                echo "
                <form action='checkWarenkorb.php' method='post' class='box' id='boxID".$i."'>
                <img src='../images/alleArtikel/".$row['artNr'].".jpg' class='imageClass'>
                <h3 class='artikelNameH3'>".$row['kurztext']."</h3>
                <p class='artNrPräfix'>Art.-Nr.: <span type='text' class='artikelNummerSpan'name='artNr'>".$row['artNr']."</span> Bestand: <span class='artikelNummerSpan'>".$row['bestand']."</span> </p>
                <p class='beschreibungP'>".$row['beschreibung']."</p>
                <h4 class='priceSpan'>".$row['preis']."</h4>
                <div class='amountDiv' id='amountID".$i."'>
                <span onClick='minusOne(this)' class='minusButton' id='minusButton".$i."'>-</span>
                <input name='menge' value='1' type='text'></input>
                <input name='artikelid' value='".$row['artNr']."' type='text' hidden></input>
                <span onClick='plusOne(this)' class='plusButton' id='plusButton".$i."'>+</span>
                </div>
                <button type='submit' class='addToCart'>In den Warenkorb</button>
                </form> 
                ";
                $i=$i+1;
            }
            $conn=null;
        ?>
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