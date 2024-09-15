import { BentoGrid, BentoGridItem } from '@awesome-ui/components/ui/bento-grid';
import { Icon } from '@iconify/react';

const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
);
const items = [
	{
		title: 'The Dawn of Innovation',
		description:
			'Explore the birth of groundbreaking ideas and inventions.',
		header: <Skeleton />,
		icon: (
			<Icon className='h-4 w-4 text-neutral-500' icon='lucide:aperture' />
		),
	},
	{
		title: 'The Digital Revolution',
		description: 'Dive into the transformative power of technology.',
		header: <Skeleton />,
		icon: (
			<Icon className='h-4 w-4 text-neutral-500' icon='lucide:aperture' />
		),
	},
	{
		title: 'The Future of Finance',
		description: 'Explore the future of finance. From fintech to crypto.',
		header: <Skeleton />,
		icon: (
			<Icon className='h-4 w-4 text-neutral-500' icon='lucide:aperture' />
		),
	},
];

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
				{/* Bento Grid */}
				<BentoGrid className='max-w-4xl mx-auto'>
					{items.map((item, i) => (
						<BentoGridItem
							key={i}
							title={item.title}
							description={item.description}
							header={item.header}
							icon={item.icon}
						/>
					))}
				</BentoGrid>
			</main>
			<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
				Simple Footer
			</footer>
		</div>
	);
}
