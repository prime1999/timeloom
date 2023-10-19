# Contributing to Timeloom

Thank you for your interest in contributing to Timeloom! We welcome contributions from the open-source community. To ensure a smooth collaboration, please follow these guidelines when making contributions to the project.

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Project Status](#project-status)
4. [Getting Started](#getting-started)
5. [Contribution Guidelines](#contribution-guidelines)
      - [Types of Contributions](#types-of-contributions)
      - [Quality Standards](#quality-standards)
      - [Code of Conduct](#code-of-conduct)
6. [Submitting Your Contributions](#submitting-your-contributions)
7. [Additional Information](#additional-information)

## Introduction

Timeloom is a web application that allows users to document their technical journey on the activity timeline-style page and showcase it to the world. The main objective is to make it easier for users to document their successes and failures easily.

I started building this application as a part of Buildspace's Nights and Weekends S4 program. Currently, this is in the building phase, and I have launched the waitlist for the beta version. The whole application will be open source, and I am building it in public. The waitlist and the toy version are available at [Timeloom on Vercel](https://timeloom.vercel.app/).

## Technologies

The Timeloom project is built using the following technologies:

- Next.js
- Tailwind CSS
- TypeScript

## Project Status

As mentioned earlier, this project is currently in the Build Phase. You can have a basic idea of what the final application is going to be like by looking at the toy version. The waitlist is up and running, and you can sign up for the beta version.

## Getting Started

Before you start contributing to Timeloom, please make sure to follow these steps:

1. Create a GitHub account: If you don't have a GitHub account, create one at [GitHub](https://github.com/).

2. Register for Hacktoberfest: Register for Hacktoberfest on the [official website](https://hacktoberfest.digitalocean.com/).

3. Choose Projects to Contribute: Browse through the Hacktoberfest projects on the official website, or find other open source projects you're interested in contributing to.

## Contribution Guidelines

### Types of Contributions

You can contribute in various ways, including but not limited to:

- Code Contributions: Implementing new features, fixing bugs, and optimizing code.
- Documentation Improvements: Enhancing project documentation, tutorials, or adding new examples.
- Issue Reporting: Reporting bugs, suggesting enhancements, or improving issue descriptions.
- Code Reviews: Providing constructive feedback on pull requests.

### Quality Standards

- Maintain Code Quality: Follow the project's coding guidelines and best practices.
- Test Your Code: Ensure that your contributions are thoroughly tested and do not break existing functionality.
- Documentation: Clearly document your code, changes, and additions.
- Respect Licensing: Respect and adhere to the project's licensing terms.

### Code of Conduct

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) when participating in Timeloom. We encourage a respectful and inclusive environment for all contributors.

## Submitting Your Contributions

STEP 1: Fork the repository to your GitHub account.

- Navigate to the repository you want to contribute to on GitHub. Click the "Fork" button in the top right corner of the repository's page. This will create a copy of the repository in your GitHub account.

STEP 2: Clone the Repository

1. On GitHub.com, navigate to the main page of the repository.

2. Above the list of files, click  Code.

![Clone-Repo-1.](/assets/contributing-img/click-on-Code.png "Clone-repo-1")

3. Copy the URL for the repository.

- To clone the repository using HTTPS, under "HTTPS", copy.
- To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then copy.
- To clone a repository using GitHub CLI, click GitHub CLI, then copy.

![Clone-Repo-2.](/assets/contributing-img/copy-repo-url.png "Clone-repo-2")

4. Open Git Bash.

5. Change the current working directory to the location where you want the cloned directory.

6. Type git clone, and then paste the URL you copied earlier.

```sh
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter to create your local clone.

```sh
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

STEP 3: Create a new branch for your contributions.

- Navigate into the cloned repository's directory using the cd command and create a new branch for your contributions:

```sh
cd repository-name
git checkout -b new-branch-name
```

STEP 4: Make your changes.

- Make the necessary changes to the code, documentation, or any other contributions as specified by the project.

STEP 5: Commit and changes to your repository.

- Once you've made your changes, commit them using the following commands:

```sh
git add .
git commit -m "Description of your changes"
```

STEP 6: Push Your Changes.

- Push your changes to your forked repository on GitHub.

```sh
git push origin new-branch-name
```

STEP 7: Create a pull request to the original repository, clearly describing your contribution.

- Go to the original repository on GitHub and click on the "New Pull Request" button. This will allow you to create a pull request from your forked repository to the original repository. Be sure to describe your contribution in the pull request.

7. Your pull request will be reviewed by maintainers, and any necessary feedback will be provided.

## Additional Information

For additional questions or support, you can:

Visit the [Hacktoberfest official website](https://hacktoberfest.com) for event details.
Reach out to project maintainers for specific project-related inquiries.
Thank you for contributing to Hacktoberfest 2023! Happy coding! 🖥️
