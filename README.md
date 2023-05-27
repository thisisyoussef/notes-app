# Notes App

A simple, yet efficient, command line application that manages user's notes. The Notes App is built using Node.js, and allows you to create, read, update, and delete personal notes in a convenient and fast manner.

## Project Overview

This project includes the following main files:

- `app.js`: The main file that contains the core logic of the application.
- `notes.js`: A module that handles note-related operations such as adding, removing, and listing notes.
- `notes.json`: A JSON file that is used for storing notes data.
- `utils.js`: A utility file for additional functions that might be needed.
- `package.json` and `package-lock.json`: These files include the project's dependencies information and other relevant information.
- `task-manager`: A directory containing task manager project files (currently under development).

## Installation Instructions

1. You need to have Node.js installed on your machine. You can download Node.js [here](https://nodejs.org/en/download/).

2. Clone the repository:

```bash
git clone https://github.com/thisisyoussef/notes-app.git
```

3. Change to the directory:

```bash
cd notes-app
```

4. Install required dependencies:

```bash
npm install
```

## Usage Guide

To use the Notes App, execute the following command in the terminal:

```bash
node app.js <command> [options]
```

Here, `<command>` can be one of the following:

- `add`: Add a new note.
- `remove`: Remove a note.
- `list`: List all notes.
- `read`: Read a specific note.

The `[options]` depends on the command you are using:

### Add a note

```bash
node app.js add --title="Note Title" --body="Note Body"
```

### Remove a note

```bash
node app.js remove --title="Note Title"
```

### List all notes

```bash
node app.js list
```

### Read a specific note

```bash
node app.js read --title="Note Title"
```

## Features and Functionality

- Create, read, update, and delete notes (CRUD operations).
- JSON file for data storage, ensuring both speed and flexibility.
- Easy-to-use command line interface.
- Efficient and lightweight, built using Node.js.

## Contributing Guidelines

We welcome contributions from the community! If you'd like to contribute to the project, please follow the general guidelines below:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit and push your changes.
4. Create a pull request.

For more detailed guidelines, please refer to our [contributing guidelines](CONTRIBUTING.md).

## License Information

This project is licensed under the [MIT License](LICENSE).

## Contact Information

If you have any questions or suggestions, please feel free to reach out to the repository owner:

- [This is Youssef](https://github.com/thisisyoussef)

Please also feel free to open an issue in the GitHub repository if you encounter any problems or have feature requests.