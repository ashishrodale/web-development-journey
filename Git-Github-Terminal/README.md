# Command Line & Version Control Mastery

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Terminal](https://img.shields.io/badge/Terminal-4D4D4D?style=for-the-badge&logo=gnu-bash&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

> Comprehensive documentation and hands-on implementation covering Command Line Interface (CLI) navigation, Git version control, branching strategies, merge conflict resolution, and remote GitHub synchronization.

---

## 📌 Core Concepts Mastered

* **Command Line Operations:** Navigating filesystem trees using relative/absolute paths, managing directories, creating files, and using flags.
* **Version Control Workflows:** Tracking local changes across staging areas, working trees, and commit histories.
* **Branching & Merging:** Isolated feature development, fast-forward merges, non-fast-forward merges, and manual merge conflict resolution.
* **Remote Repository Operations:** Linking local projects to GitHub, pushing/pulling branches, cloning, and upstream tracking (`origin`).
* **Open Source Collaboration:** Understanding repository forking, pull requests (PRs), and upstream branch synchronization.

---

## 💻 Module Breakdown & Quick Links

| Module | Core Topics | Key Tools | Status | Direct Link |
| :--- | :--- | :--- | :--- | :--- |
| **01. Terminal & CLI Basics** | Navigation, File Management, Pathing, Flags | Git Bash, Zsh, Terminal | Completed | [View Module](./01-Terminal-Basics/) |
| **02. Git & GitHub Fundamentals** | Repositories, Staging, Commits, GitHub Sync | Git CLI, GitHub | Completed | [View Module](./02-Git-And-GitHub/) |

---

## 🛠️ Essential Terminal Command Reference

| Command | Category | Description / Function | Example Usage |
| :--- | :--- | :--- | :--- |
| `pwd` | Navigation | Prints current absolute working directory | `pwd` |
| `ls` | Inspection | Lists files and directories (flags: `-a`, `-l`) | `ls -la` |
| `cd` | Navigation | Changes working directory | `cd ./project-folder` |
| `mkdir` | Management | Creates a new directory | `mkdir my-app` |
| `touch` | Management | Creates a new empty file | `touch index.html` |
| `rm` | Management | Deletes a file | `rm script.js` |
| `rm -rf` | Management | Recursively deletes a directory and its contents | `rm -rf old-folder` |

---

## 🚀 Git Cheat Sheet & Workflow Commands

| Stage / Scope | Command | Purpose / Function |
| :--- | :--- | :--- |
| **Configuration** | `git config --global user.name "<name>"` | Sets global user name for commit history |
| **Initialization** | `git init` | Initializes a new Git repository locally |
| **Inspection** | `git status` | Displays working directory and staging area state |
| **Staging** | `git add <file>` | Moves file changes from working directory to staging |
| **Staging** | `git add .` | Stages all modified, deleted, and untracked files |
| **Commit** | `git commit -m "<message>"` | Records staged snapshot into commit history |
| **Branching** | `git branch` | Lists all local branches in the repository |
| **Branching** | `git checkout -b <branch>` | Creates and checks out a new branch |
| **Merging** | `git merge <branch>` | Merges specified branch into the current active branch |
| **Remote Sync** | `git push -u origin <branch>` | Pushes local branch updates to remote repository |
| **Remote Sync** | `git pull origin <branch>` | Fetches and integrates changes from remote repository |
| **Cloning** | `git clone <repo-url>` | Clones remote repository to local system |

---

## ⚙️ Standard Production Development Loop

```bash
# 1. Check working directory status
git status

# 2. Stage all updated files
git add .

# 3. Commit staged files with semantic message
git commit -m "feat: add user authentication layout"

# 4. Push updates to target GitHub branch
git push origin main
