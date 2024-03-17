# CodeBin

CodeBin is a web application designed for developers to easily share and store code snippets with others. It provides a platform where users can quickly paste their code, share it with colleagues or the community, and access it later when needed. CodeBin aims to enhance collaboration and streamline code sharing processes, making it effortless for developers to exchange snippets for various programming tasks.


https://github.com/SameerSahu007/CodeBin/assets/29480670/6dae9954-8fcd-460a-b083-ae5524bbf565


## Features

- **Code Sharing**: Users can paste their code snippets and share them with others via unique URLs.
- **Syntax Highlighting**: CodeBin supports syntax highlighting for various programming languages, ensuring code readability.
- **Search Functionality**: Users can search for specific snippets by keywords or tags to quickly find relevant code.

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Express.js with TypeScript
- **Database**: MongoDB
- **Styling**: Tailwind CSS

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/SameerSahu007/CodeBin.git
    ```

2. Navigate into the project directory:

    ```
    cd codebin
    ```

3. Install dependencies for both the frontend and backend:

    ```
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

4. Set up MongoDB:
   
   - Make sure MongoDB is installed and running on your system.
   - Create a `.env` file in the `backend` directory and add your MongoDB connection URI:

     ```
     MONGODB_URI=your_mongodb_connection_uri
     ```

5. Start the backend server:

    ```
    npm run dev
    ```

6. Start the frontend development server:

    ```
    cd ../frontend
    npm run dev
    ```

7. Open your browser and navigate to `http://localhost:3000` to access CodeBin.

## Contributing

Contributions to CodeBin are welcome! If you'd like to contribute, please fork the repository and submit a pull request with your changes. For major modifications, please open an issue first to discuss the changes you wish to make.

## License

This project is licensed under the [MIT License](LICENSE).

---

