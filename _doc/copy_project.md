# Copy a svelkit project and connect a new gitlab repo


## Create an empty skeleton svelkit project

```
npm create svelte@latest projectDirectory
cd projectDirectory/
```


## Copy the files and directory you need

- First delete the src/ folder, static/ folder, and all files you want to take from the project you are copying (usually delete almost all files at root level like vite.config.js) 
- Copy the src/ folder, static/ folder, and all files you want to take from the project you are copying


## Install npm and check

```
npm install
npm run dev -- --open
```


## Connect a gitlab repo

- First go to github and create a blank repo
  
```
git init .
git remote add origin https://gitlab.com/user/projectDirectory.git
git branch -M main
git push -uf origin main
```

- If you have this error when pushing
```
remote: GitLab: You are not allowed to force push code to a protected branch on this project.
```

- Unprotect the main branch in your gitlab repo settings
[tuto here](https://stackoverflow.com/questions/32246503/fix-gitlab-error-you-are-not-allowed-to-push-code-to-protected-branches-on-thi)

> After all this steps you can push and pull from your new repo without the need of using sudo in local and everyhting should work perfect

