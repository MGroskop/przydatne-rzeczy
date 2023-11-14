public function VCFCard($px_user_id)
{ 
    // Created default
    try
    {
        $imie = "John";
        $nazwisko = "Doe";
        $telefon = "321654987";
        $email = "example@com.pl";

        @mkdir ('/files');
        @mkdir ('/files/media');
        @mkdir ('/files/media/vcards');               
        
        $vCard  = "BEGIN:VCARD\n";
        $vCard .= "VERSION:3.0\n";
        $vCard .= "N:;".$imie.' '.$nazwisko.";;;\n";
        $vCard .= "FN:".$imie.' '.$nazwisko."\n";
        $vCard .= "TEL;TYPE=HOME:".$telefon."\n";
        $vCard .= "EMAIL;TYPE=internet,pref:".$email."\n";
        $vCard .= "END:VCARD\n";              
        
        $file = fopen("/files/media/vcards/".$imie.'_'.$nazwisko.".vcf", "w+") or die("Unable to open file!");
        fwrite($file,$vCard);
        fclose($file);
        
        return $vCard;
        

    }catch(\app\library\_PajaxException $e)  {throw $e; }
} 
