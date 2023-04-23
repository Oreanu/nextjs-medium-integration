# [NextJS MEDIUM INTEGRATION]

This is a Next.js application that retrieves Medium posts using the Medium API through a custom service file. The project is built with React and uses the `react-query` library for fetching data.

## Getting Started

To get started with this project, you will need an API key for the Medium API. Here are the steps to get your API key:

1. Go to [nocodeapi.com](https://nocodeapi.com) and sign up for an account.
2. Once you are logged in, navigate to the Medium API page and click on "Connect" to connect your Medium account.
3. Follow the steps to authenticate your Medium account and obtain an API key.
4. Copy your API key and store it in a safe place.

## Installation

To install this project on your local machine, follow these steps:

1. Clone this repository to your local machine using your preferred method.
2. Navigate to the root directory of the project.
3. Create a new file called `.env.local` and add the following lines:

MEDIUM_USERNAME=your_medium_username
MEDIUM_API_KEY=your_medium_api_key


4. Replace `your_medium_username` with your Medium username and `your_medium_api_key` with your Medium API key.
5. Run `npm install` to install the dependencies.
6. Run `npm run dev` to start the development server.
7. Navigate to `http://localhost:3000` in your web browser to view the application.

## Usage

The application consists of two pages: the home page and the article page.

The home page displays a list of all the Medium posts retrieved from the Medium API. Each post shows the post title and publication date. Clicking on the "Read more" link takes you to the corresponding article page.

The article page displays the full content of a single Medium post. The article title and publication date are also displayed.

## Contributing

Contributions to this project are always welcome! If you would like to contribute, please follow these steps:

1. Fork this repository to your own account.
2. Clone the repository to your local machine using your preferred method.
3. Create a new branch for your changes.
4. Make your changes and commit them with a descriptive commit message.
5. Push your changes to your forked repository.
6. Open a pull request to this repository with a description of your changes.

## Contact

If you have any questions or comments about this project, please feel free to contact [Oreanu](mailto:olayemioreanu@gmail.com).
