<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Project Three</title>

<link rel="stylesheet" type="text/css" href="css/html5reset.css">
<link rel="stylesheet" type="text/css" href="css/styles.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="js/items.js"></script>
</head>

<body>

<main id="main" role="main" class="global-width">

    <form method="post">
    
        <label for="dollar-amount">Enter how much money is in your bank account: $</label>
        
        <input type="text" id="dollar-amount" name="dollar-amount" />
        
        <input type="submit" name="submit-button" id="submit-button" />
    
    
    </form>
    
    <section id="inflation">

    </section>

    <section>
    
        <ul id="items">
        
        </ul>
        
         <form method="post">
        
            <input type="submit" name="more-button" id="more-button" value="load more" />
        
        
        </form>       
        
    </section>

</main>

</body>
</html>