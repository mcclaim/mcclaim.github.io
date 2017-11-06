<?php
    $adminemail = "info@site.ru";
    $date = date("d.m.y");
    $time = date("H:i");

    $phone = $_POST['phone'];
    $form = $_POST['form'];

    $msg = "
        Дата: {$date} {$time}
        Телефон: {$phone}
        Форма: {$form}
    ";

    $headers = "From: mail@site.ru\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=\"utf-8\"";
    mail($adminemail,"Заявка с сайта auto-legal.ru",$msg,$headers);

    header('Location: thanks.html',true,301);
    exit;
?>