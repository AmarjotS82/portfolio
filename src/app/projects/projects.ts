// Month starts ar 0 so January = 0 and December = 11
export  const projects: Project[] = [
    {
        name: "Quizard",
        overview: "A flashcard app that provides AI feedback",
        description:
            "Quizard is an innovative flashcard application that provides AI feedback. It features an integrated frontend that allows users to quiz themselves and receive feedback on their answers thorugh the backend. The project included comprehensive testing using Playwright to validate React components and UI functionality.We collaborated through feedback , pull requests, and integration using GitHub.",
        languages: ["react", "TypeScript", "Python", "tailwind"],
        githubRepo: "https://github.com/edgarcoime/quizard",
        members:5,
        startDate: "September 2024", 
        endDate: "December 2024",
    },
    {
        name: "Reliable Protocol TCP Client Server",
        overview: "reliable protocol that helps achieve reliable data transmission",
        description:
            "A reliable protocol using concepts that make TCP reliable like retransmission that helps achieve reliable data transmission that was tested through a client server socket communication with a malicious proxy in between that can drop and delay packets in both directions from the client or server",
        languages: ["Python"],
        githubRepo: "https://github.com/AyyyTran/TCPClientServer",
        members:2,
        startDate:"November 2024", 
        endDate:"December 2024",
    },
    {
        name: "IPS Project Tracking Tool",
        overview: "Track and report company-specific projects",
        description:
            "The IPS Project Tracking Tool was developed to track and report on company-specific projects with a granular focus on task-level metrics. Working togehther as a group and with the company's software engineers we created a tool that helped stermline and speed up heir excel based tracking thorugh interactive forms and UI to easily see metrics.",
        languages: ["TypeScript", "React", "tailwind", "Vercel"],
        members:5,
        startDate:"Febuary 2024", 
        endDate:"April 2024",
    },
    {
        name: "Desktop App Pagi GUI",
        overview: "GUI to make training the PAGI AI model easier",
        description:
            "This Desktop App was created for a more user-friendly experience in training the PAGI AI model by replacing the command-line interface with a graphical user interface. We created several features such as CPU and GPU utilization while the training is happening as well as various ways to input the data needed to start training.",
        languages: ["TypeScript", "Rust", "Tauri", "Python", "tailwind"],
        members: 6,
        startDate: "May 2024", 
        endDate: "June 2024",
    },
    {
        name: "Project Qazaur",
        overview: "A multiplayer real-time free-for-all spaceship game",
        description:
            "Project Qazaur is a multiplayer real-time spaceship game where players can enter their usernames, select ships, and choose bullet types to then play the game. The project involved managing game states to ensure a smooth transition from the menus, lobby, and in-game. Collaboration with a large team of 19 required extensive feedback and active participation in reviewing pull requests on GitHub.",
        languages: ["Elixir", "Phoenix", "JavaScript"],
        githubRepo: "https://github.com/MikeSusutZZ/Project-Quazar",
        members: 19,
        startDate: "March 2024", 
        endDate: "April 2024",
    },
    // {
    //     name: "Law AI",
    //     overview: "Web application that uses AI to give a verdict by using custom made endpoints",
    //     description:
    //         "This web application utilizes AI to provide verdicts by communicating with the backend through API calls to various endpoints. The landing page was created using React, enabling seamless interaction with the backend database.",
    //     languages: ["React", "JavaScript", "tailwind", "Python"],
    //     githubRepo: "https://github.com/shawnbirring/4537-term-project",
    //     members: 4,
    //     startDate: "March 2024", 
    //     endDate: "April 2024",
    // },
    {
        name: "Wave Assault",
        overview: "wave shooter game where you survive for as long as possible",
        description:
            "Wave Assault, developed as a final project, is a game that showcases the effective use of Git for managing branches, pull requests, and issues. The project involved collaboration within a group of five, where team members provided valuable suggestions and improved the game through constructive feedback. By the end of the project I had a better understanding of  Object-Oriented Principles and the SOLID principles.",
        languages: ["Java", "Processing"],
        githubRepo: "https://github.com/COMP2522/project-bombpers",
        members: 19,
        startDate: "March 2023", 
        endDate: "April 2023", 
    },
    // {
    //     name: "Disney Character Mobile App",
    //     overview: "Display API data with a clean UI",
    //     description:
    //         "The Disney Character Mobile App displays API data with a clean user interface. By utilizing data from an API, the application showcases the various forms of media each character appears in, along with other characters associated with those works. The development process included serialization and deserialization of data using the Ktor library, effective state management to separate the Data layer from the UI layer, and leveraging the Jetpack Compose Lifecycle alongside the Material3 Library to create UI elements such as a Top Bar.",
    //     languages: ["Kotlin"],
    // },
];