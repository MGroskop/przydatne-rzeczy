 public function viewAction(\app\library\_PajaxRequest $request)
 { 
    try
    {
    
         
        $tygodnie = '';                        
        $err = array();    
    
        if($request->isSetParam("rok"))  $data = date($request->getString("rok").'-m'); else $data = date("Y-m");
 
        if($request->isSetParam('data')) $data = $request->getString ('data');                
        
        $lastNumber  = date('t',  strtotime($data.'-01') ); //ostatni dzień kalendarza         
        $startD   = date('w',  strtotime($data.'-01') ); //numer pierwszego dnia z kalendarza 0-nd 1-pon 2-wt 3-sr 4-czw 5-pt 6-sob 

        
        $start = 0;
        $day   = 0;  
    
           
        if( $data == '2022-05') //ustawienie maja - 5 niedziel
        {
            $dzien_koncowy = 42;
        }else{
            $dzien_koncowy = 35;
        }
        
        for($d = 1; $d<= $dzien_koncowy; $d++)
        {
            
           if($d==1 || $d == 8 ||  $d==15 || $d==22 || $d==29 || $d==36 )$tygodnie .= '<tr>';
     
           if($d == $startD || ( $d==7 && $startD==0 ))    $start = 1;
           if($day > $lastNumber-1) $start = 0;
           
           if($start == 1)
           {
               $day++;               
               $classDay = '';
          
               $dTmp = strval($day);        
               if(strlen($dTmp) == '1') $dTmp = '0'.$dTmp;
                  
               $dzien = '';

               if($day < 10) $dzien .= "0".$day; else $dzien .= $day;
               
               if(date('w',strtotime($data.'-'.$dzien)) == 0)$classDay .= " fc-day-sun ";
               if(date('w',strtotime($data.'-'.$dzien)) == 1)$classDay .= " fc-day-mon ";
               if(date('w',strtotime($data.'-'.$dzien)) == 2)$classDay .= " fc-day-tue ";
               if(date('w',strtotime($data.'-'.$dzien)) == 3)$classDay .= " fc-day-wed ";
               if(date('w',strtotime($data.'-'.$dzien)) == 4)$classDay .= " fc-day-thu ";
               if(date('w',strtotime($data.'-'.$dzien)) == 5)$classDay .= " fc-day-fri ";
               if(date('w',strtotime($data.'-'.$dzien)) == 6)$classDay .= " fc-day-sat ";
               
               if(date('Y-m-d',strtotime($data.'-'.$dzien)) >  date('Y-m-d') ) $classDay .= 'fc-day-future ';
               if(date('Y-m-d',strtotime($data.'-'.$dzien)) <  date('Y-m-d') ) $classDay .= 'fc-day-past ';
               if(date('Y-m-d',strtotime($data.'-'.$dzien)) == date('Y-m-d') ) $classDay .= 'fc-day-today ';                   

              //szablon html z pozycjami kalendarza------------------
                $xxx = $this->template("::rezerwacje_pozycje"); 
               
                $pozycje2 = '';
                $buf = '';   

              //pobranie listy wydarzeń które będą naniesione w pozycje kalendarza------------
                $wydarzenia = $this->getModel()->pobierzListeWydarzen($data.'-'.$dzien);
                
                if(count($wydarzenia)>0)
                {                        
                    foreach($wydarzenia as $a=>$wydarzenie)
                    {                         
                         $text = '';
                         $zamkniete = $wydarzenie['t0_rodzaj'];
                    
                         if($zamkniete == 'zamknięte') $text = "<span style='color:#e1e1e1;;font-size:10px;'>Wydarzenie zamknięte</span><br/>";
                         
                         $czas = date("H:i",strtotime($wydarzenie['t0_data']));
                        // $kolor = "#3b7ddd";
                         $buf .= '<div class="calendar-event" onclick=""><span style="">'.$text.'<b>'.$czas.'</b><br>'.$wydarzenie['t0_tytul'].'</span></div>';
                    }

                 //szablon html z pozycjami wydarzeń-----------------
                     $pozycje = $this->template("::events");
                     $pozycje->Add("wydarzenie",$buf);
                     $pozycje2 = $pozycje->Execute();                         

                }else{
                     $pozycje = $this->template("::events");
                     $pozycje->Add("wydarzenie",'');
                     $pozycje2 = '';
                }                
                

               $xxx->Add("class",$classDay);
               $xxx->Add("dzien",$day);
               $xxx->Add("dzien_value",$data.'-'.$dzien);
               $xxx->Add("pozycje2",$pozycje2);
               $tygodnie .= $xxx->Execute();                
               
               
           }else{
                $tygodnie .= '<td class="fc-daygrid-day fc-day fc-day-past fc-day-other"><span></span></td>';     
           }
                     
          if($d==7 || $d==14 || $d==21 || $d==28 || $d==35) $tygodnie .= '</tr>';
        }
        

      //szablon html kalendarza i naniesienie do niego danych------
       $template = $this->template("::kalendarz");  
       
       $miesiac = explode("-",$data);
       
       if($miesiac[1] == 1)  $nazwa_miesiaca = "Styczeń";
       if($miesiac[1] == 2)  $nazwa_miesiaca = "Luty";
       if($miesiac[1] == 3)  $nazwa_miesiaca = "Marzec";
       if($miesiac[1] == 4)  $nazwa_miesiaca = "Kwiecień";
       if($miesiac[1] == 5)  $nazwa_miesiaca = "Maj";
       if($miesiac[1] == 6)  $nazwa_miesiaca = "Czerwiec";
       if($miesiac[1] == 7)  $nazwa_miesiaca = "Lipiec";
       if($miesiac[1] == 8)  $nazwa_miesiaca = "Sierpień";
       if($miesiac[1] == 9)  $nazwa_miesiaca = "Wrzesień";
       if($miesiac[1] == 10) $nazwa_miesiaca = "Październik";
       if($miesiac[1] == 11) $nazwa_miesiaca = "Listopad";
       if($miesiac[1] == 12) $nazwa_miesiaca = "Grudzień";       
  
       $rok      = date("Y",  strtotime($data));       

       $template->Add('tygodnie',$tygodnie);       
       $template->Add('nazwa',  $nazwa_miesiaca.' '.$rok);        
       $template->Add('data_wstecz', date('Y-m',strtotime('-1 month '.$data.'-01')));
       $template->Add('data_dalej',  date('Y-m',strtotime('+1 month '.$data.'-01')));

       $ind = $this->template(":::");
       $ind->Add("cal",$template->Execute());
       $szablon = $ind->Execute();
                     
  
     $this->responseAJAX($szablon);

      
    }catch(\app\library\_PajaxException $e)  {throw $e; }
 } 
  
