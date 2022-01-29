<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'database.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->name)
    && isset($data->email)
    && isset($data->password)
    && isset($data->country)
    && isset($data->city)
    && isset($data->job)
    && !empty(trim($data->name))
    && !empty(trim($data->email))
    && !empty(trim($data->password))
    && !empty(trim($data->country))
    && !empty(trim($data->city))
    && !empty(trim($data->job))
) {
    $username = mysqli_real_escape_string($con, trim($data->name));
    $useremail = mysqli_real_escape_string($con, trim($data->email));
    $userpassword = mysqli_real_escape_string($con, trim($data->password));
    $usercountry = mysqli_real_escape_string($con, trim($data->country));
    $usercity = mysqli_real_escape_string($con, trim($data->city));
    $userjob = mysqli_real_escape_string($con, trim($data->job));
    if (filter_var($useremail, FILTER_VALIDATE_EMAIL)) {
        $sql = "INSERT INTO users (
            name,
            email,
            password,
            country,
            city,
            job
        ) 
        VALUES(
            '$username',
            '$useremail',
            '$userpassword',
            '$usercountry',
            '$usercity',
            '$userjob'
        )";
        $insertUser = mysqli_query($con, $sql);
        if ($insertUser) {
            $last_id = mysqli_insert_id($con);
            echo json_encode(["success" => 1, "msg" => "User Inserted.", "id" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Invalid Email Address!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}