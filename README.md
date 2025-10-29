# Wild Cats Reading Games 🐆

Educational reading games for Kent Elementary School students in Kent, WA.

## Features

- 14 interactive reading games covering phonics, sight words, fluency, and comprehension
- Progress tracking and reporting
- Aligned with educational standards (PA, BL, RW, FLU, COMP, etc.)
- Speech synthesis for audio support

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

### Pipeline Stages

1. **Lint Check** - Validates code quality
   - ESLint for JavaScript
   - Stylelint for CSS
   - Blocks deployment if errors are found

2. **Deploy to AWS Amplify** - Automatic deployment
   - Only runs on successful lint check
   - Deploys to AWS Amplify on push to main branch

## Setup Instructions

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/kaur000/wild_cats.git
   cd wild_cats
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run lint checks:
   ```bash
   npm run lint
   ```

4. Fix lint issues automatically:
   ```bash
   npm run lint:fix
   ```

### GitHub Secrets Setup

To enable automatic deployment, add these secrets to your GitHub repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:

   - `AWS_ACCESS_KEY_ID` - Your AWS access key
   - `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
   - `AWS_REGION` - AWS region (e.g., `us-east-1`)
   - `AMPLIFY_APP_ID` - Your Amplify app ID

### Getting AWS Credentials

1. Log in to AWS Console
2. Go to IAM → Users → Create User
3. Attach policy: `AdministratorAccess-Amplify`
4. Create access key and save the credentials

### Getting Amplify App ID

1. Go to AWS Amplify Console
2. Select your app
3. The App ID is in the URL: `https://console.aws.amazon.com/amplify/home?region=us-east-1#/APP_ID`

## Project Structure

```
.
├── index.html              # Main HTML file
├── reading-games.css       # Stylesheet
├── reading-games.js        # Game logic
├── amplify.yml            # Amplify configuration
├── package.json           # Dependencies and scripts
├── .eslintrc.json         # ESLint configuration
├── .stylelintrc.js        # Stylelint configuration
└── .github/
    └── workflows/
        └── deploy.yml     # CI/CD pipeline
```

## NPM Scripts

- `npm run lint` - Run all lint checks
- `npm run lint:js` - Run ESLint only
- `npm run lint:css` - Run Stylelint only
- `npm run lint:fix` - Auto-fix lint issues

## License

MIT License - Kent Elementary School
