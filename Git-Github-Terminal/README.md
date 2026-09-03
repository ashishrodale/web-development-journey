# Command Line & Version Control Mastery

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Terminal](https://img.shields.io/badge/Terminal-4D4D4D?style=for-the-badge&logo=gnu-bash&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

> Comprehensive documentation and hands-on reference covering Command Line Interface (CLI) navigation, Git version control, branching strategies, merge conflict resolution, and remote GitHub repository synchronization.

---

## 📌 Core Concepts Mastered

* **Command Line Navigation:** File system traversal, directory management, absolute vs. relative paths, and flags.
* **Version Control Workflows:** Tracking local changes across staging areas, working trees, and commit histories.
* **Branching & Merging:** Isolated feature development, fast-forward merges, and resolving manual merge conflicts.
* **Remote Sync:** Linking local projects to GitHub, pushing/pulling branches, cloning, and managing upstream remotes (`origin`).
* **Collaboration Basics:** Repository forking, pull requests (PRs), and upstream branch synchronization.

---

## 💻 Module Breakdown & Quick Links

| Module | Core Topics Covered | Tools Used | Direct Link |
| :--- | :--- | :--- | :--- |
| **01. Terminal Basics** | Pathing, File/Folder creation, Deletion, Flags, Git Bash | Git Bash, Zsh | [View Notes](./01-Terminal-Basics/terminal_commands_notes.sh) |
| **02. Git & GitHub** | Repositories, Staging, Commits, Branching, Merging, Forking | Git CLI, GitHub | [View Notes](./02-Git-And-GitHub/git_cheat_sheet_notes.md) |

---

## 🛠️ Essential Terminal Command Reference

| Command | Scope | Description / Function | Example Usage |
| :--- | :--- | :--- | :--- |
| `pwd` | Navigation | Prints current absolute working directory path | `pwd` |
| `ls` | Inspection | Lists files/directories in current path | `ls -la` |
| `cd` | Navigation | Changes working directory | `cd ./project` |
| `mkdir` | Management | Creates a new directory | `mkdir my-app` |
| `touch` | Management | Creates a new empty file | `touch index.html` |
| `rm` | Management | Removes/deletes a specified file | `rm style.css` |
| `rm -rf` | Management | Recursively deletes a directory and contents | `rm -rf old-dir` |

---

## 🚀 Git Command Cheat Sheet

| Stage | Command | Purpose / Description |
| :--- | :--- | :--- |
| **Config** | `git config --global user.name "<name>"` | Sets global user name for commit history |
| **Init** | `git init` | Initializes a new local Git repository |
| **Status** | `git status` | Displays working directory and staging area state |
| **Staging** | `git add <file>` | Moves specified file to staging environment |
| **Staging** | `git add .` | Stages all modified, deleted, and untracked files |
| **Commit** | `git commit -m "<message>"` | Saves staged snapshot into commit history |
| **Branching** | `git branch` | Lists all local branches |
| **Branching** | `git checkout -b <branch>` | Creates and switches to a new branch |
| **Merging** | `git merge <branch>` | Merges target branch into current active branch |
| **Remote** | `git push -u origin <branch>` | Uploads local branch commits to remote GitHub repository |
| **Remote** | `git pull origin <branch>` | Fetches and integrates changes from remote repository |
| **Clone** | `git clone <repo-url>` | Clones remote repository to local system |

---

## ⚙️ Standard Production Development Loop

```bash
# 1. Check current branch state
git status

# 2. Stage updated files
git add .

# 3. Save commit snapshot with descriptive message
git commit -m "feat: complete terminal and git setup documentation"

# 4. Push updates to GitHub main branch
git push origin main
