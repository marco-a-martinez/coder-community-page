/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from './components/Button';
import { Stack } from './components/Stack';
import { theme } from './theme';

const CommunityPage: React.FC = () => {
	return (
		<div css={css`
			padding: 2rem;
			max-width: 1200px;
			margin: 0 auto;
			background: ${theme.palette.background.default};
			color: ${theme.palette.text.primary};
			min-height: 100vh;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
		`}>
			{/* Hero Section */}
			<section
				css={css`
					background: ${theme.palette.background.paper};
					border-radius: 8px;
					padding: 3rem;
					margin-bottom: 2rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					gap: 2rem;
					
					@media (max-width: 768px) {
						flex-direction: column;
						text-align: center;
					}
				`}
			>
				<div>
					<h1 css={css`
						font-size: 2.5rem;
						margin-bottom: 2rem;
						font-weight: 700;
						color: ${theme.palette.text.primary};
						
						@media (max-width: 768px) {
							font-size: 2rem;
						}
					`}>
						Coder Community Hub
					</h1>
					<Stack direction="row" spacing={2}>
						<Button variant="contained" size="large">
							Install Coder Community Edition
						</Button>
						<Button variant="outlined" size="large">
							Join Our Community
						</Button>
						<Button variant="outlined" size="large">
							Explore our GitHub
						</Button>
					</Stack>
				</div>
				<div
					css={css`
						background: ${theme.roles.notice.background};
						border: 1px solid ${theme.roles.notice.outline};
						border-radius: 8px;
						padding: 2rem;
						width: 300px;
						height: 200px;
						display: flex;
						align-items: center;
						justify-content: center;
						color: ${theme.roles.notice.text};
						font-weight: 500;
						
						@media (max-width: 768px) {
							width: 100%;
							height: 150px;
						}
					`}
				>
					How to Install Video
				</div>
			</section>

			{/* Why Coder Section */}
			<section
				css={css`
					background: ${theme.palette.background.paper};
					border-radius: 8px;
					padding: 3rem;
					margin-bottom: 2rem;
				`}
			>
				<h2 css={css`
					font-size: 2rem;
					margin-bottom: 2rem;
					font-weight: 600;
					color: ${theme.palette.text.primary};
				`}>Why Coder?</h2>
				<div
					css={css`
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
						gap: 1rem;
						height: 200px;
					`}
				>
					{[
						"Deploy anywhere",
						"Bring any IDE",
						"Run popular OS's",
						"Scale AI coding agents",
						"Integrate your stack",
					].map((feature, index) => (
						<div
							key={index}
							css={css`
								background: ${theme.palette.background.default};
								border: 1px solid ${theme.palette.divider};
								border-radius: 8px;
								padding: 1rem;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								transition: transform 0.2s ease;
								
								&:hover {
									transform: translateY(-2px);
								}
							`}
						>
							<div
								css={css`
									height: 60%;
									background: linear-gradient(135deg, ${theme.roles.notice.outline}20, ${theme.roles.info.outline}20);
									border-radius: 4px;
									margin-bottom: 0.5rem;
									border: 1px solid ${theme.palette.divider};
								`}
							/>
							<p css={css`
								font-size: 0.9rem;
								margin: 0;
								color: ${theme.palette.text.secondary};
								font-weight: 500;
							`}>{feature}</p>
						</div>
					))}
				</div>
			</section>

			{/* Get Started Section */}
			<section
				css={css`
					background: ${theme.palette.background.paper};
					border-radius: 8px;
					padding: 3rem;
					margin-bottom: 2rem;
				`}
			>
				<h2 css={css`
					font-size: 2rem;
					margin-bottom: 2rem;
					font-weight: 600;
					color: ${theme.palette.text.primary};
				`}>
					Get Started with Coder
				</h2>
				<div
					css={css`
						display: flex;
						gap: 2rem;
						align-items: flex-start;
						
						@media (max-width: 768px) {
							flex-direction: column;
						}
					`}
				>
					<div css={css`flex: 1;`}>
						<Stack spacing={2}>
							{[
								"📋 Download and install Coder",
								"🔧 Configure your first template",
								"🚀 Create your workspace",
								"💻 Start coding in the cloud"
							].map((item, index) => (
								<div
									key={index}
									css={css`
										background: ${theme.roles.notice.background};
										border: 1px solid ${theme.roles.notice.outline};
										border-radius: 8px;
										padding: 1rem 2rem;
										color: ${theme.roles.notice.text};
										font-weight: 500;
										transition: transform 0.2s ease;
										
										&:hover {
											transform: translateX(4px);
										}
									`}
								>
									{item}
								</div>
							))}
						</Stack>
					</div>
					<div
						css={css`
							background: ${theme.roles.notice.background};
							border: 1px solid ${theme.roles.notice.outline};
							border-radius: 8px;
							padding: 3rem;
							width: 300px;
							height: 200px;
							display: flex;
							align-items: center;
							justify-content: center;
							color: ${theme.roles.notice.text};
							font-weight: 600;
							font-size: 1.2rem;
							cursor: pointer;
							transition: transform 0.2s ease;
							
							&:hover {
								transform: scale(1.02);
							}
							
							@media (max-width: 768px) {
								width: 100%;
							}
						`}
					>
						🚀 Install Coder
					</div>
				</div>
			</section>

			{/* Contribute Section */}
			<section
				css={css`
					background: ${theme.palette.background.paper};
					border-radius: 8px;
					padding: 3rem;
					margin-bottom: 2rem;
				`}
			>
				<h2 css={css`
					font-size: 2rem;
					margin-bottom: 2rem;
					font-weight: 600;
					color: ${theme.palette.text.primary};
				`}>
					Contribute to Coder
				</h2>
				<div
					css={css`
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
						gap: 2rem;
					`}
				>
					<div
						css={css`
							background: ${theme.roles.notice.background};
							border: 1px solid ${theme.roles.notice.outline};
							border-radius: 8px;
							padding: 2rem;
							height: 200px;
							display: flex;
							flex-direction: column;
							justify-content: center;
							color: ${theme.roles.notice.text};
							cursor: pointer;
							transition: transform 0.2s ease;
							
							&:hover {
								transform: translateY(-4px);
							}
						`}
					>
						<h3 css={css`margin-bottom: 1rem; font-size: 1.3rem;`}>🏗️ Create a Template</h3>
						<p css={css`font-size: 0.9rem; margin: 0; line-height: 1.5;`}>
							Templates describe the infrastructure for development
							environment as code
						</p>
					</div>
					<div
						css={css`
							background: ${theme.roles.info.background};
							border: 1px solid ${theme.roles.info.outline};
							border-radius: 8px;
							padding: 2rem;
							height: 200px;
							display: flex;
							flex-direction: column;
							justify-content: center;
							color: ${theme.roles.info.text};
							cursor: pointer;
							transition: transform 0.2s ease;
							
							&:hover {
								transform: translateY(-4px);
							}
						`}
					>
						<h3 css={css`margin-bottom: 1rem; font-size: 1.3rem;`}>🧩 Create a Module</h3>
						<p css={css`font-size: 0.9rem; margin: 0; line-height: 1.5;`}>
							Modules extend Templates to enable composing a
							feature-rich development environment in a few lines of
							Terraform
						</p>
					</div>
					<div
						css={css`
							background: ${theme.roles.success.background};
							border: 1px solid ${theme.roles.success.outline};
							border-radius: 8px;
							padding: 2rem;
							height: 200px;
							display: flex;
							flex-direction: column;
							justify-content: center;
							color: ${theme.roles.success.text};
							cursor: pointer;
							transition: transform 0.2s ease;
							
							&:hover {
								transform: translateY(-4px);
							}
						`}
					>
						<h3 css={css`margin-bottom: 1rem; font-size: 1.3rem;`}>🐛 Squash a Bug</h3>
						<p css={css`font-size: 0.9rem; margin: 0; line-height: 1.5;`}>
							Join the Coder Bug Bounty Program and help improve the platform
						</p>
					</div>
				</div>
			</section>

			{/* Join Community Section */}
			<section
				css={css`
					background: ${theme.palette.background.paper};
					border-radius: 8px;
					padding: 3rem;
					margin-bottom: 2rem;
				`}
			>
				<h2 css={css`
					font-size: 2rem;
					margin-bottom: 2rem;
					font-weight: 600;
					color: ${theme.palette.text.primary};
				`}>
					Join the Coder Community
				</h2>
				<div
					css={css`
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
						gap: 2rem;
					`}
				>
					{[
						{ name: "💬 Discord", desc: "Chat with the community" },
						{ name: "💭 GitHub Discussions", desc: "Share ideas and get help" },
						{ name: "🤝 Meetup", desc: "Join local events" }
					].map((platform, index) => (
						<div
							key={index}
							css={css`
								background: ${theme.roles.notice.background};
								border: 1px solid ${theme.roles.notice.outline};
								border-radius: 8px;
								padding: 3rem;
								height: 150px;
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: center;
								color: ${theme.roles.notice.text};
								font-weight: 600;
								font-size: 1.2rem;
								cursor: pointer;
								transition: all 0.2s ease;
								text-align: center;
								
								&:hover {
									transform: translateY(-2px);
									box-shadow: 0 4px 12px rgba(0,0,0,0.3);
								}
							`}
						>
							<div css={css`margin-bottom: 0.5rem;`}>{platform.name}</div>
							<div css={css`font-size: 0.9rem; font-weight: 400; opacity: 0.8;`}>{platform.desc}</div>
						</div>
					))}
				</div>
			</section>

			{/* Community Photos Section */}
			<section
				css={css`
					background: ${theme.palette.background.paper};
					border-radius: 8px;
					padding: 3rem;
					margin-bottom: 2rem;
				`}
			>
				<h2 css={css`
					font-size: 2rem;
					margin-bottom: 2rem;
					font-weight: 600;
					color: ${theme.palette.text.primary};
				`}>
					Community Highlights
				</h2>
				<div
					css={css`
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
						gap: 1rem;
					`}
				>
					{["📸 Community Photo", "🎉 Event Highlights", "🏆 Success Stories"].map(
						(photo, index) => (
							<div
								key={index}
								css={css`
									background: ${theme.roles.warning.background};
									border: 1px solid ${theme.roles.warning.outline};
									border-radius: 8px;
									padding: 2rem;
									height: 200px;
									display: flex;
									align-items: center;
									justify-content: center;
									color: ${theme.roles.warning.text};
									font-weight: 500;
									transition: transform 0.2s ease;
									cursor: pointer;
									
									&:hover {
										transform: scale(1.02);
									}
								`}
							>
								{photo}
							</div>
						),
					)}
				</div>
			</section>

			{/* Coder Champions Section */}
			<section
				css={css`
					background: ${theme.palette.background.paper};
					border-radius: 8px;
					padding: 3rem;
				`}
			>
				<h2 css={css`
					font-size: 2rem;
					margin-bottom: 2rem;
					font-weight: 600;
					color: ${theme.palette.text.primary};
				`}>
					Who are the Coder Champions?
				</h2>
				<div
					css={css`
						display: flex;
						gap: 1rem;
						align-items: flex-end;
						justify-content: center;
						flex-wrap: wrap;
					`}
				>
					<div
						css={css`
							background: ${theme.roles.notice.background};
							border: 1px solid ${theme.roles.notice.outline};
							border-radius: 8px;
							padding: 2rem;
							width: 200px;
							height: 150px;
							display: flex;
							align-items: center;
							justify-content: center;
							color: ${theme.roles.notice.text};
							font-weight: 600;
							font-size: 1.1rem;
						`}
					>
						🏆 Community Leaders
					</div>
					{[120, 100, 80, 60].map((height, index) => (
						<div
							key={index}
							css={css`
								background: ${index % 2 === 0 ? theme.roles.warning.background : theme.roles.info.background};
								border: 1px solid ${index % 2 === 0 ? theme.roles.warning.outline : theme.roles.info.outline};
								border-radius: 8px;
								width: 80px;
								height: ${height}px;
								transition: transform 0.2s ease;
								cursor: pointer;
								
								&:hover {
									transform: translateY(-4px);
								}
							`}
						/>
					))}
				</div>
				<p css={css`
					text-align: center;
					margin-top: 2rem;
					color: ${theme.palette.text.secondary};
					font-style: italic;
				`}>
					Recognizing our most active contributors and community members
				</p>
			</section>
		</div>
	);
};

export default CommunityPage;