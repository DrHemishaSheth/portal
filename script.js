
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dr. Hemisha Sheth</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Custom CSS -->
    <style>
        .card-scroll {
            display: flex;
            scrollbar-width: thin; /* For Firefox */
            scrollbar-color: rgba(255, 255, 255, 0.7) rgba(255, 255, 255, 0.3); /* For Firefox */
        }
        .card-scroll::-webkit-scrollbar {
            height: 8px; /* Height of the scrollbar */
        }
        .card-scroll::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 4px;
        }
        .card-scroll .card {
            flex: 0 0 300px; /* Fixed width for each card */
            margin-right: 10px; /* Margin between cards */
            position: relative;
            perspective: 1000px;
            width: 300px;
            height: 320px;
            border-radius: 10px;
        }
        .card {
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.5s;
        }
        .card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
        .card-title {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 8px;
            box-sizing: border-box;
            margin-bottom: 0;
            border-radius: 0px 0px 10px 10px;
            word-break: break-all; 
            text-align: center;     
            font-size: 1.2rem;
         }
        .bg-dark.text-light {
            background-color: #343a40;
            color: white;
        }
        .navbar-dark .navbar-nav .nav-link {
            color: rgba(255, 255, 255, 0.7);
        }
        .navbar-dark .navbar-nav .nav-link:hover {
            color: rgba(255, 255, 255, 1);
        }
        .navbar-dark .navbar-brand {
            color: rgba(255, 255, 255, 0.7);
        }
        .navbar-dark .navbar-brand:hover {
            color: rgba(255, 255, 255, 1);
        }
        footer {
            background-color: #343a40;
            color: white;
        }
    </style>
</head>
<body class="bg-dark text-light">
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Dr. Hemisha Sheth</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#therapy">Therapy</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <div class="container mt-5">
        <section id="about">
            <h2>About</h2>
            <p>Welcome to the practice of Dr. Hemisha Sheth. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis fringilla leo, in tincidunt velit. Integer consequat faucibus magna, vitae tincidunt justo lobortis sit amet.</p>
        </section>

        <section id="services">
            <h2>Services</h2>
            <div class="card-scroll">
                <div class="card">
                    <img src="test.PNG" class="card-img-top" alt="Musculoskeletal rehabilitation">
                    <div class="card-title">Musculoskeletal rehabilitation</div>
                </div>
                <!-- Add more cards here -->
            </div>
        </section>
        
        <section id="therapy">
            <h2>Therapy</h2>
            <p>Information about the therapy offered by Dr. Hemisha Sheth:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis fringilla leo, in tincidunt velit. Integer consequat faucibus magna, vitae tincidunt justo lobortis sit amet.</p>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <p>Contact Dr. Hemisha Sheth for appointments and inquiries:</p>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
        </section>
    </div>

    <footer class="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Dr. Hemisha Sheth</p>
    </footer>

    <!-- Bootstrap JS and jQuery (required for Bootstrap) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
