---
title: Learn to Use Git and GitHub
date: '2021-09-01'
description: 'No Bullshit guide to learn Git'
---

## Practice Git

Here's Everything that you're going to learn in this tutorial:

- Forking and cloning a remote repository via HTTPS.
- Adding the upstream repository to your local development environment.
- Creating and working with branches.
- Understanding project development and contribution work flows.
- Learning to use basic git commands such as: commit, add, push & pull.
- Pushing the changes to your fork and creating a PR to the upstream repository.

That was a mouthful, follow the steps below to practice!

If you are faced with any issues in moving forward with this tutorial, please raise an issue.

- Click on the Issues tab of this repository.
- Add a title and a description of your issue.
- Create the issue and I will get back as soon as possible.

But first, what in the world is Git?

- It is a version control software that is used to track changes as you make modifications to your file(s).

Yes, it's as simple as that. You can go back in history all the way to your first `commit` and see the changes you've made to your files.

> This is as close as you can get to a time machine - but only for your files and folders.

### Forking and Cloning a remote repository

Before you start working with GitHub, you need to have an account. [Sign up](https://github.com/join) for GitHub and come back here.
Now, go to this link and follow these steps to install Git in your computer:
[Click Here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

If you are using Linux, you could use your package manager to install git directly.

To check if you are done installing Git in your local computer, type the following in your command prompt/terminal:

```sh
git --version
```

If you did everything correctly, you will be prompted with the version of Git
your are running. If not, click the link mentioned above and install it correctly.

After you are done with Installing Git, you need to clone this repository.
For that, follow these steps:

- Click on the green Code button you see and you will get a drop down and copy the specified link.
- Now, open up your command prompt/terminal and execute the following:

```sh
git clone https://github.com/hemanth-kotagiri/practice-git.git
```

- The repository is now cloned in your [current working directory](https://www.computerhope.com/jargon/c/currentd.htm).

With this, you now have a local copy of the repository.

### Adding the upstream repository to your local development environment

It is essential to add the upstream(a fancy way to refer to the original repository that you have cloned) to your local copy.
To do this, follow these steps:

- Make sure that you are in the directory of the cloned repository.
- Type the following command:

```sh
git remote add upstream https://github.com/hemanth-kotagiri/practice-git.git
```

- Now, the upstream repository will be added to your local development environment.
- To check the available remote(s) you have, type the following:

```sh
git remote -v
```

- You will get the following as the output:

```
origin	https://github.com/{YOUR-GITHUB-ID}/practice-git.git (fetch)
origin	https://github.com/{YOUR-GITHUB-ID}/practice-git.git (push)
upstream	https://github.com/hemanth-kotagiri/practice-git.git (fetch)
upstream	https://github.com/hemanth-kotagiri/practice-git.git (push)
```

You are now ready to go for the next step, that is to creating a new branch.

### Creating and working with branches

Branches are, literally just branches to your workflow. You can have multiple
branches for your repository where each branch can have its own name and
possibly, have different code from the main/master branch.
The idea of branches is to move away from the main/master branch and tinker
around and work on new ideas/implementations and use that branch to reference
for raising PRs and `merging` the new changes/implementations to the main/master branch.
Follow these steps on creating a new branch and check-out (A fancy term to say
activate) the same.
To learn more about branches, head over to the [official documentation](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches).

Assuming that you are in the same working directory of the cloned repository.

- Type the following in your command prompt:

```sh
git branch feat-0
```

- Here, `feat-0` is the name of the branch you have just created.
- To see all the branches you have:

```sh
git branch -a
```

- Now, to activate that branch, type the following command:

```sh
git checkout feat-0
```

- You will now be prompted that you have successfully changed your branch to `feat-0`.

### Understanding project development and contribution work flows

Q. Why did we create a new branch, why not just work on the master branch?

- It is always a good practice to modularize the features/implementations that you are working on so that they can be addressed individually by peers who are working with you on the same project.

You as a contributor to any Open Source project are required to follow a set of
contribution guidelines. And creating a branch, and raising PRs using it is
absolutely essential - Which we are covering here.
Usually, for any project, these are the steps taken to add new features/code into a repository.

- Developers will maintain a fork of the upstream repository in their account.
- They then create a new branch with meaningful name.
- Make the changes locally by adding new code/implementations.
- Then, they commit their changes with a meaningful message and push it to their remote origin.
- After that, the developer will go about creating a new Pull Request to the upstream repository.
- Maintainers from the upstream repository will be notified and the changes will be reviewed and accepted/rejected.

You don't have to worry about the last step!

### Learning to use basic git commands such as: `commit`, `add`, `push` & `pull`

These are the four basic commands that you need to be familiar with.
Let us learn these four commands in the fun way. Follow these steps:

Remember we have added an upstream repository? Now, it's time to synchronize that repository with your local copy using the `pull` command.

#### Pull

- Type the following in your command prompt/terminal and make sure you're in the repository directory

```sh
git pull upstream master
```

Q. What does the above command do?

A. It will `pull` the changes/code/implementations of the `upstream`(which is the original repository that you have forked) `master` branch into your local copy.

- Now copy your repository URL and type the following command:

```sh
git remote add origin {YOUR-REPOSITORY-URL}
```

The above will create origin, if at all it doesn't exist.
In this way, you will pull changes from remote repository, either from the upstream or from your origin.
In the case of origin, you would type: `git pull origin master`

#### Add & Commit

You now have all the changes in the upstream repository synchronized with your local copy of the same.
Now, you can simply create a file in the repository and track it's changes.
Follow these:

- Create a new folder in the directory with your name.
- Change directory into that folder that you have just created.
- Now, it's your turn to track any file that you wish to. Be it a file consisting of a poem, story, quote, or more technically - Code.
- Create a new file and write anything within it and make sure, it's saved in the folder that you have created.
- You are now ready for your first commit.

#### Understanding the Staging Area

When you type the following in the command prompt/terminal:

```sh
git status
```

You will be prompted that you have untracked file(s). This is where you move it to the staging area, that is - They are ready to be committed.

Use the `add` command to add particular file(s) to track by the following command:
If you have named the new file as `poem.txt`:

```sh
git add poem.txt
```

Now, if you type this: `git status`, you will see that the files are ready to
be committed. Type the following:

```sh
git commit -m "{MESSAGE}"
```

Use the above command to commit the changes with a message which vaguely describes your changes.

#### Push

Now, type the following to finally push your changes to your remote
branch

```sh
git push -u origin feat-0
```

With this, you have now pushed your new file successfully. To see the changes, head over to your repository in GitHub
and you will see that there's a new branch with new files.

### Creating a Pull Request

To create a pull request, click on the "Create Pull Request" button that you are prompted when you visit your repository in GitHub.
You will now have the ability to add a Title and Description that you can write in Markdown, or plain text also works.
After you are done explaining the changes, click on the Create Button and you are done!

Now, the maintainers of the repository will be notified regarding your PR and they would review it!

> For Precious, with Patience.
