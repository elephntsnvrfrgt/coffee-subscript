<?php


require 'PHPMailerAutoload.php';


/**
 * This example shows sending a message using a local sendmail binary.
 */


//Create a new PHPMailer instance
$mail = new PHPMailer;

$coffee = $_POST["type"];
// Set PHPMailer to use the sendmail transport
$mail->isSendmail();
//Set who the message is to be sent from
$mail->setFrom('email@address.com', 'Birthday coffee');
//Set an alternative reply-to address
// $mail->addReplyTo('isaac.michael.martin@gmail.com', 'Isaac Martin');
//Set who the message is to be sent to
$mail->addAddress('email@address.com', 'Name');
//Set the subject line
$mail->Subject = 'Orders up!';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->isHTML(true);

$mail->Body = "<p>Mom picked the $coffee beans! Get roasting, you turkey!</p>
<img src='http://isaacmart.in/mom/img/brule-bringo.gif'>";
$mail->AltBody = "Mom picked the $coffee!";

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}


//Create a new PHPMailer instance
$mail2 = new PHPMailer;

$coffee = $_POST["type"];
// Set PHPMailer to use the sendmail transport
$mail2->isSendmail();
//Set who the message is to be sent from
$mail2->setFrom('email@address.com', 'Birthday coffee');
//Set an alternative reply-to address
$mail2->addReplyTo('email@address.com', 'Name');
//Set who the message is to be sent to
$mail2->addAddress('email@address.com
', 'Name');
//Set the subject line
$mail2->Subject = 'Order success!';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail2->isHTML(true);

$mail2->Body = "<p>Boom blam! You just ordered some <strong>$coffee</strong> coffee, roasted to order. We'll send it to you as soon as we can!</p>
<p>As you drink each cup of coffee, hopefully it reminds you that we love you, miss you, and cherish you. Many happy returns!</p>
<p>xoxo</p>
<p>-Isaac, Dyani, & Eames.</p>
<img src='http://isaacmart.in/mom/img/coffee.gif'>";
$mail2->AltBody = "You just ordered some $coffee Birthday Beans. We'll send it to you as soon as we can! As you drink each cup of coffee, hopefully it reminds you that we love you, miss you, and cherish you. Many happy returns! xoxo. -Isaac, Dyani, & Eames.";


//send the message, check for errors
if (!$mail2->send()) {
    echo "Mailer Error: " . $mail2->ErrorInfo;
} else {
    echo "Message sent!";
}



?>
