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
						color: hsl(var(--content-link));
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
						Built for developers. Ready for their agents.
					</h1>
					<p css={css`
						font-size: 1.25rem;
						color: hsl(var(--content-secondary));
						margin-bottom: 2rem;
						max-width: 700px;
						margin-left: auto;
						margin-right: auto;
						line-height: 1.6;
					`}>
						Coder is an open-source platform where developers and AI agents collaborate securely in self-hosted environments on your infrastructure.
					</p>
					<div css={css`
						display: flex;
						gap: 1rem;
						justify-content: center;
						flex-wrap: wrap;
					`}>
						<Button variant="primary" size="lg" href="https://coder.com/docs/install">Deploy Coder</Button>
						<Button variant="secondary" size="lg" href="https://coder.com/docs">Read the Docs</Button>
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
						margin-bottom: 1rem;
						color: hsl(var(--content-primary));
					`}>More productive, from day one.</h2>
					<p css={css`
						font-size: 1.125rem;
						color: hsl(var(--content-secondary));
						text-align: center;
						margin-bottom: 3rem;
						max-width: 600px;
						margin-left: auto;
						margin-right: auto;
					`}>We believe developer productivity, code security, and infrastructure cost control can coexist—and Coder makes it possible.</p>
					<div css={css`
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
						gap: 2rem;
					`}>
						{[
							{ title: "Secure source code", desc: "Move source code and data off decentralized laptops into development environments on your secure and compliant infrastructure." },
							{ title: "Optimize compute costs", desc: "Automatically right-size developer infrastructure, share resources, and stop paying for idle development environments." },
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

				{/* Fits your flow Section */}
				<section css={css`
					padding: 4rem 0;
					border-top: 1px solid hsl(var(--border-default));
				`}>
					<h2 css={css`
						font-size: 2.5rem;
						font-weight: 700;
						text-align: center;
						margin-bottom: 1rem;
						color: hsl(var(--content-primary));
					`}>Fits your flow. Scales as you grow.</h2>
					<p css={css`
						font-size: 1.125rem;
						color: hsl(var(--content-secondary));
						text-align: center;
						margin-bottom: 3rem;
						max-width: 600px;
						margin-left: auto;
						margin-right: auto;
					`}>Whether you're a team of 1 or 10,000, Coder adapts to the way you work with the stack you already use, not the other way around.</p>
					<div css={css`
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
						gap: 2rem;
					`}>
						{[
							{ title: "Deploy anywhere", desc: "Deploy Coder on your infrastructure, in any cloud or fully air-gapped on-premises, to maintain complete control.", href: "https://coder.com/docs/install/cloud" },
							{ title: "Bring any IDE", desc: "Use any web-based or desktop IDE — VS Code, JetBrains, Cursor, Jupyter. Coder maintains official plugins for VS Code and JetBrains.", href: "https://coder.com/docs/user-guides/workspace-access" },
							{ title: "Run popular OS's", desc: "Work across Mac, Linux, and Windows — Coder supports the tools and operating systems your projects require.", href: "https://registry.coder.com/templates" },
							{ title: "Scale AI coding agents", desc: "Coder gives you the control to run any AI coding agent — on your infrastructure, alongside your developers, at scale.", href: "https://coder.com/docs/ai-coder" },
							{ title: "Integrate your stack", desc: "Bring your existing identity provider, container registry, observability tools, and Terraform infrastructure — no lock-in required.", href: "https://registry.coder.com/modules" },
						].map((feature, index) => (
							<a key={index} href={feature.href} target="_blank" rel="noopener noreferrer" css={css`
								padding: 2rem;
								border: 1px solid hsl(var(--border-default));
								border-radius: var(--radius);
								background-color: hsl(var(--surface-secondary));
								transition: all 0.2s ease;
								text-decoration: none;
								color: inherit;
								display: block;
								
								&:hover {
									border-color: hsl(var(--content-link));
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
							</a>
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
							`}>No more "works on my machine".</h2>
							<p css={css`
								font-size: 1.125rem;
								color: hsl(var(--content-secondary));
								margin-bottom: 2rem;
								line-height: 1.6;
							`}>
								Standardize and shift development from laptops to your infrastructure — without sacrificing the tools, speed, or experience developers and coding agents need.
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
											background-color: hsl(var(--content-link));
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
							{ name: "GitHub", desc: "Contribute to the project and report issues", color: "var(--surface-sky)" },
							{ name: "Discussions", desc: "Share ideas and best practices", color: "var(--surface-purple)" },
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