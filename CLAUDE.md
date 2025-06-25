# Claude Code Configuration

## Project Information
- Project: The JB Experience - London Wedding & Event Band Website
- Framework: Next.js 14 with TypeScript
- Styling: Tailwind CSS
- Main branch: main

## Deployment
- Platform: Vercel
- Deploy webhook: https://api.vercel.com/v1/integrations/deploy/prj_Gib2iLpI95jeAzzs0Hvg4iTYv3dP/DZlioKp1s9
- Auto-deploy: Trigger deployment after pushing changes
- Always use this webhook for deployments

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks

## Deployment Workflow
1. Make changes and commit to git
2. Push to main branch
3. Trigger deployment using: curl -X POST "https://api.vercel.com/v1/integrations/deploy/prj_Gib2iLpI95jeAzzs0Hvg4iTYv3dP/DZlioKp1s9"

## Important Notes
- Always commit changes with descriptive messages
- Test locally before deploying
- Use the webhook to trigger Vercel deployments after git push
- Maintain performance optimizations (images, lazy loading, etc.)
- Fix any ESLint errors before deploying