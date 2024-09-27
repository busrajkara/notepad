<?php
$file = 'notes.json';
$notes = [];

if (file_exists($file)) {
    $notes = json_decode(file_get_contents($file), true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newNote = [
        'note' => $_POST['note'],
        'author' => $_POST['author'],
        'category' => $_POST['category'],
        'date' => date('Y-m-d H:i:s'),
    ];

    $notes[] = $newNote;
    file_put_contents($file, json_encode($notes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}
?>

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Kitty Not Defteri</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

<div class="container mt-5">
    <div class="header-box">
        <h1 class="text-center">Hello Kitty Not Defteri 
            <img src="images/hello-kitty-icon.jpg" alt="Hello Kitty" class="hello-kitty-icon">
        </h1>
    </div>

    <div class="search-box">
        <input type="text" class="form-control" placeholder="Notları ara..." id="searchInput" required>
        <button class="btn btn-pink" id="searchButton" type="button">
            <img src="images/search.png" alt="Ara" class="icon">
        </button>
    </div>


    <form method="POST" action="index.php" class="note-form">
        <div class="input-group mb-3">
            <input type="text" class="form-control" name="note" id="noteInput" placeholder="Notunuzu buraya yazın..." required>
            <input type="text" class="form-control" name="author" id="authorInput" placeholder="Yazarın ismini ekleyin..." required>
            <select name="category" id="categoryInput" class="form-control" required>
                <option value="" disabled selected>Kategori Seçin</option>
                <option value="Günlük">Günlük</option>
                <option value="Aylık">Aylık</option>
                <option value="Yıllık">Yıllık</option>
            </select>
            <div class="input-group-append">
                <button class="btn btn-pink" type="submit">
                    Ekle <img src="images/plus.png" alt="Ekle" class="icon">
                </button>
            </div>
        </div>
    </form>

    <div id="noteList" class="row">
        <?php foreach ($notes as $index => $note): ?>
            <div class="col-md-4">
                <div class="note-box">
                    <strong><?php echo htmlspecialchars($note['category']); ?></strong> - <?php echo htmlspecialchars($note['note']); ?> 
                    <small><?php echo htmlspecialchars($note['date']); ?></small>
                    <p>Yazar: <?php echo htmlspecialchars($note['author']); ?></p>
                    <button class="delete-button" onclick="deleteNote(<?php echo $index; ?>)">🗑️</button>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="js/scripts.js"></script>
</div>
</body>
</html>
