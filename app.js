/* መሰረታዊ የዲዛይን ቅንብሮች */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
}

header {
    background-color: #007bff;
    color: white;
    padding: 20px 0;
}

main {
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.description p {
    line-height: 1.6;
    margin-bottom: 30px;
}

.buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px; /* በሁለቱ በተኖች መካከል ያለ ርቀት */
    margin-bottom: 40px;
}

.btn {
    display: inline-block;
    padding: 15px 30px;
    text-decoration: none; /* ከታች ያለውን መስመር ማስወገድ */
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.primary-btn {
    background-color: #28a745; /* አረንጓዴ */
    color: white;
}

.primary-btn:hover {
    background-color: #1e7e34;
}

.secondary-btn {
    background-color: #ffc107; /* ቢጫ */
    color: #333;
}

.secondary-btn:hover {
    background-color: #d39e00;
}

.post-btn {
    background-color: #17a2b8; /* ሰማያዊ */
    color: white;
    border: none;
    width: 100%;
    margin-top: 20px;
}

footer {
    padding: 10px;
    background-color: #ddd;
    color: #555;
    margin-top: 20px;
    font-size: 14px;
}