import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

export default function Main() {
	return (
		<div>
			<UserButton afterSignOutUrl='/' />
			<p className='text-3xl font-bold text-indigo-500'>hi Family!</p>
			<Button variant='ghost' className='text-lg'>
				Click me!
			</Button>
			<ModeToggle />
		</div>
	);
}
