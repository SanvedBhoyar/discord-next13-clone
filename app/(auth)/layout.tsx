import { cn } from '@/lib/utils';

function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={cn('bg-red-200 h-full', true && 'border-2 border-black')}
		>
			{children}
		</div>
	);
}

export default AuthLayout;
