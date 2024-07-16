<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Submit Your App</title>
<style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin-top: 100px;
    }
   
    /* Styles for the popup */
    .popup-container {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000; /* Ensure it's higher than other content */
    }
    .popup-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        width: 90%;
        max-width: 600px; /* Limit maximum width */
        height: 90%;
        max-height: 80%; /* Limit maximum height */
        overflow: auto;
    }
    .close-popup {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        color: #999;
    }
	
	 .submit-link{
     display: inline-block;
      font-size: ;
       cursor: pointer;
      color: #ffffff;
background-color: #2e7bee;
padding: 10px 20px;
border-radius: 20px;
transition: background-color 0.2s ease-in-out;
transition: transform 0.2s ease-in-out;
text-decoration: none;
border-left: 5px solid #5f98ec;
border-bottom: 5px solid #5f98ec;
}
.submit-link:hover{
background-color: #5d9dfd;
color: #f7eeee;
border-bottom: none;
border-left: none;
border-right: 5px solid #82aff2;
border-top: 5px solid #82aff2;

}



.close-popup{
display: inline-block;
font-size: 30px;
padding: 10px 20px;
color: #20bbcf;
background-color:#99f3ff;
border: 2px solid;
border-top-left-radius: 70px;
border-bottom-right-radius: 70px;
border-top-right-radius: 80px;
cursor: pointer;
transition: background-color 3s ease-in-out;
transition: color 1s ease-in-out;



}

.close-popup:hover{
background-color: #87e2ee;
color: blue;
transform: scale(1.1);
}

</style>
<script>
function openPopup() {
    var popup = document.getElementById('popup');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://search.youhelp.in/';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    popup.querySelector('.popup-content').appendChild(iframe);
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup');
    var iframe = popup.querySelector('iframe');
    iframe.parentNode.removeChild(iframe);
    popup.style.display = 'none';
}
</script>
</head>
<body>


<a href="#" onclick="openPopup();" class="submit-link">Submit Your App</a>

<!-- Popup container -->
<div id="popup" class="popup-container">
    <div class="popup-content">
        <span class="close-popup" onclick="closePopup();">&times;</span>
    </div>
</div>

</body>
</html>
