```bash
#!/bin/bash
# ==========================================================
# MODULE 01: TERMINAL & COMMAND LINE INTERFACE NOTES
# ==========================================================

# 1. Checking Working Directory
pwd

# 2. Listing Files and Directories
ls          # Basic list
ls -l       # Detailed list (permissions, size, date)
ls -a       # List all including hidden files (.gitignore, etc.)
ls -la      # Detailed list including hidden files

# 3. Directory Navigation
cd ..       # Move up one folder level
cd ~        # Navigate to home directory
cd -        # Switch to previous directory

# 4. File & Folder Operations
mkdir 01-Terminal-Basics
touch notes.txt index.html style.css
rm notes.txt
rm -rf 01-Terminal-Basics
