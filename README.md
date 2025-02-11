# 📄 Automated Resume PDF Generation & GitHub Release

This repository automates the process of **converting a JSON issue into a resume PDF**, creating a **GitHub Release**, and **storing the public download link in `download_link.txt`**.

---

## 🚀 **How It Works**

1. **Open a new GitHub Issue** and paste your resume data in **JSON format**.
2. **GitHub Actions automatically converts** the JSON into a `resume.pdf`.
3. **A unique timestamp-based tag is created**.
4. **The PDF is uploaded to a GitHub Release**.
5. **A public download link is generated** and stored in `download_link.txt`.
6. **The download link is committed back to the repository**.

---

## 📌 **Prerequisites**

Before you begin, make sure:

- You have a **GitHub repository** with Actions enabled.
- Your **GitHub repository has a workflow file** (`.github/workflows/issue.yml`).
- You create an issue **with valid JSON data**.

---

## 🛠 **GitHub Actions Workflow Overview**

This workflow triggers when **a new issue is opened**.

### **1️⃣ Issue Creation & JSON Parsing**
- When a **new issue** is opened, its **content is extracted**.
- The JSON is **saved as `resume.json`**.

### **2️⃣ Convert JSON to PDF**
- The **`resume.json`** is processed using a script that generates a **formatted PDF**.
- The PDF is saved as `resume.pdf`.

### **3️⃣ Generate a Unique Tag & Create a GitHub Release**
- A **unique timestamp-based tag** (`release-YYYYMMDDHHMMSS`) is created.
- The **`resume.pdf`** is uploaded to a GitHub Release.

### **4️⃣ Store Public Download Link in `download_link.txt`**
- The **GitHub Release download URL** is extracted.
- The URL is saved in **`download_link.txt`**.
- The file is committed back to the repository.

---

## 📝 **Example JSON Issue**

Create a **new issue** in this repository with the following JSON:

```
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "summary": "Experienced Software Engineer...",
  "skills": ["JavaScript", "Node.js", "React", "Puppeteer"],
  "experience": [
    {
      "company": "Tech Corp",
      "position": "Senior Developer",
      "years": "2019 - Present"
    }
  ]
}
```

Once the issue is created, the workflow will **automatically generate a resume PDF and upload it**.

---

## 🔗 **Where to Find the Resume PDF Download Link?**

After the workflow runs successfully:

1. **Check `download_link.txt`** in the repository.
2. The file contains a URL similar to:
   ```
   https://github.com/your-username/your-repo/releases/download/release-YYYYMMDDHHMMSS/resume.pdf
   ```

---

## 🎯 **How to Trigger the Workflow?**

1. **Create an issue** with a JSON-formatted resume.
2. **Wait for GitHub Actions to process the issue.**
3. **Check `download_link.txt`** for the resume PDF download URL.

---

## 🔄 **Workflow Execution Steps**

1. **Trigger:** An issue is opened with JSON data.
2. **Parse JSON:** Extract issue content and save as `resume.json`.
3. **Convert to PDF:** Generate `resume.pdf`.
4. **Create Release:** Generate timestamped tag and create a GitHub Release.
5. **Upload PDF:** Attach `resume.pdf` to the release.
6. **Store Link:** Write public download URL to `download_link.txt`.
7. **Commit Back:** Push `download_link.txt` to the repository.

---

## 🎉 **Congratulations!**

You have successfully automated resume generation using GitHub Actions! 🚀

