const { execSync } = require('child_process');
const fs = require('fs');

const getGitCommitSha = () => {
  try {
    return execSync('git rev-parse HEAD').toString().trim();
  } catch (e) {
    console.error('Failed to get git commit SHA:', e);
    return 'unknown';
  }
};

const commitSha = getGitCommitSha();
const envContent = `NEXT_PUBLIC_GIT_COMMIT_SHA=${commitSha}\n`;

fs.writeFileSync('.env.local', envContent, { flag: 'a' });
console.log('Git commit SHA added to .env.local');