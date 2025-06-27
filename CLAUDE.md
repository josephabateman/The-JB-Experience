# 🤖 Claude Code Workflow Instructions

## 🔧 **MANDATORY Git Workflow - NEVER SKIP**
**⚠️ CRITICAL**: For EVERY code change made to this project, you MUST ALWAYS:

1. **Make the change** (edit/create files)
2. **Stage**: `git add <changed-files>`
3. **Commit**: `git commit -m "descriptive message"`
4. **Push**: `git push origin main`

### ✅ Auto-Reminder Checklist
After making ANY code change, ask yourself:
- [ ] Did I `git add` the changed files?
- [ ] Did I `git commit` with a descriptive message?
- [ ] Did I `git push origin main`?
- [ ] Did the deployment succeed on Vercel?

### 📝 Commit Message Format
```
Brief description of change

- Bullet point details
- What was changed and why
- Any important notes

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## 🚀 Vercel Deployment
**Webhook URL**: `https://api.vercel.com/v1/integrations/deploy/prj_Gib2iLpI95jeAzzs0Hvg4iTYv3dP/DZlioKp1s9`

**Manual trigger if needed**:
```bash
curl -X POST "https://api.vercel.com/v1/integrations/deploy/prj_Gib2iLpI95jeAzzs0Hvg4iTYv3dP/DZlioKp1s9"
```

**Auto-deployment**: Pushes to `main` branch automatically trigger Vercel deployments.

## 📋 Project Information
- **Project**: The JB Experience - London Wedding & Event Band Website
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Main branch**: main
- **Platform**: Vercel

## 🎯 Current Implementation Status
- ✅ Distance calculation with Nominatim API + postcode fallback
- ✅ Accurate pricing (travel costs, surcharges, congestion charges)
- ✅ Dual submission CTAs (in quote box + main form)
- ✅ Dynamic button text based on quote visibility
- ✅ Comprehensive UK postcode coverage (50+ areas)
- ✅ ESLint compliant code

## 🛠️ Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks

## ⚠️ Critical Reminders
1. **NEVER** make code changes without committing and pushing
2. **ALWAYS** test distance calculation with postcodes like BD10 0SQ
3. **VERIFY** build success on Vercel after every deployment
4. **ESCAPE** apostrophes in React text using `&apos;`
5. **CHECK** that quote calculation works for different UK postcodes
6. **ENSURE** both quote submission buttons work correctly

## 🔄 Session Restart Protocol
When Claude Code is reopened:
1. **First action**: Read this CLAUDE.md file
2. **Remember**: All git workflow requirements
3. **Use**: The stored Vercel webhook URL
4. **Follow**: The mandatory git workflow for every change

---
**This file ensures consistent workflow across ALL Claude Code sessions**