export const nuiCallback = async <T extends Record<string, any>, K>(
	endpoint: `/${string}`,
	data?: T,
	cb?: (result: K) => void
): Promise<void> => {
	try {
		const result = await fetch(
			`https://${process.env.NEXT_PUBLIC_RESOURCE_NAME}${endpoint}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
				body: JSON.stringify(data || {}),
			}
		);
		if (!cb) return;
		cb(await result.json());
	} catch (error) {
		console.log(error);
		throw error;
	}
};
