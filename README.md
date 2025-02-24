# 📄 Automated Resume PDF Generation & GitHub Release

This repository automates the process of **converting a JSON issue into a resume PDF**, creating a **GitHub Release**, and **sending a link to download the resume to the email provided in the JSON**.

---

## 🚀 **How It Works**

1. **Open a new GitHub Issue** and paste your resume data in **JSON format**.
2. **GitHub Actions automatically converts** the JSON into a `resume.pdf`.
3. **A unique timestamp-based tag is created**.
4. **The PDF is uploaded to a GitHub Release**.
5. **A link to download the resume is sent to the email provided in the JSON**.

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

### **4️⃣ Send Resume Download Link via Email**
- The email provided in the JSON is extracted.
- A **download link for the resume PDF** is sent to that email automatically.

---

## 📝 **Example JSON Issue**

Create a **new issue** in this repository with the following JSON:

```
{
  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "image": "",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "url": "https://johndoe.com",
    "summary": "A summary of John Doe…",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [{
      "network": "Twitter",
      "username": "john",
      "url": "https://twitter.com/john"
    }]
  },
  "work": [{
    "name": "Company",
    "position": "President",
    "url": "https://company.com",
    "startDate": "2013-01-01",
    "endDate": "2014-01-01",
    "summary": "Description…",
    "highlights": [
      "Started the company"
    ]
  }],
  "volunteer": [{
    "organization": "Organization",
    "position": "Volunteer",
    "url": "https://organization.com/",
    "startDate": "2012-01-01",
    "endDate": "2013-01-01",
    "summary": "Description…",
    "highlights": [
      "Awarded 'Volunteer of the Month'"
    ]
  }],
  "education": [{
    "institution": "University",
    "url": "https://institution.com/",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "score": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "awards": [{
    "title": "Award",
    "date": "2014-11-01",
    "awarder": "Company",
    "summary": "There is no spoon."
  }],
  "certificates": [{
    "name": "Certificate",
    "date": "2021-11-07",
    "issuer": "Company",
    "url": "https://certificate.com"
  }],
  "publications": [{
    "name": "Publication",
    "publisher": "Company",
    "releaseDate": "2014-10-01",
    "url": "https://publication.com",
    "summary": "Description…"
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "references": [{
    "name": "Jane Doe",
    "reference": "Reference…"
  }],
  "projects": [{
    "name": "Project",
    "startDate": "2019-01-01",
    "endDate": "2021-01-01",
    "description": "Description...",
    "highlights": [
      "Won award at AIHacks 2016"
    ],
    "url": "https://project.com/"
  }]
}
```

Users should use this template to create their own resume JSON.

---

## 🎯 **How to Trigger the Workflow?**

1. **Create an issue** with a JSON-formatted resume.
2. **Wait for GitHub Actions to process the issue.**
3. **Check your email** for the resume download link.

---

## 🎉 **Congratulations!**

You have successfully automated resume generation using GitHub Actions! 🚀

