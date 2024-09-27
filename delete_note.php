<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $index = isset($_POST['index']) ? intval($_POST['index']) : -1;
    $file = "notes.json";

    if (file_exists($file) && $index >= 0) {
        $notes = json_decode(file_get_contents($file), true);
        if ($notes !== null && isset($notes[$index])) {
            array_splice($notes, $index, 1);

            $fp = fopen($file, 'w');
            if (flock($fp, LOCK_EX)) {
                fwrite($fp, json_encode($notes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
                fflush($fp);
                flock($fp, LOCK_UN);
            }
            fclose($fp);

            echo json_encode(['status' => 'success']);
            exit();
        }
    }
    echo json_encode(['status' => 'error']);
    exit();
}
