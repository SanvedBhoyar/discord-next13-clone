import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initial-profile';
import { redirect } from 'next/navigation';

async function SetupPage() {
	const profile = await initialProfile();

	const server = await db.server.findFirst({
		where: {
			members: {
				some: {
					profileId: profile.id,
				},
			},
		},
	});

	return server ? (
		redirect(`/servers/${server.id}`)
	) : (
		<div>Create a server</div>
	);
}

export default SetupPage;
