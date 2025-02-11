
# **📄 Generate a PDF from a GitHub Issue**  

This repository contains a **GitHub Actions** workflow that automatically generates a **PDF from an issue body** whenever a new issue is created. The PDF is then uploaded to GitHub Releases, providing a download link.

---

## **🛠️ How It Works**  
1. A user creates a **new issue** with structured JSON content.  
2. GitHub Actions triggers a **workflow** that:  
   - Extracts the **issue body** and saves it as `resume.json`.  
   - **Validates** the JSON structure.  
   - Converts the JSON into an **HTML resume** using `resumed`.  
   - Transforms the HTML into a **PDF** using `puppeteer`.  
   - Commits the **generated PDF** to the repository.  
   - Uploads the PDF to **GitHub Releases** for easy downloading.  
3. The user receives a **download link** for the generated PDF.

---

## **🚀 How to Use This Workflow**  

### **1️⃣ Create a New Issue**  
1. Navigate to the **"Issues"** tab in your GitHub repository.  
2. Click **"New Issue"** and provide:  
   - A **title** (e.g., "Generate Resume PDF")  
   - A **body** with structured JSON data (see example below).  
3. Click **"Submit new issue"**.  

---

## **📌 Issue Body Format (Example JSON)**  

```json
{
  "basics": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "summary": "Experienced software engineer with expertise in web development."
  },
  "work": [
    {
      "company": "Tech Corp",
      "position": "Senior Developer",
      "startDate": "2020-01-01",
      "endDate": "2023-12-31",
      "summary": "Developed and maintained web applications using JavaScript and Node.js."
    }
  ],
  "education": [
    {
      "institution": "XYZ University",
      "degree": "BSc in Computer Science",
      "startDate": "2016-09-01",
      "endDate": "2020-06-30"
    }
  ]
}
```

---

## **🎯 What Happens After You Create an Issue?**  
- The workflow starts **automatically**.  
- It **parses** the JSON and **converts** it into a resume-style PDF.  
- The PDF is **uploaded to GitHub Releases**.  
- You will receive a **download link** in the "Releases" section.

---

## **🔗 How to Download the Generated PDF**  
1. Go to the **"Releases"** section of the repository.  
   - Click **[Releases](../../releases)** to view all uploaded PDFs.  
2. Find the latest release with a timestamp-based **tag** (e.g., `v20240210153045`).  
3. Click the **PDF file** to download it.  

---

## **📜 Workflow Breakdown**  

The **workflow** that enables this process is stored in `.github/workflows/issue.yml`. Here’s what each step does:

| Step | Description |
|------|-------------|
| **Clone Repository** | Checks out the repository to access files. |
| **Install Node.js** | Sets up Node.js for package management. |
| **Initialize Project** | Runs `npm init -y` to create a package.json file. |
| **Install Dependencies** | Installs `resumed` and a resume theme. |
| **Extract Issue Body** | Saves the issue body as `resume.json`. |
| **Validate JSON** | Ensures the JSON follows the resume schema. |
| **Generate HTML** | Converts `resume.json` into an HTML file. |
| **Convert HTML to PDF** | Uses `puppeteer` to generate a PDF. |
| **Commit and Push PDF** | Adds the PDF to the repository. |
| **Create Git Tag** | Generates a versioned tag for tracking. |
| **Upload PDF to GitHub Releases** | Makes the PDF available for download. |

## **🛠️ Troubleshooting**  

| Problem | Solution |
|---------|----------|
| **PDF is not generated** | Check the **"Actions"** tab in GitHub for workflow logs. |
| **Invalid JSON error** | Ensure your issue body follows **valid JSON format**. |
| **Download link not appearing** | Refresh the **Releases** page or check the workflow logs. |
| **Permissions error when pushing changes** | Ensure the GitHub token has the right repository permissions. |

---

## **🎉 Conclusion**  
This workflow **automates resume PDF generation** from GitHub issues. It helps streamline resume creation by converting structured JSON into a formatted PDF with zero manual intervention.

🔥 **Now, try creating an issue and get your resume in seconds!** 🚀

