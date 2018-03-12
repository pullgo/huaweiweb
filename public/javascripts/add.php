<?php
/*header("Content-Type:text/html;charset=utf-8"),*/
  sleep(3);
  /*echo"<h2>你好<h2>";*/
  required ('config.php');

  $query = "INSERT INTO user (user,pass,email,sex,birthday,date)

 VALUES ('{$_GET['user']}',sha1('{$_GET['pass']}'),'{$_GET['email']}','{$_GET['sex']}','{$_GET['birthday']}',NOW())";

  mysql_query($query) or die('新增失败! '.mysql_error());

  echo mysql_affected_rows();
  
  mysql_close();
?>