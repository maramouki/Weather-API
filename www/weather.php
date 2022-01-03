<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.weatherbit.io/v2.0/current?key=5820cf29d600489d855743e3169d0257&lang=fr&city=Chamb%C3%A9ry%2CFR",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => "",
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
?>