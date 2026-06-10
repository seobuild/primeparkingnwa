import { PageContent } from "../types";

export const tenantLoginPage: PageContent = {
  slug: "tenant-login-instructions",
  title: "How to Use the Tenant Portal | Prime Parking NWA",
  description:
    "A complete step-by-step guide to using the Prime Parking NWA tenant portal. Log in, pay invoices, sign agreements, and manage your account online.",
  canonical: "/tenant-login-instructions",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/aerial-view.png",
        alt: "Prime Parking NWA paved parking facility",
      },
      backgroundOverlay: 0.45,
      title: "How to Use\nThe Tenant Portal",
      description:
        "Everything you need to know to log in, pay your bill, and manage your storage account -- all in one place.",
      align: "center",
      buttons: [
        {
          label: "Open Tenant Portal",
          href: "https://rent.primeparkingnwa.com/account/login",
          variant: "primary",
          external: true,
        },
        {
          label: "(479) 640-7396",
          href: "tel:4796407396",
          variant: "outline",
        },
      ],
    },
    {
      type: "info-bar",
      items: [
        {
          icon: "building",
          title: "Pay Online",
          description:
            "Pay invoices, set up auto-pay, and view payment history.",
        },
        {
          icon: "shield",
          title: "Sign Agreements",
          description:
            "View and digitally sign your rental agreements anytime.",
        },
        {
          icon: "calendar",
          title: "Manage Your Account",
          description:
            "Update your contact info, vehicle details, and unit settings.",
        },
        {
          icon: "thumbs-up",
          title: "Message Management",
          description:
            "Send messages, request gate codes, and get support directly.",
        },
      ],
    },
    {
      type: "content",
      title: "Getting Started",
      body: `## Step 1: Open the Portal

Go to our website: [www.primeparkingnwa.com](https://www.primeparkingnwa.com)

Click the **Tenant Portal** button at the top of the page. This opens the secure login page in a new tab so you do not lose your place on the site.

Alternatively, you can go directly to the [Tenant Portal Login Page](https://rent.primeparkingnwa.com/account/login).

## Step 2: Set Up or Access Your Account

Choose the option that applies to you:

**Option A -- New Renters**

When you rent a unit online, you will be prompted to enter your personal information and create a password as part of the rental form.

If you already created a password during checkout, you do NOT need to reset it. Skip to Step 3 and log in with the email and password you just created.

**Option B -- Existing Tenants**

If you rented previously and do not have a password (or forgot it), follow these steps:

1. On the login page, click **Forgot Password**
2. Enter the email address we have on file (the one used on your rental agreement)
3. Click **Send Reset Link**
4. Check your email for a message from Prime Parking NWA with the subject "Set Your Password"
   - If you do not see it, check your spam or junk folder
5. Click the **Set Password** link in the email
6. Create and confirm your new password
7. Click **Save / Confirm**

## Step 3: Log In

1. Return to the [Tenant Portal login page](https://rent.primeparkingnwa.com/account/login)
2. Enter your email and password
3. Click **Log In**

You are now in your dashboard.`,
      align: "left",
      maxWidth: "lg",
    },
    {
      type: "content",
      title: "Using Your Dashboard",
      body: `## Step 4: Dashboard Overview

Once logged in, your dashboard gives you full control of your account. Here is what you will see:

- **My Units** -- your current unit(s) and details
- **Invoices** -- all your bills and payment history
- **Agreements** -- rental contracts and documents
- **Messages** -- contact management and support
- **Account Settings** -- update your personal information

## Step 5: Pay an Invoice

1. Click **Invoices** in the menu
2. Find the invoice you want to pay
3. Click **Pay Now**
4. Enter your card information (or select a saved card)
5. Click **Submit / Confirm Payment**

You will receive a confirmation email automatically.

## Step 6: View and Sign Rental Agreements

1. Click **Agreements** in the menu
2. Click **View** next to the document you want
3. Read the agreement carefully
4. Click **Sign** and follow the on-screen instructions
5. Download a PDF copy for your records

## Step 7: Update Your Account and Vehicle Info

1. Click **Account Settings**
2. Update your phone, email, or vehicle information
3. Click **Save**

Keeping this information current helps with gate access and notifications.`,
      align: "left",
      maxWidth: "lg",
    },
    {
      type: "content",
      title: "Gate Codes and Support",
      body: `## Step 8: Get Your Gate Code

For security, do not share your gate code with anyone.

To request your code:
1. Click **Messages** in your dashboard
2. Click **New Message**
3. Include your unit number and vehicle information
4. Management will respond with your gate code

## Step 9: Contact Management or Support

1. Click **Messages** in your dashboard
2. Click **New Message**
3. Enter your question or issue
4. Attach photos if needed (for example, a problem with your unit)
5. Click **Send**

Management will respond in the portal and via email.

## Step 10: Stay on Top of Notifications

You will automatically receive:
- Invoice reminders
- Payment confirmations
- Important facility updates

Make sure your email is correct in Account Settings. If you are not receiving notifications, check your spam or junk folder.`,
      align: "left",
      maxWidth: "lg",
    },

  ],
};
