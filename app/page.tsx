import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div>
			<p className='text-3xl font-bold text-indigo-500'>hi Family!</p>
			<Button variant='ghost' className='text-lg'>
				Click me!
			</Button>
		</div>
	);
}
