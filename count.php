01    <?php
02    if ( !file_exists ( "count.txt") )
03    {
04        $fp = fopen("count.txt", "w+") ;
05        fclose($fp) ;
06    }
07    $count = file("count.txt") ;
08    $count[0] = chop($count[0]) ;
09    $countdata = split("::", $count[0]);
10    $date = $countdata[0];
11    $daycount = (int)$countdata[1];
12    $counta = (int)$countdata[2];
13    $today = date("Y-m-d");
14    if ( !$_COOKIE["ip"] ){
15      if($date == $today){
16        $daycount++ ;
17      } else {
18          $date = $today;
19          $daycount = 1 ;
20        }
21      $counta++ ;
22      $fp = fopen("count.txt", "w") ;
23      fwrite($fp, "$date::$daycount::$counta") ;
24      fclose($fp) ;
25      SetCookie("ip", $REMOTE_ADDR, time() + 7200) ;
26    }
27    echo '<meta charset="utf-8">';
28    echo "<font color='red'><strong>".$date."</strong></font> 의 방문자 수 : <font color='red'><strong>".$daycount."</strong></font><br>전체 방문자 수 :<font color='red'><strong> ".$counta."</strong></font>";
29    ?>