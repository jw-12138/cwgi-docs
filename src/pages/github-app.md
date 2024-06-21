---
layout: '../layouts/Page.astro'
---

To make the comment system work, we need a mechanism to authenticate GitHub users, in this project, we use [GitHub Apps](https://docs.github.com/en/apps).

## Create a GitHub App

Go to [github.com/settings/apps/new](https://github.com/settings/apps/new) to create a new app. Let's focus on the essentials:

1. **GitHub App name**  
    
   Give your app a name, this might be the hardest part.
   
2. **Homepage URL**  
   
   You can fill it with the URL of your blog.

3. **Callback URL**  

   You will need an API to receive messages from GitHub, you can just fill it with the blog URL for now and modify it after the server side gets set up.

4. **Expire user authorization tokens**  

   We don't need to expire user tokens, so just uncheck this one.
   
   ![](https://blog-r2.jw1.dev/D1iUvRhedb1DQ3vF.webp)

5. **Webhook**  
   
   Also, we don't need this, uncheck.

6. **Permissions**  
   
   We'll only need the permission to **read and write** Issues, Metadata will automatically become **read-only**.
   
   ![](https://blog-r2.jw1.dev/VnShgY0_DxR5Wz_i.webp)

7. **Where can this GitHub App be installed?**  
   
   Choose _Only on this account_, this should be the default option.

Okay, now click _Create GitHub App_, a new GitHub App should be created in your account now.

## Private key

After the app is created, you should see this message:

![](https://blog-r2.jw1.dev/VbLVXlUXQfKutLPs.webp)

Private keys are used to sign access tokens, this function is related to _expire user tokens_, and we just unchecked this option. So, all we need to do is to generate the private key and forget about it.

## Install the app

![](https://blog-r2.jw1.dev/wzJjRLrDjHk6l_v2.webp)

On the left side (bad design imo), choose _Install App_, and then click the _Install_ button. You should be directed to the installation page.

![](https://blog-r2.jw1.dev/YZnDBXa7Qo7HNB_U.webp)

On this page, you can further configure permissions for your app, I'd recommend you to only select the repo that stores the issues for your blog.

![](https://blog-r2.jw1.dev/fe801QBVCFyTWRif.webp)

---

Next step: [Server side](/server-side)
