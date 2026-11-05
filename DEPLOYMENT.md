# Deployment Guide — Techzone Learning Academy

This website is ready to go live. No database is needed and no environment
variables are needed. The admission form sends applications through WhatsApp
and Email, so the site works as a normal static website.

## Option A — Deploy free on Vercel (recommended)

Vercel is made by the team behind Next.js, so it is the simplest place to
host this site. You need a free GitHub account and a free Vercel account.

### Step 1 — Put the project on GitHub

1. Go to https://github.com and sign in (or create a free account).
2. Create a new repository, for example `techzone-learning-academy`.
   Leave it empty — do not add a README or a licence file.
3. On your computer, open a terminal inside this project folder and run:

```bash
git init
git add .
git commit -m "Techzone Learning Academy website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/techzone-learning-academy.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to sign
in, use your GitHub username and a personal access token as the password.

### Step 2 — Import the project in Vercel

1. Go to https://vercel.com and sign in with GitHub (or create a free
   account with the same GitHub account).
2. Click **Add New → Project**.
3. Choose the `techzone-learning-academy` repository and click **Import**.
4. Vercel detects Next.js automatically. Leave every setting as it is —
   no environment variables are needed.
5. Click **Deploy**.

### Step 3 — Your live website

After 1–2 minutes Vercel shows a live link, for example:

```
https://techzone-learning-academy.vercel.app
```

That link is your real, public website. Share it anywhere — on WhatsApp,
Instagram, Facebook, or printed on a poster. Anyone in the world can open
it. To change the address later, add your own domain in Vercel under
**Settings → Domains** (a domain is optional, the Vercel link works on its
own).

### Updating the live site

Change anything in the project, then push it to GitHub:

```bash
git add .
git commit -m "Describe your change"
git push
```

Vercel rebuilds and updates the live site automatically within a couple of
minutes. You do not need to deploy again by hand.

## Option B — View the website on your own laptop

This is how to see the real website on your own computer and phone. The
project folder on its own is only code — the website appears only when the
Next.js server is running.

### Step 1 — Install Node.js

1. Go to https://nodejs.org and download **Node.js LTS** for Windows.
2. Install it with all the default settings, then restart your computer.

### Step 2 — Run the website

1. Copy this whole project folder to your laptop.
2. Open a terminal (PowerShell or Command Prompt) inside the project folder.
3. Run this once to install everything the site needs:

```bash
npm install
```

4. Then start the website:

```bash
npm run dev -- --hostname 0.0.0.0 --port 3101
```

5. Open your browser and go to:

```
http://localhost:3101
```

That is your website, running on your own laptop.

### Step 3 — View it on your phone (same Wi-Fi only)

Your phone must be connected to the **same Wi-Fi network** as your laptop.

1. On your laptop, press `Win + R`, type `cmd`, press Enter, then type:

```bash
ipconfig
```

2. Find **IPv4 Address** under your Wi-Fi adapter, for example
   `192.168.1.5`. (Never guess this number — use the one `ipconfig` shows.)
3. On your phone's browser, open:

```
http://192.168.1.5:3101
```

Replace `192.168.1.5` with your laptop's own IPv4 address. If the page does
not load, allow Node.js through Windows Firewall when Windows asks, on
**Private** networks.

### Important

- A `localhost` link only works on the computer running the server. It does
  **not** work on your phone or on anyone else's device. For a link that
  works everywhere, use Option A (Vercel).
- When you close the terminal, the website on your laptop stops. Start it
  again with the same `npm run dev` command whenever you want to see it.

## How the admission form works

The **Apply Now** page (`/apply`) is a real, working form. There is no
database yet, and that is stated honestly on the form page itself. When a
visitor submits the form, their details are prepared as a WhatsApp message
to +92 330 3094425 — they press Send on WhatsApp to submit it. They can
also choose **Send by Email**, which opens an email to
techzone.learning@gmail.com with the same details.

## Project facts

- Next.js 14.2.5, React 18, TypeScript, Tailwind CSS 3.4.1
- Framer Motion, Three.js + React Three Fiber (3D hero only)
- lucide-react 0.454.0 (pinned — do not upgrade to 1.x)
- 21 courses, each with its own detail page at `/courses/[slug]`
- Admission form at `/apply`
- No database, no environment variables, no paid services needed
