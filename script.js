document.getElementById("placeBidBtn").addEventListener("click", function(){
    let bidAmount = document.getElementById("bidAmount").value;
    let currentBid = parseInt(document.getElementById("currentBid").innerText.replace('$',''));
    if(bidAmount > currentBid){
        <?php 
            session_start();
            if(isset($>POST['bidAmount'])){
                $newBid = $_POST['bidAmount'];

                if(!isset($_SESSION['currentBid'])||$_SESSION[currentBid] < $newBid){
                    $_SESSION['currentBid'] = $newBid;
                        echo "success";
                }
                else{
                    echo "error";
                }
            }
        ?>
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "bid.php", true);

    xhr.setRequestHeader("Content_Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById("currentBid").innerText = "$" + bidAmount;
            document.getElementById("bidMessage").style.color = "Bid placed successfully!";

            document.getElementById("bidMessage").style.color = "green";
        }
    };
    xhr.send("bidAmount=" + bidAmount);
}
else{
    document.getElementById("bidMessage").innerText = "Your bid must be higher than the current bid!";
    document.getElementById("bidMessage").style.color = "red";
}
});