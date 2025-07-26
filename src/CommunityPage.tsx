/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from './components/Button';
import { Stack } from './components/Stack';

const CommunityPage: React.FC = () => {
	return (
		<div css={css`
			min-height: 100vh;
			background-color: hsl(var(--surface-primary));
			color: hsl(var(--content-primary));
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
		`}>
			{/* Header */}
			<header css={css`
				padding: 1rem 2rem;
				border-bottom: 1px solid hsl(var(--border-default));
				background-color: hsl(var(--surface-primary));
			`}>
				<div css={css`
					max-width: 1200px;
					margin: 0 auto;
					display: flex;
					align-items: center;
					justify-content: space-between;
				`}>
					<div css={css`
						font-size: 1.5rem;
						font-weight: 700;
						color: hsl(var(--content-primary));
					`}>
						Coder
					</div>
					<nav css={css`
						display: flex;
						gap: 2rem;
						align-items: center;
					`}>
						<a href="https://coder.com/docs" target="_blank" rel="noopener noreferrer" css={css`
							color: hsl(var(--content-secondary));
							text-decoration: none;
							font-weight: 500;
							&:hover { color: hsl(var(--content-primary)); }
						`}>Docs</a>
						<a href="https://coder.com/pricing" target="_blank" rel="noopener noreferrer" css={css`
							color: hsl(var(--content-secondary));
							text-decoration: none;
							font-weight: 500;
							&:hover { color: hsl(var(--content-primary)); }
						`}>Pricing</a>
						<a href="https://github.com/coder/coder" target="_blank" rel="noopener noreferrer" css={css`
							color: hsl(var(--content-secondary));
							text-decoration: none;
							font-weight: 500;
							&:hover { color: hsl(var(--content-primary)); }
						`}>GitHub</a>
						<Button variant="primary" size="sm" href="https://coder.com/docs/install">Get Started</Button>
					</nav>
				</div>
			</header>

			{/* Main Content */}
			<main css={css`
				max-width: 1200px;
				margin: 0 auto;
				padding: 0 2rem;
			`}>
				{/* Hero Section */}
				<section css={css`
					padding: 4rem 0;
					text-align: center;
				`}>
					<h1 css={css`
						font-size: 3rem;
						font-weight: 700;
						color: hsl(var(--content-primary));
						margin-bottom: 1rem;
						line-height: 1.1;
						
						@media (max-width: 768px) {
							font-size: 2rem;
						}
					`}>
						Coder Community Hub
					</h1>
					<p css={css`
						font-size: 1.25rem;
						color: hsl(var(--content-secondary));
						margin-bottom: 2rem;
						max-width: 600px;
						margin-left: auto;
						margin-right: auto;
						line-height: 1.6;
					`}>
						Join thousands of developers building the future of remote development
					</p>
					<div css={css`
						display: flex;
						gap: 1rem;
						justify-content: center;
						flex-wrap: wrap;
					`}>
						<Button variant="primary" size="lg" href="https://coder.com/docs/install">Install Coder</Button>
						<Button variant="secondary" size="lg" href="https://coder.com/docs">View Documentation</Button>
					</div>
				</section>

				{/* Why Coder Section */}
				<section css={css`
					padding: 4rem 0;
					border-top: 1px solid hsl(var(--border-default));
				`}>
					<h2 css={css`
						font-size: 2.5rem;
						font-weight: 700;
						text-align: center;
						margin-bottom: 3rem;
						color: hsl(var(--content-primary));
					`}>Why Choose Coder?</h2>
					<div css={css`
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
						gap: 2rem;
					`}>
						{[
							{ title: "Deploy Anywhere", desc: "Run on any cloud, on-premises, or hybrid infrastructure" },
							{ title: "Bring Any IDE", desc: "Use VS Code, JetBrains, Vim, or any editor you prefer" },
							{ title: "Scale AI Agents", desc: "Integrate AI coding assistants and scale development workflows" },
							{ title: "Enterprise Ready", desc: "Built for security, compliance, and enterprise-scale deployments" },
						].map((feature, index) => (
							<div key={index} css={css`
								padding: 2rem;
								border: 1px solid hsl(var(--border-default));
								border-radius: var(--radius);
								background-color: hsl(var(--surface-secondary));
								transition: all 0.2s ease;
								
								&:hover {
									border-color: hsl(var(--border-hover));
									transform: translateY(-2px);
									box-shadow: 0 4px 12px hsl(var(--border-default) / 0.15);
								}
							`}>
								<h3 css={css`
									font-size: 1.25rem;
									font-weight: 600;
									margin-bottom: 0.5rem;
									color: hsl(var(--content-primary));
								`}>{feature.title}</h3>
								<p css={css`
									color: hsl(var(--content-secondary));
									margin: 0;
									line-height: 1.6;
								`}>{feature.desc}</p>
							</div>
						))}
					</div>
				</section>

				{/* Get Started Section */}
				<section css={css`
					padding: 4rem 0;
					border-top: 1px solid hsl(var(--border-default));
				`}>
					<div css={css`
						display: grid;
						grid-template-columns: 1fr 1fr;
						gap: 4rem;
						align-items: center;
						
						@media (max-width: 768px) {
							grid-template-columns: 1fr;
							gap: 2rem;
						}
					`}>
						<div>
							<h2 css={css`
								font-size: 2.5rem;
								font-weight: 700;
								margin-bottom: 1rem;
								color: hsl(var(--content-primary));
							`}>Get Started with Coder</h2>
							<p css={css`
								font-size: 1.125rem;
								color: hsl(var(--content-secondary));
								margin-bottom: 2rem;
								line-height: 1.6;
							`}>
								Set up your development environment in minutes with our step-by-step guide.
							</p>
							<Stack spacing={3}>
								{[
									"Download and install Coder",
									"Configure your first template", 
									"Create your workspace",
									"Start coding in the cloud"
								].map((step, index) => (
									<div key={index} css={css`
										display: flex;
										align-items: center;
										gap: 1rem;
									`}>
										<div css={css`
											width: 2rem;
											height: 2rem;
											border-radius: 50%;
											background-color: hsl(var(--highlight-sky));
											color: white;
											display: flex;
											align-items: center;
											justify-content: center;
											font-weight: 600;
											font-size: 0.875rem;
										`}>{index + 1}</div>
										<span css={css`
											color: hsl(var(--content-primary));
											font-weight: 500;
										`}>{step}</span>
									</div>
								))}
							</Stack>
						</div>
						<div css={css`
							padding: 2rem;
							border: 1px solid hsl(var(--border-default));
							border-radius: var(--radius);
							background-color: hsl(var(--surface-secondary));
							text-align: center;
						`}>
							<h3 css={css`
								font-size: 1.5rem;
								font-weight: 600;
								margin-bottom: 1rem;
								color: hsl(var(--content-primary));
							`}>Ready to Start?</h3>
							<p css={css`
								color: hsl(var(--content-secondary));
								margin-bottom: 2rem;
							`}>Install Coder and create your first workspace</p>
							<Button variant="primary" size="lg" href="https://coder.com/docs/install">Install Now</Button>
						</div>
					</div>
				</section>

				{/* Community Section */}
				<section css={css`
					padding: 4rem 0;
					border-top: 1px solid hsl(var(--border-default));
				`}>
					<h2 css={css`
						font-size: 2.5rem;
						font-weight: 700;
						text-align: center;
						margin-bottom: 3rem;
						color: hsl(var(--content-primary));
					`}>Join the Community</h2>
					<div css={css`
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
						gap: 2rem;
					`}>
						{[
							{ name: "Discord", desc: "Chat with developers and get real-time help", color: "var(--surface-purple)" },
							{ name: "GitHub", desc: "Contribute to the project and report issues", color: "var(--surface-grey)" },
							{ name: "Discussions", desc: "Share ideas and best practices", color: "var(--surface-sky)" },
						].map((platform, index) => (
							<div key={index} css={css`
								padding: 2rem;
								border: 1px solid hsl(var(--border-default));
								border-radius: var(--radius);
								background-color: hsl(${platform.color});
								text-align: center;
								transition: all 0.2s ease;
								cursor: pointer;
								
								&:hover {
									border-color: hsl(var(--border-hover));
									transform: translateY(-2px);
									box-shadow: 0 4px 12px hsl(var(--border-default) / 0.15);
								}
							`}>
								<h3 css={css`
									font-size: 1.25rem;
									font-weight: 600;
									margin-bottom: 0.5rem;
									color: hsl(var(--content-primary));
								`}>{platform.name}</h3>
								<p css={css`
									color: hsl(var(--content-secondary));
									margin: 0;
									line-height: 1.5;
								`}>{platform.desc}</p>
							</div>
						))}
					</div>
				</section>

				{/* Contribute Section */}
				<section css={css`
					padding: 4rem 0;
					border-top: 1px solid hsl(var(--border-default));
				`}>
					<h2 css={css`
						font-size: 2.5rem;
						font-weight: 700;
						text-align: center;
						margin-bottom: 3rem;
						color: hsl(var(--content-primary));
					`}>Contribute to Coder</h2>
					<div css={css`
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
						gap: 2rem;
					`}>
						{[
							{ title: "Create Templates", desc: "Build infrastructure templates for development environments", color: "var(--surface-green)" },
							{ title: "Build Modules", desc: "Extend templates with reusable Terraform modules", color: "var(--surface-orange)" },
							{ title: "Bug Bounty", desc: "Help improve Coder by reporting security issues", color: "var(--surface-red)" },
						].map((item, index) => (
							<div key={index} css={css`
								padding: 2rem;
								border: 1px solid hsl(var(--border-default));
								border-radius: var(--radius);
								background-color: hsl(${item.color});
								transition: all 0.2s ease;
								cursor: pointer;
								
								&:hover {
									border-color: hsl(var(--border-hover));
									transform: translateY(-2px);
									box-shadow: 0 4px 12px hsl(var(--border-default) / 0.15);
								}
							`}>
								<h3 css={css`
									font-size: 1.25rem;
									font-weight: 600;
									margin-bottom: 1rem;
									color: hsl(var(--content-primary));
								`}>{item.title}</h3>
								<p css={css`
									color: hsl(var(--content-secondary));
									margin: 0;
									line-height: 1.6;
								`}>{item.desc}</p>
							</div>
						))}
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer css={css`
				border-top: 1px solid hsl(var(--border-default));
				padding: 2rem;
				margin-top: 4rem;
				background-color: hsl(var(--surface-secondary));
			`}>
				<div css={css`
					max-width: 1200px;
					margin: 0 auto;
					text-align: center;
					color: hsl(var(--content-secondary));
				`}>
					<p>© 2024 Coder Technologies, Inc. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default CommunityPage;