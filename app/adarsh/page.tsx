import Profile from "@/components/Profile";
import Timeline from "@/components/Timeline";

const page = () => {
	return (
		<div className="container grid grid-cols-3 gap-6">
			<Profile className="flex flex-col justify-center py-12" />
			<Timeline className="col-span-2" />
		</div>
	);
};

export default page;
