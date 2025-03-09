# Setting Up GitHub Pages for Control Tab OAuth

To enable GitHub Pages for this repository, follow these steps:

## 1. Enable GitHub Pages

1. Go to the repository settings: https://github.com/eguitarz/control-tab/settings
2. Scroll down to the "Pages" section in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click "Save"

## 2. Wait for Deployment

GitHub will now build and deploy your site. This may take a few minutes.

## 3. Access Your Site

Once deployed, your site will be available at:
```
https://eguitarz.github.io/control-tab/
```

## 4. Test the OAuth Redirect

Test the OAuth redirect by visiting:
```
https://eguitarz.github.io/control-tab/oauth-redirect.html?code=test&state=test
```

This should attempt to redirect to the `control-tab://` URL scheme.

## 5. Update OAuth Configuration

Use this URL as the redirect URL in your Google OAuth configuration:
```
https://eguitarz.github.io/control-tab/oauth-redirect.html
```

## Troubleshooting

- If the site doesn't deploy, check the "Actions" tab for any workflow errors
- Make sure your repository is public (GitHub Pages requires a public repository for free accounts)
- Ensure the `control-tab://` URL scheme is properly registered in your app